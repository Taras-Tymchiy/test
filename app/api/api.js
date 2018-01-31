//  @flow
import { checkHttpStatus } from "./utils";
import { Post } from "../entities/Post";
import { QueryParams } from "./types/QueryParams";

// export async function getItems(url: string): Promise<Post[]> {
//     console.log('getItems', url);
//     const response = await fetch(url);
//     console.log('response', response);
//     checkHttpStatus(response);
//     const json: Post[] = await response.json();
//     return json;
// }

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