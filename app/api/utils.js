// @flow
import { HttpError } from "./types/HttpError";

export function checkHttpStatus(response: Response) {
    if (response.ok) {
        return response;
    } else {
        throw new HttpError(response);
    }
}