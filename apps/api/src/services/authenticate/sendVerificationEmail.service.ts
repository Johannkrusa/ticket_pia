import transporter from '@/helpers/transporter.helper';
import { createToken } from '@/helpers/createToken.helper';
import { compileHtml } from '@/helpers/compileHtml.helper';
import { ISendEmailVerification } from '@/types/types';

export const sendEmailVerificationService = async ({
  userId,
  roleId,
  userEmail,
}: ISendEmailVerification) => {
  try {
    const token = createToken({
      userId,
      roleId,
    });

    const html = compileHtml(token);

    await transporter.sendMail({
      to: userEmail,
      subject: 'Email Verification',
      html: html,
    });
  } catch (error) {
    throw {
      message: 'Cannot send email',
      error,
      status: 400,
    };
  }
};
