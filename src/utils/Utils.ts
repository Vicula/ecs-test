export abstract class Utils {
  public static sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export default Utils;
