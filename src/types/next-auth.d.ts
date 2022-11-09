import "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription: {
      ref: object,
      ts: number,
      data: {
        id: string,
        status: string
        price_id: string
      }
    }
  }
}