//  @flow
import { checkHttpStatus } from "./utils";
import { Post } from "../entities/Post";
import { QueryParams } from "./types/QueryParams";

export function getItems(queryParams: QueryParams): Promise<Post[]> {
    const url = `${queryParams.url}?limit=${queryParams.count}`;
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': ''
        }
    }).then(checkHttpStatus)
      .then(response=> response.json());
}