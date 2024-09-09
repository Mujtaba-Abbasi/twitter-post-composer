export const getErrorMessage = (errorCode: number) => {
  let errorMessage;

  switch (errorCode) {
    case 401:
      errorMessage = "Session has expired, kindly login again.";
      break;

    case 403:
      errorMessage =
        "You are not allowed to create a Tweet with duplicate content.";
      break;

    case 326:
      errorMessage = "Your X account has been suspended.";
      break;

    default:
      break;
  }

  return errorMessage;
};
