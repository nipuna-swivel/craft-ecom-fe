import { isValidPhoneNumber } from "libphonenumber-js";

const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

//validate email
export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

//sri lanka phone number validation
export const validatePhoneNumber = (phoneNo: string): boolean => {
  return isValidPhoneNumber(phoneNo, "LK");
};

//check image type is jpg or png
export const validateImageType = (file: File): boolean => {
  return file.type === "image/jpeg" || file.type === "image/png";
};

//check image size is less than 2MB
export const validateImageSize = (file: File): boolean => {
  return file.size / 1024 / 1024 < 2;
};
