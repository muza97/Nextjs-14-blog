import {createClient} from "next-sanity"
import imageurlbuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId:'78l9w9yi',
    useCdn: false,
});

const builder = imageurlbuilder(client)

export function urlFor(source: any) {
        return builder.image(source);
}