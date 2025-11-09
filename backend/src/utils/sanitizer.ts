import createDomPurify, { WindowLike } from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDomPurify(window as unknown as WindowLike);

/**
 * Takes the message input from the data object and purifies it before sending it to the email service.
 * @param dirty string
 * @returns string
 */
export const sanitizeInput = (dirty: string): string => {
  return DOMPurify.sanitize(dirty);
};
