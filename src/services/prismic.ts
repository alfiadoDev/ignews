import { createClient } from '@prismicio/client'

// export function getPrismicClient() {
//   const prismic = new Client(
//     process.env.PRISMIC_ACCESS_TOKEN,
//     {
//       accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//     }
//   )

//   return prismic
// }

export const prismic = createClient(process.env.PRISMIC_ENDPOINT,
  {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  }
)