
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Today
 * 
 */
export type Today = $Result.DefaultSelection<Prisma.$TodayPayload>
/**
 * Model TodayTag
 * 
 */
export type TodayTag = $Result.DefaultSelection<Prisma.$TodayTagPayload>
/**
 * Model TodayMentionUser
 * 
 */
export type TodayMentionUser = $Result.DefaultSelection<Prisma.$TodayMentionUserPayload>
/**
 * Model TodayVisibleUser
 * 
 */
export type TodayVisibleUser = $Result.DefaultSelection<Prisma.$TodayVisibleUserPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model FriendsGroup
 * 
 */
export type FriendsGroup = $Result.DefaultSelection<Prisma.$FriendsGroupPayload>
/**
 * Model GroupFriend
 * 
 */
export type GroupFriend = $Result.DefaultSelection<Prisma.$GroupFriendPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.today`: Exposes CRUD operations for the **Today** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todays
    * const todays = await prisma.today.findMany()
    * ```
    */
  get today(): Prisma.TodayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todayTag`: Exposes CRUD operations for the **TodayTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodayTags
    * const todayTags = await prisma.todayTag.findMany()
    * ```
    */
  get todayTag(): Prisma.TodayTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todayMentionUser`: Exposes CRUD operations for the **TodayMentionUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodayMentionUsers
    * const todayMentionUsers = await prisma.todayMentionUser.findMany()
    * ```
    */
  get todayMentionUser(): Prisma.TodayMentionUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todayVisibleUser`: Exposes CRUD operations for the **TodayVisibleUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodayVisibleUsers
    * const todayVisibleUsers = await prisma.todayVisibleUser.findMany()
    * ```
    */
  get todayVisibleUser(): Prisma.TodayVisibleUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendsGroup`: Exposes CRUD operations for the **FriendsGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendsGroups
    * const friendsGroups = await prisma.friendsGroup.findMany()
    * ```
    */
  get friendsGroup(): Prisma.FriendsGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupFriend`: Exposes CRUD operations for the **GroupFriend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupFriends
    * const groupFriends = await prisma.groupFriend.findMany()
    * ```
    */
  get groupFriend(): Prisma.GroupFriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Today: 'Today',
    TodayTag: 'TodayTag',
    TodayMentionUser: 'TodayMentionUser',
    TodayVisibleUser: 'TodayVisibleUser',
    Tag: 'Tag',
    Comment: 'Comment',
    Reaction: 'Reaction',
    Friendship: 'Friendship',
    FriendsGroup: 'FriendsGroup',
    GroupFriend: 'GroupFriend',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "today" | "todayTag" | "todayMentionUser" | "todayVisibleUser" | "tag" | "comment" | "reaction" | "friendship" | "friendsGroup" | "groupFriend" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Today: {
        payload: Prisma.$TodayPayload<ExtArgs>
        fields: Prisma.TodayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          findFirst: {
            args: Prisma.TodayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          findMany: {
            args: Prisma.TodayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>[]
          }
          create: {
            args: Prisma.TodayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          createMany: {
            args: Prisma.TodayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>[]
          }
          delete: {
            args: Prisma.TodayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          update: {
            args: Prisma.TodayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          deleteMany: {
            args: Prisma.TodayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>[]
          }
          upsert: {
            args: Prisma.TodayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayPayload>
          }
          aggregate: {
            args: Prisma.TodayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToday>
          }
          groupBy: {
            args: Prisma.TodayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayCountArgs<ExtArgs>
            result: $Utils.Optional<TodayCountAggregateOutputType> | number
          }
        }
      }
      TodayTag: {
        payload: Prisma.$TodayTagPayload<ExtArgs>
        fields: Prisma.TodayTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          findFirst: {
            args: Prisma.TodayTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          findMany: {
            args: Prisma.TodayTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>[]
          }
          create: {
            args: Prisma.TodayTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          createMany: {
            args: Prisma.TodayTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodayTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>[]
          }
          delete: {
            args: Prisma.TodayTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          update: {
            args: Prisma.TodayTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          deleteMany: {
            args: Prisma.TodayTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodayTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>[]
          }
          upsert: {
            args: Prisma.TodayTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayTagPayload>
          }
          aggregate: {
            args: Prisma.TodayTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodayTag>
          }
          groupBy: {
            args: Prisma.TodayTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayTagCountArgs<ExtArgs>
            result: $Utils.Optional<TodayTagCountAggregateOutputType> | number
          }
        }
      }
      TodayMentionUser: {
        payload: Prisma.$TodayMentionUserPayload<ExtArgs>
        fields: Prisma.TodayMentionUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayMentionUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayMentionUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          findFirst: {
            args: Prisma.TodayMentionUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayMentionUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          findMany: {
            args: Prisma.TodayMentionUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>[]
          }
          create: {
            args: Prisma.TodayMentionUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          createMany: {
            args: Prisma.TodayMentionUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodayMentionUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>[]
          }
          delete: {
            args: Prisma.TodayMentionUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          update: {
            args: Prisma.TodayMentionUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          deleteMany: {
            args: Prisma.TodayMentionUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayMentionUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodayMentionUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>[]
          }
          upsert: {
            args: Prisma.TodayMentionUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayMentionUserPayload>
          }
          aggregate: {
            args: Prisma.TodayMentionUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodayMentionUser>
          }
          groupBy: {
            args: Prisma.TodayMentionUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayMentionUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayMentionUserCountArgs<ExtArgs>
            result: $Utils.Optional<TodayMentionUserCountAggregateOutputType> | number
          }
        }
      }
      TodayVisibleUser: {
        payload: Prisma.$TodayVisibleUserPayload<ExtArgs>
        fields: Prisma.TodayVisibleUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodayVisibleUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodayVisibleUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          findFirst: {
            args: Prisma.TodayVisibleUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodayVisibleUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          findMany: {
            args: Prisma.TodayVisibleUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>[]
          }
          create: {
            args: Prisma.TodayVisibleUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          createMany: {
            args: Prisma.TodayVisibleUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodayVisibleUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>[]
          }
          delete: {
            args: Prisma.TodayVisibleUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          update: {
            args: Prisma.TodayVisibleUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          deleteMany: {
            args: Prisma.TodayVisibleUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodayVisibleUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodayVisibleUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>[]
          }
          upsert: {
            args: Prisma.TodayVisibleUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodayVisibleUserPayload>
          }
          aggregate: {
            args: Prisma.TodayVisibleUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodayVisibleUser>
          }
          groupBy: {
            args: Prisma.TodayVisibleUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodayVisibleUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodayVisibleUserCountArgs<ExtArgs>
            result: $Utils.Optional<TodayVisibleUserCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      FriendsGroup: {
        payload: Prisma.$FriendsGroupPayload<ExtArgs>
        fields: Prisma.FriendsGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendsGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendsGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          findFirst: {
            args: Prisma.FriendsGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendsGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          findMany: {
            args: Prisma.FriendsGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>[]
          }
          create: {
            args: Prisma.FriendsGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          createMany: {
            args: Prisma.FriendsGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendsGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>[]
          }
          delete: {
            args: Prisma.FriendsGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          update: {
            args: Prisma.FriendsGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          deleteMany: {
            args: Prisma.FriendsGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendsGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendsGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>[]
          }
          upsert: {
            args: Prisma.FriendsGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsGroupPayload>
          }
          aggregate: {
            args: Prisma.FriendsGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendsGroup>
          }
          groupBy: {
            args: Prisma.FriendsGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendsGroupCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupCountAggregateOutputType> | number
          }
        }
      }
      GroupFriend: {
        payload: Prisma.$GroupFriendPayload<ExtArgs>
        fields: Prisma.GroupFriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          findFirst: {
            args: Prisma.GroupFriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          findMany: {
            args: Prisma.GroupFriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>[]
          }
          create: {
            args: Prisma.GroupFriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          createMany: {
            args: Prisma.GroupFriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupFriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>[]
          }
          delete: {
            args: Prisma.GroupFriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          update: {
            args: Prisma.GroupFriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          deleteMany: {
            args: Prisma.GroupFriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupFriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupFriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>[]
          }
          upsert: {
            args: Prisma.GroupFriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFriendPayload>
          }
          aggregate: {
            args: Prisma.GroupFriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupFriend>
          }
          groupBy: {
            args: Prisma.GroupFriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupFriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupFriendCountArgs<ExtArgs>
            result: $Utils.Optional<GroupFriendCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    today?: TodayOmit
    todayTag?: TodayTagOmit
    todayMentionUser?: TodayMentionUserOmit
    todayVisibleUser?: TodayVisibleUserOmit
    tag?: TagOmit
    comment?: CommentOmit
    reaction?: ReactionOmit
    friendship?: FriendshipOmit
    friendsGroup?: FriendsGroupOmit
    groupFriend?: GroupFriendOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    todays: number
    tags: number
    comments: number
    reactions: number
    friendshipsAsUser1: number
    friendshipsAsUser2: number
    friendsGroups: number
    notifications: number
    actorNotifications: number
    groupFriends: number
    todayMentionedUsers: number
    todayVisibleUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todays?: boolean | UserCountOutputTypeCountTodaysArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    friendshipsAsUser1?: boolean | UserCountOutputTypeCountFriendshipsAsUser1Args
    friendshipsAsUser2?: boolean | UserCountOutputTypeCountFriendshipsAsUser2Args
    friendsGroups?: boolean | UserCountOutputTypeCountFriendsGroupsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    actorNotifications?: boolean | UserCountOutputTypeCountActorNotificationsArgs
    groupFriends?: boolean | UserCountOutputTypeCountGroupFriendsArgs
    todayMentionedUsers?: boolean | UserCountOutputTypeCountTodayMentionedUsersArgs
    todayVisibleUsers?: boolean | UserCountOutputTypeCountTodayVisibleUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendshipsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendshipsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActorNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodayMentionedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayMentionUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodayVisibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayVisibleUserWhereInput
  }


  /**
   * Count Type TodayCountOutputType
   */

  export type TodayCountOutputType = {
    todayTags: number
    todayMentionedUsers: number
    todayVisibleUsers: number
    comments: number
    reactions: number
  }

  export type TodayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todayTags?: boolean | TodayCountOutputTypeCountTodayTagsArgs
    todayMentionedUsers?: boolean | TodayCountOutputTypeCountTodayMentionedUsersArgs
    todayVisibleUsers?: boolean | TodayCountOutputTypeCountTodayVisibleUsersArgs
    comments?: boolean | TodayCountOutputTypeCountCommentsArgs
    reactions?: boolean | TodayCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayCountOutputType
     */
    select?: TodayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeCountTodayTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayTagWhereInput
  }

  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeCountTodayMentionedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayMentionUserWhereInput
  }

  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeCountTodayVisibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayVisibleUserWhereInput
  }

  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TodayCountOutputType without action
   */
  export type TodayCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    todayTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todayTags?: boolean | TagCountOutputTypeCountTodayTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTodayTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayTagWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    childComments: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childComments?: boolean | CommentCountOutputTypeCountChildCommentsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountChildCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type FriendsGroupCountOutputType
   */

  export type FriendsGroupCountOutputType = {
    groupFriends: number
  }

  export type FriendsGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupFriends?: boolean | FriendsGroupCountOutputTypeCountGroupFriendsArgs
  }

  // Custom InputTypes
  /**
   * FriendsGroupCountOutputType without action
   */
  export type FriendsGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroupCountOutputType
     */
    select?: FriendsGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FriendsGroupCountOutputType without action
   */
  export type FriendsGroupCountOutputTypeCountGroupFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFriendWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    nickname: string | null
    introduction: string | null
    diaryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    nickname: string | null
    introduction: string | null
    diaryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    nickname: number
    introduction: number
    diaryName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    nickname?: true
    introduction?: true
    diaryName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    nickname?: true
    introduction?: true
    diaryName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    nickname?: true
    introduction?: true
    diaryName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    password: string | null
    nickname: string
    introduction: string | null
    diaryName: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    nickname?: boolean
    introduction?: boolean
    diaryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    todays?: boolean | User$todaysArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    friendshipsAsUser1?: boolean | User$friendshipsAsUser1Args<ExtArgs>
    friendshipsAsUser2?: boolean | User$friendshipsAsUser2Args<ExtArgs>
    friendsGroups?: boolean | User$friendsGroupsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    actorNotifications?: boolean | User$actorNotificationsArgs<ExtArgs>
    groupFriends?: boolean | User$groupFriendsArgs<ExtArgs>
    todayMentionedUsers?: boolean | User$todayMentionedUsersArgs<ExtArgs>
    todayVisibleUsers?: boolean | User$todayVisibleUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    nickname?: boolean
    introduction?: boolean
    diaryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    nickname?: boolean
    introduction?: boolean
    diaryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    nickname?: boolean
    introduction?: boolean
    diaryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "password" | "nickname" | "introduction" | "diaryName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todays?: boolean | User$todaysArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    friendshipsAsUser1?: boolean | User$friendshipsAsUser1Args<ExtArgs>
    friendshipsAsUser2?: boolean | User$friendshipsAsUser2Args<ExtArgs>
    friendsGroups?: boolean | User$friendsGroupsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    actorNotifications?: boolean | User$actorNotificationsArgs<ExtArgs>
    groupFriends?: boolean | User$groupFriendsArgs<ExtArgs>
    todayMentionedUsers?: boolean | User$todayMentionedUsersArgs<ExtArgs>
    todayVisibleUsers?: boolean | User$todayVisibleUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      todays: Prisma.$TodayPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      friendshipsAsUser1: Prisma.$FriendshipPayload<ExtArgs>[]
      friendshipsAsUser2: Prisma.$FriendshipPayload<ExtArgs>[]
      friendsGroups: Prisma.$FriendsGroupPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      actorNotifications: Prisma.$NotificationPayload<ExtArgs>[]
      groupFriends: Prisma.$GroupFriendPayload<ExtArgs>[]
      todayMentionedUsers: Prisma.$TodayMentionUserPayload<ExtArgs>[]
      todayVisibleUsers: Prisma.$TodayVisibleUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      password: string | null
      nickname: string
      introduction: string | null
      diaryName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todays<T extends User$todaysArgs<ExtArgs> = {}>(args?: Subset<T, User$todaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendshipsAsUser1<T extends User$friendshipsAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$friendshipsAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendshipsAsUser2<T extends User$friendshipsAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$friendshipsAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendsGroups<T extends User$friendsGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actorNotifications<T extends User$actorNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$actorNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupFriends<T extends User$groupFriendsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todayMentionedUsers<T extends User$todayMentionedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$todayMentionedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todayVisibleUsers<T extends User$todayVisibleUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$todayVisibleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly introduction: FieldRef<"User", 'String'>
    readonly diaryName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.todays
   */
  export type User$todaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    where?: TodayWhereInput
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    cursor?: TodayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.friendshipsAsUser1
   */
  export type User$friendshipsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.friendshipsAsUser2
   */
  export type User$friendshipsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.friendsGroups
   */
  export type User$friendsGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    where?: FriendsGroupWhereInput
    orderBy?: FriendsGroupOrderByWithRelationInput | FriendsGroupOrderByWithRelationInput[]
    cursor?: FriendsGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsGroupScalarFieldEnum | FriendsGroupScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.actorNotifications
   */
  export type User$actorNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.groupFriends
   */
  export type User$groupFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    where?: GroupFriendWhereInput
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    cursor?: GroupFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupFriendScalarFieldEnum | GroupFriendScalarFieldEnum[]
  }

  /**
   * User.todayMentionedUsers
   */
  export type User$todayMentionedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    where?: TodayMentionUserWhereInput
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    cursor?: TodayMentionUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayMentionUserScalarFieldEnum | TodayMentionUserScalarFieldEnum[]
  }

  /**
   * User.todayVisibleUsers
   */
  export type User$todayVisibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    where?: TodayVisibleUserWhereInput
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    cursor?: TodayVisibleUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayVisibleUserScalarFieldEnum | TodayVisibleUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Today
   */

  export type AggregateToday = {
    _count: TodayCountAggregateOutputType | null
    _min: TodayMinAggregateOutputType | null
    _max: TodayMaxAggregateOutputType | null
  }

  export type TodayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    emojiUrl: string | null
    content: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    emojiUrl: string | null
    content: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodayCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    emojiUrl: number
    content: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodayMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    emojiUrl?: true
    content?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodayMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    emojiUrl?: true
    content?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodayCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    emojiUrl?: true
    content?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Today to aggregate.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todays
    **/
    _count?: true | TodayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayMaxAggregateInputType
  }

  export type GetTodayAggregateType<T extends TodayAggregateArgs> = {
        [P in keyof T & keyof AggregateToday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToday[P]>
      : GetScalarType<T[P], AggregateToday[P]>
  }




  export type TodayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayWhereInput
    orderBy?: TodayOrderByWithAggregationInput | TodayOrderByWithAggregationInput[]
    by: TodayScalarFieldEnum[] | TodayScalarFieldEnum
    having?: TodayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayCountAggregateInputType | true
    _min?: TodayMinAggregateInputType
    _max?: TodayMaxAggregateInputType
  }

  export type TodayGroupByOutputType = {
    id: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: TodayCountAggregateOutputType | null
    _min: TodayMinAggregateOutputType | null
    _max: TodayMaxAggregateOutputType | null
  }

  type GetTodayGroupByPayload<T extends TodayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayGroupByOutputType[P]>
            : GetScalarType<T[P], TodayGroupByOutputType[P]>
        }
      >
    >


  export type TodaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    emojiUrl?: boolean
    content?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    todayTags?: boolean | Today$todayTagsArgs<ExtArgs>
    todayMentionedUsers?: boolean | Today$todayMentionedUsersArgs<ExtArgs>
    todayVisibleUsers?: boolean | Today$todayVisibleUsersArgs<ExtArgs>
    comments?: boolean | Today$commentsArgs<ExtArgs>
    reactions?: boolean | Today$reactionsArgs<ExtArgs>
    _count?: boolean | TodayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["today"]>

  export type TodaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    emojiUrl?: boolean
    content?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["today"]>

  export type TodaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    emojiUrl?: boolean
    content?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["today"]>

  export type TodaySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    emojiUrl?: boolean
    content?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TodayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "emojiUrl" | "content" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["today"]>
  export type TodayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    todayTags?: boolean | Today$todayTagsArgs<ExtArgs>
    todayMentionedUsers?: boolean | Today$todayMentionedUsersArgs<ExtArgs>
    todayVisibleUsers?: boolean | Today$todayVisibleUsersArgs<ExtArgs>
    comments?: boolean | Today$commentsArgs<ExtArgs>
    reactions?: boolean | Today$reactionsArgs<ExtArgs>
    _count?: boolean | TodayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TodayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Today"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      todayTags: Prisma.$TodayTagPayload<ExtArgs>[]
      todayMentionedUsers: Prisma.$TodayMentionUserPayload<ExtArgs>[]
      todayVisibleUsers: Prisma.$TodayVisibleUserPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      emojiUrl: string
      content: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["today"]>
    composites: {}
  }

  type TodayGetPayload<S extends boolean | null | undefined | TodayDefaultArgs> = $Result.GetResult<Prisma.$TodayPayload, S>

  type TodayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayCountAggregateInputType | true
    }

  export interface TodayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Today'], meta: { name: 'Today' } }
    /**
     * Find zero or one Today that matches the filter.
     * @param {TodayFindUniqueArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayFindUniqueArgs>(args: SelectSubset<T, TodayFindUniqueArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Today that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayFindUniqueOrThrowArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Today that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindFirstArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayFindFirstArgs>(args?: SelectSubset<T, TodayFindFirstArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Today that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindFirstOrThrowArgs} args - Arguments to find a Today
     * @example
     * // Get one Today
     * const today = await prisma.today.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todays
     * const todays = await prisma.today.findMany()
     * 
     * // Get first 10 Todays
     * const todays = await prisma.today.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayWithIdOnly = await prisma.today.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayFindManyArgs>(args?: SelectSubset<T, TodayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Today.
     * @param {TodayCreateArgs} args - Arguments to create a Today.
     * @example
     * // Create one Today
     * const Today = await prisma.today.create({
     *   data: {
     *     // ... data to create a Today
     *   }
     * })
     * 
     */
    create<T extends TodayCreateArgs>(args: SelectSubset<T, TodayCreateArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todays.
     * @param {TodayCreateManyArgs} args - Arguments to create many Todays.
     * @example
     * // Create many Todays
     * const today = await prisma.today.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayCreateManyArgs>(args?: SelectSubset<T, TodayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todays and returns the data saved in the database.
     * @param {TodayCreateManyAndReturnArgs} args - Arguments to create many Todays.
     * @example
     * // Create many Todays
     * const today = await prisma.today.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todays and only return the `id`
     * const todayWithIdOnly = await prisma.today.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodayCreateManyAndReturnArgs>(args?: SelectSubset<T, TodayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Today.
     * @param {TodayDeleteArgs} args - Arguments to delete one Today.
     * @example
     * // Delete one Today
     * const Today = await prisma.today.delete({
     *   where: {
     *     // ... filter to delete one Today
     *   }
     * })
     * 
     */
    delete<T extends TodayDeleteArgs>(args: SelectSubset<T, TodayDeleteArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Today.
     * @param {TodayUpdateArgs} args - Arguments to update one Today.
     * @example
     * // Update one Today
     * const today = await prisma.today.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayUpdateArgs>(args: SelectSubset<T, TodayUpdateArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todays.
     * @param {TodayDeleteManyArgs} args - Arguments to filter Todays to delete.
     * @example
     * // Delete a few Todays
     * const { count } = await prisma.today.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayDeleteManyArgs>(args?: SelectSubset<T, TodayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todays
     * const today = await prisma.today.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayUpdateManyArgs>(args: SelectSubset<T, TodayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todays and returns the data updated in the database.
     * @param {TodayUpdateManyAndReturnArgs} args - Arguments to update many Todays.
     * @example
     * // Update many Todays
     * const today = await prisma.today.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Todays and only return the `id`
     * const todayWithIdOnly = await prisma.today.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodayUpdateManyAndReturnArgs>(args: SelectSubset<T, TodayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Today.
     * @param {TodayUpsertArgs} args - Arguments to update or create a Today.
     * @example
     * // Update or create a Today
     * const today = await prisma.today.upsert({
     *   create: {
     *     // ... data to create a Today
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Today we want to update
     *   }
     * })
     */
    upsert<T extends TodayUpsertArgs>(args: SelectSubset<T, TodayUpsertArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayCountArgs} args - Arguments to filter Todays to count.
     * @example
     * // Count the number of Todays
     * const count = await prisma.today.count({
     *   where: {
     *     // ... the filter for the Todays we want to count
     *   }
     * })
    **/
    count<T extends TodayCountArgs>(
      args?: Subset<T, TodayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Today.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodayAggregateArgs>(args: Subset<T, TodayAggregateArgs>): Prisma.PrismaPromise<GetTodayAggregateType<T>>

    /**
     * Group by Today.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayGroupByArgs['orderBy'] }
        : { orderBy?: TodayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Today model
   */
  readonly fields: TodayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Today.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todayTags<T extends Today$todayTagsArgs<ExtArgs> = {}>(args?: Subset<T, Today$todayTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todayMentionedUsers<T extends Today$todayMentionedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Today$todayMentionedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todayVisibleUsers<T extends Today$todayVisibleUsersArgs<ExtArgs> = {}>(args?: Subset<T, Today$todayVisibleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Today$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Today$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Today$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Today$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Today model
   */
  interface TodayFieldRefs {
    readonly id: FieldRef<"Today", 'String'>
    readonly userId: FieldRef<"Today", 'String'>
    readonly title: FieldRef<"Today", 'String'>
    readonly emojiUrl: FieldRef<"Today", 'String'>
    readonly content: FieldRef<"Today", 'String'>
    readonly date: FieldRef<"Today", 'DateTime'>
    readonly createdAt: FieldRef<"Today", 'DateTime'>
    readonly updatedAt: FieldRef<"Today", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Today findUnique
   */
  export type TodayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today findUniqueOrThrow
   */
  export type TodayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today findFirst
   */
  export type TodayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todays.
     */
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today findFirstOrThrow
   */
  export type TodayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter, which Today to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todays.
     */
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today findMany
   */
  export type TodayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter, which Todays to fetch.
     */
    where?: TodayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todays to fetch.
     */
    orderBy?: TodayOrderByWithRelationInput | TodayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todays.
     */
    cursor?: TodayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todays.
     */
    skip?: number
    distinct?: TodayScalarFieldEnum | TodayScalarFieldEnum[]
  }

  /**
   * Today create
   */
  export type TodayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * The data needed to create a Today.
     */
    data: XOR<TodayCreateInput, TodayUncheckedCreateInput>
  }

  /**
   * Today createMany
   */
  export type TodayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todays.
     */
    data: TodayCreateManyInput | TodayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Today createManyAndReturn
   */
  export type TodayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * The data used to create many Todays.
     */
    data: TodayCreateManyInput | TodayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Today update
   */
  export type TodayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * The data needed to update a Today.
     */
    data: XOR<TodayUpdateInput, TodayUncheckedUpdateInput>
    /**
     * Choose, which Today to update.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today updateMany
   */
  export type TodayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todays.
     */
    data: XOR<TodayUpdateManyMutationInput, TodayUncheckedUpdateManyInput>
    /**
     * Filter which Todays to update
     */
    where?: TodayWhereInput
    /**
     * Limit how many Todays to update.
     */
    limit?: number
  }

  /**
   * Today updateManyAndReturn
   */
  export type TodayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * The data used to update Todays.
     */
    data: XOR<TodayUpdateManyMutationInput, TodayUncheckedUpdateManyInput>
    /**
     * Filter which Todays to update
     */
    where?: TodayWhereInput
    /**
     * Limit how many Todays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Today upsert
   */
  export type TodayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * The filter to search for the Today to update in case it exists.
     */
    where: TodayWhereUniqueInput
    /**
     * In case the Today found by the `where` argument doesn't exist, create a new Today with this data.
     */
    create: XOR<TodayCreateInput, TodayUncheckedCreateInput>
    /**
     * In case the Today was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayUpdateInput, TodayUncheckedUpdateInput>
  }

  /**
   * Today delete
   */
  export type TodayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
    /**
     * Filter which Today to delete.
     */
    where: TodayWhereUniqueInput
  }

  /**
   * Today deleteMany
   */
  export type TodayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todays to delete
     */
    where?: TodayWhereInput
    /**
     * Limit how many Todays to delete.
     */
    limit?: number
  }

  /**
   * Today.todayTags
   */
  export type Today$todayTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    where?: TodayTagWhereInput
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    cursor?: TodayTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayTagScalarFieldEnum | TodayTagScalarFieldEnum[]
  }

  /**
   * Today.todayMentionedUsers
   */
  export type Today$todayMentionedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    where?: TodayMentionUserWhereInput
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    cursor?: TodayMentionUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayMentionUserScalarFieldEnum | TodayMentionUserScalarFieldEnum[]
  }

  /**
   * Today.todayVisibleUsers
   */
  export type Today$todayVisibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    where?: TodayVisibleUserWhereInput
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    cursor?: TodayVisibleUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayVisibleUserScalarFieldEnum | TodayVisibleUserScalarFieldEnum[]
  }

  /**
   * Today.comments
   */
  export type Today$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Today.reactions
   */
  export type Today$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Today without action
   */
  export type TodayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Today
     */
    select?: TodaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Today
     */
    omit?: TodayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayInclude<ExtArgs> | null
  }


  /**
   * Model TodayTag
   */

  export type AggregateTodayTag = {
    _count: TodayTagCountAggregateOutputType | null
    _min: TodayTagMinAggregateOutputType | null
    _max: TodayTagMaxAggregateOutputType | null
  }

  export type TodayTagMinAggregateOutputType = {
    id: string | null
    todayId: string | null
    tagId: string | null
  }

  export type TodayTagMaxAggregateOutputType = {
    id: string | null
    todayId: string | null
    tagId: string | null
  }

  export type TodayTagCountAggregateOutputType = {
    id: number
    todayId: number
    tagId: number
    _all: number
  }


  export type TodayTagMinAggregateInputType = {
    id?: true
    todayId?: true
    tagId?: true
  }

  export type TodayTagMaxAggregateInputType = {
    id?: true
    todayId?: true
    tagId?: true
  }

  export type TodayTagCountAggregateInputType = {
    id?: true
    todayId?: true
    tagId?: true
    _all?: true
  }

  export type TodayTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayTag to aggregate.
     */
    where?: TodayTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayTags to fetch.
     */
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodayTags
    **/
    _count?: true | TodayTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayTagMaxAggregateInputType
  }

  export type GetTodayTagAggregateType<T extends TodayTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTodayTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodayTag[P]>
      : GetScalarType<T[P], AggregateTodayTag[P]>
  }




  export type TodayTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayTagWhereInput
    orderBy?: TodayTagOrderByWithAggregationInput | TodayTagOrderByWithAggregationInput[]
    by: TodayTagScalarFieldEnum[] | TodayTagScalarFieldEnum
    having?: TodayTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayTagCountAggregateInputType | true
    _min?: TodayTagMinAggregateInputType
    _max?: TodayTagMaxAggregateInputType
  }

  export type TodayTagGroupByOutputType = {
    id: string
    todayId: string
    tagId: string
    _count: TodayTagCountAggregateOutputType | null
    _min: TodayTagMinAggregateOutputType | null
    _max: TodayTagMaxAggregateOutputType | null
  }

  type GetTodayTagGroupByPayload<T extends TodayTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayTagGroupByOutputType[P]>
            : GetScalarType<T[P], TodayTagGroupByOutputType[P]>
        }
      >
    >


  export type TodayTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    tagId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayTag"]>

  export type TodayTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    tagId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayTag"]>

  export type TodayTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    tagId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayTag"]>

  export type TodayTagSelectScalar = {
    id?: boolean
    todayId?: boolean
    tagId?: boolean
  }

  export type TodayTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "todayId" | "tagId", ExtArgs["result"]["todayTag"]>
  export type TodayTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TodayTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TodayTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TodayTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodayTag"
    objects: {
      today: Prisma.$TodayPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      todayId: string
      tagId: string
    }, ExtArgs["result"]["todayTag"]>
    composites: {}
  }

  type TodayTagGetPayload<S extends boolean | null | undefined | TodayTagDefaultArgs> = $Result.GetResult<Prisma.$TodayTagPayload, S>

  type TodayTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayTagCountAggregateInputType | true
    }

  export interface TodayTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodayTag'], meta: { name: 'TodayTag' } }
    /**
     * Find zero or one TodayTag that matches the filter.
     * @param {TodayTagFindUniqueArgs} args - Arguments to find a TodayTag
     * @example
     * // Get one TodayTag
     * const todayTag = await prisma.todayTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayTagFindUniqueArgs>(args: SelectSubset<T, TodayTagFindUniqueArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TodayTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayTagFindUniqueOrThrowArgs} args - Arguments to find a TodayTag
     * @example
     * // Get one TodayTag
     * const todayTag = await prisma.todayTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagFindFirstArgs} args - Arguments to find a TodayTag
     * @example
     * // Get one TodayTag
     * const todayTag = await prisma.todayTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayTagFindFirstArgs>(args?: SelectSubset<T, TodayTagFindFirstArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagFindFirstOrThrowArgs} args - Arguments to find a TodayTag
     * @example
     * // Get one TodayTag
     * const todayTag = await prisma.todayTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TodayTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodayTags
     * const todayTags = await prisma.todayTag.findMany()
     * 
     * // Get first 10 TodayTags
     * const todayTags = await prisma.todayTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayTagWithIdOnly = await prisma.todayTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayTagFindManyArgs>(args?: SelectSubset<T, TodayTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TodayTag.
     * @param {TodayTagCreateArgs} args - Arguments to create a TodayTag.
     * @example
     * // Create one TodayTag
     * const TodayTag = await prisma.todayTag.create({
     *   data: {
     *     // ... data to create a TodayTag
     *   }
     * })
     * 
     */
    create<T extends TodayTagCreateArgs>(args: SelectSubset<T, TodayTagCreateArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TodayTags.
     * @param {TodayTagCreateManyArgs} args - Arguments to create many TodayTags.
     * @example
     * // Create many TodayTags
     * const todayTag = await prisma.todayTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayTagCreateManyArgs>(args?: SelectSubset<T, TodayTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodayTags and returns the data saved in the database.
     * @param {TodayTagCreateManyAndReturnArgs} args - Arguments to create many TodayTags.
     * @example
     * // Create many TodayTags
     * const todayTag = await prisma.todayTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodayTags and only return the `id`
     * const todayTagWithIdOnly = await prisma.todayTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodayTagCreateManyAndReturnArgs>(args?: SelectSubset<T, TodayTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TodayTag.
     * @param {TodayTagDeleteArgs} args - Arguments to delete one TodayTag.
     * @example
     * // Delete one TodayTag
     * const TodayTag = await prisma.todayTag.delete({
     *   where: {
     *     // ... filter to delete one TodayTag
     *   }
     * })
     * 
     */
    delete<T extends TodayTagDeleteArgs>(args: SelectSubset<T, TodayTagDeleteArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TodayTag.
     * @param {TodayTagUpdateArgs} args - Arguments to update one TodayTag.
     * @example
     * // Update one TodayTag
     * const todayTag = await prisma.todayTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayTagUpdateArgs>(args: SelectSubset<T, TodayTagUpdateArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TodayTags.
     * @param {TodayTagDeleteManyArgs} args - Arguments to filter TodayTags to delete.
     * @example
     * // Delete a few TodayTags
     * const { count } = await prisma.todayTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayTagDeleteManyArgs>(args?: SelectSubset<T, TodayTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodayTags
     * const todayTag = await prisma.todayTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayTagUpdateManyArgs>(args: SelectSubset<T, TodayTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayTags and returns the data updated in the database.
     * @param {TodayTagUpdateManyAndReturnArgs} args - Arguments to update many TodayTags.
     * @example
     * // Update many TodayTags
     * const todayTag = await prisma.todayTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TodayTags and only return the `id`
     * const todayTagWithIdOnly = await prisma.todayTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodayTagUpdateManyAndReturnArgs>(args: SelectSubset<T, TodayTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TodayTag.
     * @param {TodayTagUpsertArgs} args - Arguments to update or create a TodayTag.
     * @example
     * // Update or create a TodayTag
     * const todayTag = await prisma.todayTag.upsert({
     *   create: {
     *     // ... data to create a TodayTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodayTag we want to update
     *   }
     * })
     */
    upsert<T extends TodayTagUpsertArgs>(args: SelectSubset<T, TodayTagUpsertArgs<ExtArgs>>): Prisma__TodayTagClient<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TodayTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagCountArgs} args - Arguments to filter TodayTags to count.
     * @example
     * // Count the number of TodayTags
     * const count = await prisma.todayTag.count({
     *   where: {
     *     // ... the filter for the TodayTags we want to count
     *   }
     * })
    **/
    count<T extends TodayTagCountArgs>(
      args?: Subset<T, TodayTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodayTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodayTagAggregateArgs>(args: Subset<T, TodayTagAggregateArgs>): Prisma.PrismaPromise<GetTodayTagAggregateType<T>>

    /**
     * Group by TodayTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodayTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayTagGroupByArgs['orderBy'] }
        : { orderBy?: TodayTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodayTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodayTag model
   */
  readonly fields: TodayTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodayTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    today<T extends TodayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodayDefaultArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodayTag model
   */
  interface TodayTagFieldRefs {
    readonly id: FieldRef<"TodayTag", 'String'>
    readonly todayId: FieldRef<"TodayTag", 'String'>
    readonly tagId: FieldRef<"TodayTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TodayTag findUnique
   */
  export type TodayTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter, which TodayTag to fetch.
     */
    where: TodayTagWhereUniqueInput
  }

  /**
   * TodayTag findUniqueOrThrow
   */
  export type TodayTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter, which TodayTag to fetch.
     */
    where: TodayTagWhereUniqueInput
  }

  /**
   * TodayTag findFirst
   */
  export type TodayTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter, which TodayTag to fetch.
     */
    where?: TodayTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayTags to fetch.
     */
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayTags.
     */
    cursor?: TodayTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayTags.
     */
    distinct?: TodayTagScalarFieldEnum | TodayTagScalarFieldEnum[]
  }

  /**
   * TodayTag findFirstOrThrow
   */
  export type TodayTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter, which TodayTag to fetch.
     */
    where?: TodayTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayTags to fetch.
     */
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayTags.
     */
    cursor?: TodayTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayTags.
     */
    distinct?: TodayTagScalarFieldEnum | TodayTagScalarFieldEnum[]
  }

  /**
   * TodayTag findMany
   */
  export type TodayTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter, which TodayTags to fetch.
     */
    where?: TodayTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayTags to fetch.
     */
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodayTags.
     */
    cursor?: TodayTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayTags.
     */
    skip?: number
    distinct?: TodayTagScalarFieldEnum | TodayTagScalarFieldEnum[]
  }

  /**
   * TodayTag create
   */
  export type TodayTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TodayTag.
     */
    data: XOR<TodayTagCreateInput, TodayTagUncheckedCreateInput>
  }

  /**
   * TodayTag createMany
   */
  export type TodayTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodayTags.
     */
    data: TodayTagCreateManyInput | TodayTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodayTag createManyAndReturn
   */
  export type TodayTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * The data used to create many TodayTags.
     */
    data: TodayTagCreateManyInput | TodayTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayTag update
   */
  export type TodayTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TodayTag.
     */
    data: XOR<TodayTagUpdateInput, TodayTagUncheckedUpdateInput>
    /**
     * Choose, which TodayTag to update.
     */
    where: TodayTagWhereUniqueInput
  }

  /**
   * TodayTag updateMany
   */
  export type TodayTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodayTags.
     */
    data: XOR<TodayTagUpdateManyMutationInput, TodayTagUncheckedUpdateManyInput>
    /**
     * Filter which TodayTags to update
     */
    where?: TodayTagWhereInput
    /**
     * Limit how many TodayTags to update.
     */
    limit?: number
  }

  /**
   * TodayTag updateManyAndReturn
   */
  export type TodayTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * The data used to update TodayTags.
     */
    data: XOR<TodayTagUpdateManyMutationInput, TodayTagUncheckedUpdateManyInput>
    /**
     * Filter which TodayTags to update
     */
    where?: TodayTagWhereInput
    /**
     * Limit how many TodayTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayTag upsert
   */
  export type TodayTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TodayTag to update in case it exists.
     */
    where: TodayTagWhereUniqueInput
    /**
     * In case the TodayTag found by the `where` argument doesn't exist, create a new TodayTag with this data.
     */
    create: XOR<TodayTagCreateInput, TodayTagUncheckedCreateInput>
    /**
     * In case the TodayTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayTagUpdateInput, TodayTagUncheckedUpdateInput>
  }

  /**
   * TodayTag delete
   */
  export type TodayTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    /**
     * Filter which TodayTag to delete.
     */
    where: TodayTagWhereUniqueInput
  }

  /**
   * TodayTag deleteMany
   */
  export type TodayTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayTags to delete
     */
    where?: TodayTagWhereInput
    /**
     * Limit how many TodayTags to delete.
     */
    limit?: number
  }

  /**
   * TodayTag without action
   */
  export type TodayTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
  }


  /**
   * Model TodayMentionUser
   */

  export type AggregateTodayMentionUser = {
    _count: TodayMentionUserCountAggregateOutputType | null
    _min: TodayMentionUserMinAggregateOutputType | null
    _max: TodayMentionUserMaxAggregateOutputType | null
  }

  export type TodayMentionUserMinAggregateOutputType = {
    id: string | null
    todayId: string | null
    mentionedUserId: string | null
  }

  export type TodayMentionUserMaxAggregateOutputType = {
    id: string | null
    todayId: string | null
    mentionedUserId: string | null
  }

  export type TodayMentionUserCountAggregateOutputType = {
    id: number
    todayId: number
    mentionedUserId: number
    _all: number
  }


  export type TodayMentionUserMinAggregateInputType = {
    id?: true
    todayId?: true
    mentionedUserId?: true
  }

  export type TodayMentionUserMaxAggregateInputType = {
    id?: true
    todayId?: true
    mentionedUserId?: true
  }

  export type TodayMentionUserCountAggregateInputType = {
    id?: true
    todayId?: true
    mentionedUserId?: true
    _all?: true
  }

  export type TodayMentionUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayMentionUser to aggregate.
     */
    where?: TodayMentionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayMentionUsers to fetch.
     */
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayMentionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayMentionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayMentionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodayMentionUsers
    **/
    _count?: true | TodayMentionUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayMentionUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayMentionUserMaxAggregateInputType
  }

  export type GetTodayMentionUserAggregateType<T extends TodayMentionUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTodayMentionUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodayMentionUser[P]>
      : GetScalarType<T[P], AggregateTodayMentionUser[P]>
  }




  export type TodayMentionUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayMentionUserWhereInput
    orderBy?: TodayMentionUserOrderByWithAggregationInput | TodayMentionUserOrderByWithAggregationInput[]
    by: TodayMentionUserScalarFieldEnum[] | TodayMentionUserScalarFieldEnum
    having?: TodayMentionUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayMentionUserCountAggregateInputType | true
    _min?: TodayMentionUserMinAggregateInputType
    _max?: TodayMentionUserMaxAggregateInputType
  }

  export type TodayMentionUserGroupByOutputType = {
    id: string
    todayId: string
    mentionedUserId: string
    _count: TodayMentionUserCountAggregateOutputType | null
    _min: TodayMentionUserMinAggregateOutputType | null
    _max: TodayMentionUserMaxAggregateOutputType | null
  }

  type GetTodayMentionUserGroupByPayload<T extends TodayMentionUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayMentionUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayMentionUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayMentionUserGroupByOutputType[P]>
            : GetScalarType<T[P], TodayMentionUserGroupByOutputType[P]>
        }
      >
    >


  export type TodayMentionUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    mentionedUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayMentionUser"]>

  export type TodayMentionUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    mentionedUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayMentionUser"]>

  export type TodayMentionUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    mentionedUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayMentionUser"]>

  export type TodayMentionUserSelectScalar = {
    id?: boolean
    todayId?: boolean
    mentionedUserId?: boolean
  }

  export type TodayMentionUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "todayId" | "mentionedUserId", ExtArgs["result"]["todayMentionUser"]>
  export type TodayMentionUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayMentionUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayMentionUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    mentionedUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodayMentionUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodayMentionUser"
    objects: {
      today: Prisma.$TodayPayload<ExtArgs>
      mentionedUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      todayId: string
      mentionedUserId: string
    }, ExtArgs["result"]["todayMentionUser"]>
    composites: {}
  }

  type TodayMentionUserGetPayload<S extends boolean | null | undefined | TodayMentionUserDefaultArgs> = $Result.GetResult<Prisma.$TodayMentionUserPayload, S>

  type TodayMentionUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayMentionUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayMentionUserCountAggregateInputType | true
    }

  export interface TodayMentionUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodayMentionUser'], meta: { name: 'TodayMentionUser' } }
    /**
     * Find zero or one TodayMentionUser that matches the filter.
     * @param {TodayMentionUserFindUniqueArgs} args - Arguments to find a TodayMentionUser
     * @example
     * // Get one TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayMentionUserFindUniqueArgs>(args: SelectSubset<T, TodayMentionUserFindUniqueArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TodayMentionUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayMentionUserFindUniqueOrThrowArgs} args - Arguments to find a TodayMentionUser
     * @example
     * // Get one TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayMentionUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayMentionUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayMentionUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserFindFirstArgs} args - Arguments to find a TodayMentionUser
     * @example
     * // Get one TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayMentionUserFindFirstArgs>(args?: SelectSubset<T, TodayMentionUserFindFirstArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayMentionUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserFindFirstOrThrowArgs} args - Arguments to find a TodayMentionUser
     * @example
     * // Get one TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayMentionUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayMentionUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TodayMentionUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodayMentionUsers
     * const todayMentionUsers = await prisma.todayMentionUser.findMany()
     * 
     * // Get first 10 TodayMentionUsers
     * const todayMentionUsers = await prisma.todayMentionUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayMentionUserWithIdOnly = await prisma.todayMentionUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayMentionUserFindManyArgs>(args?: SelectSubset<T, TodayMentionUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TodayMentionUser.
     * @param {TodayMentionUserCreateArgs} args - Arguments to create a TodayMentionUser.
     * @example
     * // Create one TodayMentionUser
     * const TodayMentionUser = await prisma.todayMentionUser.create({
     *   data: {
     *     // ... data to create a TodayMentionUser
     *   }
     * })
     * 
     */
    create<T extends TodayMentionUserCreateArgs>(args: SelectSubset<T, TodayMentionUserCreateArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TodayMentionUsers.
     * @param {TodayMentionUserCreateManyArgs} args - Arguments to create many TodayMentionUsers.
     * @example
     * // Create many TodayMentionUsers
     * const todayMentionUser = await prisma.todayMentionUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayMentionUserCreateManyArgs>(args?: SelectSubset<T, TodayMentionUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodayMentionUsers and returns the data saved in the database.
     * @param {TodayMentionUserCreateManyAndReturnArgs} args - Arguments to create many TodayMentionUsers.
     * @example
     * // Create many TodayMentionUsers
     * const todayMentionUser = await prisma.todayMentionUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodayMentionUsers and only return the `id`
     * const todayMentionUserWithIdOnly = await prisma.todayMentionUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodayMentionUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TodayMentionUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TodayMentionUser.
     * @param {TodayMentionUserDeleteArgs} args - Arguments to delete one TodayMentionUser.
     * @example
     * // Delete one TodayMentionUser
     * const TodayMentionUser = await prisma.todayMentionUser.delete({
     *   where: {
     *     // ... filter to delete one TodayMentionUser
     *   }
     * })
     * 
     */
    delete<T extends TodayMentionUserDeleteArgs>(args: SelectSubset<T, TodayMentionUserDeleteArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TodayMentionUser.
     * @param {TodayMentionUserUpdateArgs} args - Arguments to update one TodayMentionUser.
     * @example
     * // Update one TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayMentionUserUpdateArgs>(args: SelectSubset<T, TodayMentionUserUpdateArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TodayMentionUsers.
     * @param {TodayMentionUserDeleteManyArgs} args - Arguments to filter TodayMentionUsers to delete.
     * @example
     * // Delete a few TodayMentionUsers
     * const { count } = await prisma.todayMentionUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayMentionUserDeleteManyArgs>(args?: SelectSubset<T, TodayMentionUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayMentionUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodayMentionUsers
     * const todayMentionUser = await prisma.todayMentionUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayMentionUserUpdateManyArgs>(args: SelectSubset<T, TodayMentionUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayMentionUsers and returns the data updated in the database.
     * @param {TodayMentionUserUpdateManyAndReturnArgs} args - Arguments to update many TodayMentionUsers.
     * @example
     * // Update many TodayMentionUsers
     * const todayMentionUser = await prisma.todayMentionUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TodayMentionUsers and only return the `id`
     * const todayMentionUserWithIdOnly = await prisma.todayMentionUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodayMentionUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TodayMentionUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TodayMentionUser.
     * @param {TodayMentionUserUpsertArgs} args - Arguments to update or create a TodayMentionUser.
     * @example
     * // Update or create a TodayMentionUser
     * const todayMentionUser = await prisma.todayMentionUser.upsert({
     *   create: {
     *     // ... data to create a TodayMentionUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodayMentionUser we want to update
     *   }
     * })
     */
    upsert<T extends TodayMentionUserUpsertArgs>(args: SelectSubset<T, TodayMentionUserUpsertArgs<ExtArgs>>): Prisma__TodayMentionUserClient<$Result.GetResult<Prisma.$TodayMentionUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TodayMentionUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserCountArgs} args - Arguments to filter TodayMentionUsers to count.
     * @example
     * // Count the number of TodayMentionUsers
     * const count = await prisma.todayMentionUser.count({
     *   where: {
     *     // ... the filter for the TodayMentionUsers we want to count
     *   }
     * })
    **/
    count<T extends TodayMentionUserCountArgs>(
      args?: Subset<T, TodayMentionUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayMentionUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodayMentionUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodayMentionUserAggregateArgs>(args: Subset<T, TodayMentionUserAggregateArgs>): Prisma.PrismaPromise<GetTodayMentionUserAggregateType<T>>

    /**
     * Group by TodayMentionUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayMentionUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodayMentionUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayMentionUserGroupByArgs['orderBy'] }
        : { orderBy?: TodayMentionUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodayMentionUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayMentionUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodayMentionUser model
   */
  readonly fields: TodayMentionUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodayMentionUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayMentionUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    today<T extends TodayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodayDefaultArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentionedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodayMentionUser model
   */
  interface TodayMentionUserFieldRefs {
    readonly id: FieldRef<"TodayMentionUser", 'String'>
    readonly todayId: FieldRef<"TodayMentionUser", 'String'>
    readonly mentionedUserId: FieldRef<"TodayMentionUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TodayMentionUser findUnique
   */
  export type TodayMentionUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayMentionUser to fetch.
     */
    where: TodayMentionUserWhereUniqueInput
  }

  /**
   * TodayMentionUser findUniqueOrThrow
   */
  export type TodayMentionUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayMentionUser to fetch.
     */
    where: TodayMentionUserWhereUniqueInput
  }

  /**
   * TodayMentionUser findFirst
   */
  export type TodayMentionUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayMentionUser to fetch.
     */
    where?: TodayMentionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayMentionUsers to fetch.
     */
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayMentionUsers.
     */
    cursor?: TodayMentionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayMentionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayMentionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayMentionUsers.
     */
    distinct?: TodayMentionUserScalarFieldEnum | TodayMentionUserScalarFieldEnum[]
  }

  /**
   * TodayMentionUser findFirstOrThrow
   */
  export type TodayMentionUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayMentionUser to fetch.
     */
    where?: TodayMentionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayMentionUsers to fetch.
     */
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayMentionUsers.
     */
    cursor?: TodayMentionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayMentionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayMentionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayMentionUsers.
     */
    distinct?: TodayMentionUserScalarFieldEnum | TodayMentionUserScalarFieldEnum[]
  }

  /**
   * TodayMentionUser findMany
   */
  export type TodayMentionUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayMentionUsers to fetch.
     */
    where?: TodayMentionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayMentionUsers to fetch.
     */
    orderBy?: TodayMentionUserOrderByWithRelationInput | TodayMentionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodayMentionUsers.
     */
    cursor?: TodayMentionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayMentionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayMentionUsers.
     */
    skip?: number
    distinct?: TodayMentionUserScalarFieldEnum | TodayMentionUserScalarFieldEnum[]
  }

  /**
   * TodayMentionUser create
   */
  export type TodayMentionUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TodayMentionUser.
     */
    data: XOR<TodayMentionUserCreateInput, TodayMentionUserUncheckedCreateInput>
  }

  /**
   * TodayMentionUser createMany
   */
  export type TodayMentionUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodayMentionUsers.
     */
    data: TodayMentionUserCreateManyInput | TodayMentionUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodayMentionUser createManyAndReturn
   */
  export type TodayMentionUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * The data used to create many TodayMentionUsers.
     */
    data: TodayMentionUserCreateManyInput | TodayMentionUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayMentionUser update
   */
  export type TodayMentionUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TodayMentionUser.
     */
    data: XOR<TodayMentionUserUpdateInput, TodayMentionUserUncheckedUpdateInput>
    /**
     * Choose, which TodayMentionUser to update.
     */
    where: TodayMentionUserWhereUniqueInput
  }

  /**
   * TodayMentionUser updateMany
   */
  export type TodayMentionUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodayMentionUsers.
     */
    data: XOR<TodayMentionUserUpdateManyMutationInput, TodayMentionUserUncheckedUpdateManyInput>
    /**
     * Filter which TodayMentionUsers to update
     */
    where?: TodayMentionUserWhereInput
    /**
     * Limit how many TodayMentionUsers to update.
     */
    limit?: number
  }

  /**
   * TodayMentionUser updateManyAndReturn
   */
  export type TodayMentionUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * The data used to update TodayMentionUsers.
     */
    data: XOR<TodayMentionUserUpdateManyMutationInput, TodayMentionUserUncheckedUpdateManyInput>
    /**
     * Filter which TodayMentionUsers to update
     */
    where?: TodayMentionUserWhereInput
    /**
     * Limit how many TodayMentionUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayMentionUser upsert
   */
  export type TodayMentionUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TodayMentionUser to update in case it exists.
     */
    where: TodayMentionUserWhereUniqueInput
    /**
     * In case the TodayMentionUser found by the `where` argument doesn't exist, create a new TodayMentionUser with this data.
     */
    create: XOR<TodayMentionUserCreateInput, TodayMentionUserUncheckedCreateInput>
    /**
     * In case the TodayMentionUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayMentionUserUpdateInput, TodayMentionUserUncheckedUpdateInput>
  }

  /**
   * TodayMentionUser delete
   */
  export type TodayMentionUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
    /**
     * Filter which TodayMentionUser to delete.
     */
    where: TodayMentionUserWhereUniqueInput
  }

  /**
   * TodayMentionUser deleteMany
   */
  export type TodayMentionUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayMentionUsers to delete
     */
    where?: TodayMentionUserWhereInput
    /**
     * Limit how many TodayMentionUsers to delete.
     */
    limit?: number
  }

  /**
   * TodayMentionUser without action
   */
  export type TodayMentionUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayMentionUser
     */
    select?: TodayMentionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayMentionUser
     */
    omit?: TodayMentionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayMentionUserInclude<ExtArgs> | null
  }


  /**
   * Model TodayVisibleUser
   */

  export type AggregateTodayVisibleUser = {
    _count: TodayVisibleUserCountAggregateOutputType | null
    _min: TodayVisibleUserMinAggregateOutputType | null
    _max: TodayVisibleUserMaxAggregateOutputType | null
  }

  export type TodayVisibleUserMinAggregateOutputType = {
    id: string | null
    todayId: string | null
    visibleUserId: string | null
  }

  export type TodayVisibleUserMaxAggregateOutputType = {
    id: string | null
    todayId: string | null
    visibleUserId: string | null
  }

  export type TodayVisibleUserCountAggregateOutputType = {
    id: number
    todayId: number
    visibleUserId: number
    _all: number
  }


  export type TodayVisibleUserMinAggregateInputType = {
    id?: true
    todayId?: true
    visibleUserId?: true
  }

  export type TodayVisibleUserMaxAggregateInputType = {
    id?: true
    todayId?: true
    visibleUserId?: true
  }

  export type TodayVisibleUserCountAggregateInputType = {
    id?: true
    todayId?: true
    visibleUserId?: true
    _all?: true
  }

  export type TodayVisibleUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayVisibleUser to aggregate.
     */
    where?: TodayVisibleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayVisibleUsers to fetch.
     */
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodayVisibleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayVisibleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayVisibleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodayVisibleUsers
    **/
    _count?: true | TodayVisibleUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodayVisibleUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodayVisibleUserMaxAggregateInputType
  }

  export type GetTodayVisibleUserAggregateType<T extends TodayVisibleUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTodayVisibleUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodayVisibleUser[P]>
      : GetScalarType<T[P], AggregateTodayVisibleUser[P]>
  }




  export type TodayVisibleUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodayVisibleUserWhereInput
    orderBy?: TodayVisibleUserOrderByWithAggregationInput | TodayVisibleUserOrderByWithAggregationInput[]
    by: TodayVisibleUserScalarFieldEnum[] | TodayVisibleUserScalarFieldEnum
    having?: TodayVisibleUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodayVisibleUserCountAggregateInputType | true
    _min?: TodayVisibleUserMinAggregateInputType
    _max?: TodayVisibleUserMaxAggregateInputType
  }

  export type TodayVisibleUserGroupByOutputType = {
    id: string
    todayId: string
    visibleUserId: string
    _count: TodayVisibleUserCountAggregateOutputType | null
    _min: TodayVisibleUserMinAggregateOutputType | null
    _max: TodayVisibleUserMaxAggregateOutputType | null
  }

  type GetTodayVisibleUserGroupByPayload<T extends TodayVisibleUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodayVisibleUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodayVisibleUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodayVisibleUserGroupByOutputType[P]>
            : GetScalarType<T[P], TodayVisibleUserGroupByOutputType[P]>
        }
      >
    >


  export type TodayVisibleUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    visibleUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayVisibleUser"]>

  export type TodayVisibleUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    visibleUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayVisibleUser"]>

  export type TodayVisibleUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todayId?: boolean
    visibleUserId?: boolean
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todayVisibleUser"]>

  export type TodayVisibleUserSelectScalar = {
    id?: boolean
    todayId?: boolean
    visibleUserId?: boolean
  }

  export type TodayVisibleUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "todayId" | "visibleUserId", ExtArgs["result"]["todayVisibleUser"]>
  export type TodayVisibleUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayVisibleUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodayVisibleUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    today?: boolean | TodayDefaultArgs<ExtArgs>
    visibleUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodayVisibleUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodayVisibleUser"
    objects: {
      today: Prisma.$TodayPayload<ExtArgs>
      visibleUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      todayId: string
      visibleUserId: string
    }, ExtArgs["result"]["todayVisibleUser"]>
    composites: {}
  }

  type TodayVisibleUserGetPayload<S extends boolean | null | undefined | TodayVisibleUserDefaultArgs> = $Result.GetResult<Prisma.$TodayVisibleUserPayload, S>

  type TodayVisibleUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodayVisibleUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodayVisibleUserCountAggregateInputType | true
    }

  export interface TodayVisibleUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodayVisibleUser'], meta: { name: 'TodayVisibleUser' } }
    /**
     * Find zero or one TodayVisibleUser that matches the filter.
     * @param {TodayVisibleUserFindUniqueArgs} args - Arguments to find a TodayVisibleUser
     * @example
     * // Get one TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodayVisibleUserFindUniqueArgs>(args: SelectSubset<T, TodayVisibleUserFindUniqueArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TodayVisibleUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodayVisibleUserFindUniqueOrThrowArgs} args - Arguments to find a TodayVisibleUser
     * @example
     * // Get one TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodayVisibleUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TodayVisibleUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayVisibleUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserFindFirstArgs} args - Arguments to find a TodayVisibleUser
     * @example
     * // Get one TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodayVisibleUserFindFirstArgs>(args?: SelectSubset<T, TodayVisibleUserFindFirstArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TodayVisibleUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserFindFirstOrThrowArgs} args - Arguments to find a TodayVisibleUser
     * @example
     * // Get one TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodayVisibleUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TodayVisibleUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TodayVisibleUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodayVisibleUsers
     * const todayVisibleUsers = await prisma.todayVisibleUser.findMany()
     * 
     * // Get first 10 TodayVisibleUsers
     * const todayVisibleUsers = await prisma.todayVisibleUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todayVisibleUserWithIdOnly = await prisma.todayVisibleUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodayVisibleUserFindManyArgs>(args?: SelectSubset<T, TodayVisibleUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TodayVisibleUser.
     * @param {TodayVisibleUserCreateArgs} args - Arguments to create a TodayVisibleUser.
     * @example
     * // Create one TodayVisibleUser
     * const TodayVisibleUser = await prisma.todayVisibleUser.create({
     *   data: {
     *     // ... data to create a TodayVisibleUser
     *   }
     * })
     * 
     */
    create<T extends TodayVisibleUserCreateArgs>(args: SelectSubset<T, TodayVisibleUserCreateArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TodayVisibleUsers.
     * @param {TodayVisibleUserCreateManyArgs} args - Arguments to create many TodayVisibleUsers.
     * @example
     * // Create many TodayVisibleUsers
     * const todayVisibleUser = await prisma.todayVisibleUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodayVisibleUserCreateManyArgs>(args?: SelectSubset<T, TodayVisibleUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodayVisibleUsers and returns the data saved in the database.
     * @param {TodayVisibleUserCreateManyAndReturnArgs} args - Arguments to create many TodayVisibleUsers.
     * @example
     * // Create many TodayVisibleUsers
     * const todayVisibleUser = await prisma.todayVisibleUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodayVisibleUsers and only return the `id`
     * const todayVisibleUserWithIdOnly = await prisma.todayVisibleUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodayVisibleUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TodayVisibleUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TodayVisibleUser.
     * @param {TodayVisibleUserDeleteArgs} args - Arguments to delete one TodayVisibleUser.
     * @example
     * // Delete one TodayVisibleUser
     * const TodayVisibleUser = await prisma.todayVisibleUser.delete({
     *   where: {
     *     // ... filter to delete one TodayVisibleUser
     *   }
     * })
     * 
     */
    delete<T extends TodayVisibleUserDeleteArgs>(args: SelectSubset<T, TodayVisibleUserDeleteArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TodayVisibleUser.
     * @param {TodayVisibleUserUpdateArgs} args - Arguments to update one TodayVisibleUser.
     * @example
     * // Update one TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodayVisibleUserUpdateArgs>(args: SelectSubset<T, TodayVisibleUserUpdateArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TodayVisibleUsers.
     * @param {TodayVisibleUserDeleteManyArgs} args - Arguments to filter TodayVisibleUsers to delete.
     * @example
     * // Delete a few TodayVisibleUsers
     * const { count } = await prisma.todayVisibleUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodayVisibleUserDeleteManyArgs>(args?: SelectSubset<T, TodayVisibleUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayVisibleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodayVisibleUsers
     * const todayVisibleUser = await prisma.todayVisibleUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodayVisibleUserUpdateManyArgs>(args: SelectSubset<T, TodayVisibleUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodayVisibleUsers and returns the data updated in the database.
     * @param {TodayVisibleUserUpdateManyAndReturnArgs} args - Arguments to update many TodayVisibleUsers.
     * @example
     * // Update many TodayVisibleUsers
     * const todayVisibleUser = await prisma.todayVisibleUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TodayVisibleUsers and only return the `id`
     * const todayVisibleUserWithIdOnly = await prisma.todayVisibleUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TodayVisibleUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TodayVisibleUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TodayVisibleUser.
     * @param {TodayVisibleUserUpsertArgs} args - Arguments to update or create a TodayVisibleUser.
     * @example
     * // Update or create a TodayVisibleUser
     * const todayVisibleUser = await prisma.todayVisibleUser.upsert({
     *   create: {
     *     // ... data to create a TodayVisibleUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodayVisibleUser we want to update
     *   }
     * })
     */
    upsert<T extends TodayVisibleUserUpsertArgs>(args: SelectSubset<T, TodayVisibleUserUpsertArgs<ExtArgs>>): Prisma__TodayVisibleUserClient<$Result.GetResult<Prisma.$TodayVisibleUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TodayVisibleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserCountArgs} args - Arguments to filter TodayVisibleUsers to count.
     * @example
     * // Count the number of TodayVisibleUsers
     * const count = await prisma.todayVisibleUser.count({
     *   where: {
     *     // ... the filter for the TodayVisibleUsers we want to count
     *   }
     * })
    **/
    count<T extends TodayVisibleUserCountArgs>(
      args?: Subset<T, TodayVisibleUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodayVisibleUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodayVisibleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodayVisibleUserAggregateArgs>(args: Subset<T, TodayVisibleUserAggregateArgs>): Prisma.PrismaPromise<GetTodayVisibleUserAggregateType<T>>

    /**
     * Group by TodayVisibleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodayVisibleUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodayVisibleUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodayVisibleUserGroupByArgs['orderBy'] }
        : { orderBy?: TodayVisibleUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodayVisibleUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodayVisibleUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodayVisibleUser model
   */
  readonly fields: TodayVisibleUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodayVisibleUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodayVisibleUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    today<T extends TodayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodayDefaultArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visibleUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodayVisibleUser model
   */
  interface TodayVisibleUserFieldRefs {
    readonly id: FieldRef<"TodayVisibleUser", 'String'>
    readonly todayId: FieldRef<"TodayVisibleUser", 'String'>
    readonly visibleUserId: FieldRef<"TodayVisibleUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TodayVisibleUser findUnique
   */
  export type TodayVisibleUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayVisibleUser to fetch.
     */
    where: TodayVisibleUserWhereUniqueInput
  }

  /**
   * TodayVisibleUser findUniqueOrThrow
   */
  export type TodayVisibleUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayVisibleUser to fetch.
     */
    where: TodayVisibleUserWhereUniqueInput
  }

  /**
   * TodayVisibleUser findFirst
   */
  export type TodayVisibleUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayVisibleUser to fetch.
     */
    where?: TodayVisibleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayVisibleUsers to fetch.
     */
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayVisibleUsers.
     */
    cursor?: TodayVisibleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayVisibleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayVisibleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayVisibleUsers.
     */
    distinct?: TodayVisibleUserScalarFieldEnum | TodayVisibleUserScalarFieldEnum[]
  }

  /**
   * TodayVisibleUser findFirstOrThrow
   */
  export type TodayVisibleUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayVisibleUser to fetch.
     */
    where?: TodayVisibleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayVisibleUsers to fetch.
     */
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodayVisibleUsers.
     */
    cursor?: TodayVisibleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayVisibleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayVisibleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodayVisibleUsers.
     */
    distinct?: TodayVisibleUserScalarFieldEnum | TodayVisibleUserScalarFieldEnum[]
  }

  /**
   * TodayVisibleUser findMany
   */
  export type TodayVisibleUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter, which TodayVisibleUsers to fetch.
     */
    where?: TodayVisibleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodayVisibleUsers to fetch.
     */
    orderBy?: TodayVisibleUserOrderByWithRelationInput | TodayVisibleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodayVisibleUsers.
     */
    cursor?: TodayVisibleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodayVisibleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodayVisibleUsers.
     */
    skip?: number
    distinct?: TodayVisibleUserScalarFieldEnum | TodayVisibleUserScalarFieldEnum[]
  }

  /**
   * TodayVisibleUser create
   */
  export type TodayVisibleUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TodayVisibleUser.
     */
    data: XOR<TodayVisibleUserCreateInput, TodayVisibleUserUncheckedCreateInput>
  }

  /**
   * TodayVisibleUser createMany
   */
  export type TodayVisibleUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodayVisibleUsers.
     */
    data: TodayVisibleUserCreateManyInput | TodayVisibleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodayVisibleUser createManyAndReturn
   */
  export type TodayVisibleUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * The data used to create many TodayVisibleUsers.
     */
    data: TodayVisibleUserCreateManyInput | TodayVisibleUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayVisibleUser update
   */
  export type TodayVisibleUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TodayVisibleUser.
     */
    data: XOR<TodayVisibleUserUpdateInput, TodayVisibleUserUncheckedUpdateInput>
    /**
     * Choose, which TodayVisibleUser to update.
     */
    where: TodayVisibleUserWhereUniqueInput
  }

  /**
   * TodayVisibleUser updateMany
   */
  export type TodayVisibleUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodayVisibleUsers.
     */
    data: XOR<TodayVisibleUserUpdateManyMutationInput, TodayVisibleUserUncheckedUpdateManyInput>
    /**
     * Filter which TodayVisibleUsers to update
     */
    where?: TodayVisibleUserWhereInput
    /**
     * Limit how many TodayVisibleUsers to update.
     */
    limit?: number
  }

  /**
   * TodayVisibleUser updateManyAndReturn
   */
  export type TodayVisibleUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * The data used to update TodayVisibleUsers.
     */
    data: XOR<TodayVisibleUserUpdateManyMutationInput, TodayVisibleUserUncheckedUpdateManyInput>
    /**
     * Filter which TodayVisibleUsers to update
     */
    where?: TodayVisibleUserWhereInput
    /**
     * Limit how many TodayVisibleUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodayVisibleUser upsert
   */
  export type TodayVisibleUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TodayVisibleUser to update in case it exists.
     */
    where: TodayVisibleUserWhereUniqueInput
    /**
     * In case the TodayVisibleUser found by the `where` argument doesn't exist, create a new TodayVisibleUser with this data.
     */
    create: XOR<TodayVisibleUserCreateInput, TodayVisibleUserUncheckedCreateInput>
    /**
     * In case the TodayVisibleUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodayVisibleUserUpdateInput, TodayVisibleUserUncheckedUpdateInput>
  }

  /**
   * TodayVisibleUser delete
   */
  export type TodayVisibleUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
    /**
     * Filter which TodayVisibleUser to delete.
     */
    where: TodayVisibleUserWhereUniqueInput
  }

  /**
   * TodayVisibleUser deleteMany
   */
  export type TodayVisibleUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodayVisibleUsers to delete
     */
    where?: TodayVisibleUserWhereInput
    /**
     * Limit how many TodayVisibleUsers to delete.
     */
    limit?: number
  }

  /**
   * TodayVisibleUser without action
   */
  export type TodayVisibleUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayVisibleUser
     */
    select?: TodayVisibleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayVisibleUser
     */
    omit?: TodayVisibleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayVisibleUserInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    userId: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    todayTags?: boolean | Tag$todayTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    todayTags?: boolean | Tag$todayTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      todayTags: Prisma.$TodayTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todayTags<T extends Tag$todayTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$todayTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodayTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.todayTags
   */
  export type Tag$todayTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodayTag
     */
    select?: TodayTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TodayTag
     */
    omit?: TodayTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodayTagInclude<ExtArgs> | null
    where?: TodayTagWhereInput
    orderBy?: TodayTagOrderByWithRelationInput | TodayTagOrderByWithRelationInput[]
    cursor?: TodayTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodayTagScalarFieldEnum | TodayTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    todayId: string | null
    content: string | null
    parentCommentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    todayId: string | null
    content: string | null
    parentCommentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    todayId: number
    content: number
    parentCommentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    userId: string
    todayId: string
    content: string
    parentCommentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    childComments?: boolean | Comment$childCommentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    todayId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "todayId" | "content" | "parentCommentId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    childComments?: boolean | Comment$childCommentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      today: Prisma.$TodayPayload<ExtArgs>
      parentComment: Prisma.$CommentPayload<ExtArgs> | null
      childComments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      todayId: string
      content: string
      parentCommentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    today<T extends TodayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodayDefaultArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends Comment$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentCommentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childComments<T extends Comment$childCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$childCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly todayId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly parentCommentId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parentComment
   */
  export type Comment$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.childComments
   */
  export type Comment$childCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    todayId: string | null
    emojiUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    todayId: string | null
    emojiUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    userId: number
    todayId: number
    emojiUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    emojiUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    emojiUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    userId?: true
    todayId?: true
    emojiUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    userId: string
    todayId: string
    emojiUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    emojiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    emojiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    todayId?: boolean
    emojiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    userId?: boolean
    todayId?: boolean
    emojiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "todayId" | "emojiUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    today?: boolean | TodayDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      today: Prisma.$TodayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      todayId: string
      emojiUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    today<T extends TodayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodayDefaultArgs<ExtArgs>>): Prisma__TodayClient<$Result.GetResult<Prisma.$TodayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly todayId: FieldRef<"Reaction", 'String'>
    readonly emojiUrl: FieldRef<"Reaction", 'String'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    createdAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "createdAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly user1Id: FieldRef<"Friendship", 'String'>
    readonly user2Id: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model FriendsGroup
   */

  export type AggregateFriendsGroup = {
    _count: FriendsGroupCountAggregateOutputType | null
    _min: FriendsGroupMinAggregateOutputType | null
    _max: FriendsGroupMaxAggregateOutputType | null
  }

  export type FriendsGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type FriendsGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type FriendsGroupCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type FriendsGroupMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type FriendsGroupMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type FriendsGroupCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type FriendsGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendsGroup to aggregate.
     */
    where?: FriendsGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendsGroups to fetch.
     */
    orderBy?: FriendsGroupOrderByWithRelationInput | FriendsGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendsGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendsGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendsGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendsGroups
    **/
    _count?: true | FriendsGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsGroupMaxAggregateInputType
  }

  export type GetFriendsGroupAggregateType<T extends FriendsGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendsGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendsGroup[P]>
      : GetScalarType<T[P], AggregateFriendsGroup[P]>
  }




  export type FriendsGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsGroupWhereInput
    orderBy?: FriendsGroupOrderByWithAggregationInput | FriendsGroupOrderByWithAggregationInput[]
    by: FriendsGroupScalarFieldEnum[] | FriendsGroupScalarFieldEnum
    having?: FriendsGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsGroupCountAggregateInputType | true
    _min?: FriendsGroupMinAggregateInputType
    _max?: FriendsGroupMaxAggregateInputType
  }

  export type FriendsGroupGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: FriendsGroupCountAggregateOutputType | null
    _min: FriendsGroupMinAggregateOutputType | null
    _max: FriendsGroupMaxAggregateOutputType | null
  }

  type GetFriendsGroupGroupByPayload<T extends FriendsGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupGroupByOutputType[P]>
        }
      >
    >


  export type FriendsGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupFriends?: boolean | FriendsGroup$groupFriendsArgs<ExtArgs>
    _count?: boolean | FriendsGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendsGroup"]>

  export type FriendsGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendsGroup"]>

  export type FriendsGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendsGroup"]>

  export type FriendsGroupSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type FriendsGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["friendsGroup"]>
  export type FriendsGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupFriends?: boolean | FriendsGroup$groupFriendsArgs<ExtArgs>
    _count?: boolean | FriendsGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FriendsGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendsGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendsGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      groupFriends: Prisma.$GroupFriendPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["friendsGroup"]>
    composites: {}
  }

  type FriendsGroupGetPayload<S extends boolean | null | undefined | FriendsGroupDefaultArgs> = $Result.GetResult<Prisma.$FriendsGroupPayload, S>

  type FriendsGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendsGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsGroupCountAggregateInputType | true
    }

  export interface FriendsGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendsGroup'], meta: { name: 'FriendsGroup' } }
    /**
     * Find zero or one FriendsGroup that matches the filter.
     * @param {FriendsGroupFindUniqueArgs} args - Arguments to find a FriendsGroup
     * @example
     * // Get one FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendsGroupFindUniqueArgs>(args: SelectSubset<T, FriendsGroupFindUniqueArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendsGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendsGroupFindUniqueOrThrowArgs} args - Arguments to find a FriendsGroup
     * @example
     * // Get one FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendsGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendsGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendsGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupFindFirstArgs} args - Arguments to find a FriendsGroup
     * @example
     * // Get one FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendsGroupFindFirstArgs>(args?: SelectSubset<T, FriendsGroupFindFirstArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendsGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupFindFirstOrThrowArgs} args - Arguments to find a FriendsGroup
     * @example
     * // Get one FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendsGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendsGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendsGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendsGroups
     * const friendsGroups = await prisma.friendsGroup.findMany()
     * 
     * // Get first 10 FriendsGroups
     * const friendsGroups = await prisma.friendsGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsGroupWithIdOnly = await prisma.friendsGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendsGroupFindManyArgs>(args?: SelectSubset<T, FriendsGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendsGroup.
     * @param {FriendsGroupCreateArgs} args - Arguments to create a FriendsGroup.
     * @example
     * // Create one FriendsGroup
     * const FriendsGroup = await prisma.friendsGroup.create({
     *   data: {
     *     // ... data to create a FriendsGroup
     *   }
     * })
     * 
     */
    create<T extends FriendsGroupCreateArgs>(args: SelectSubset<T, FriendsGroupCreateArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendsGroups.
     * @param {FriendsGroupCreateManyArgs} args - Arguments to create many FriendsGroups.
     * @example
     * // Create many FriendsGroups
     * const friendsGroup = await prisma.friendsGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendsGroupCreateManyArgs>(args?: SelectSubset<T, FriendsGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FriendsGroups and returns the data saved in the database.
     * @param {FriendsGroupCreateManyAndReturnArgs} args - Arguments to create many FriendsGroups.
     * @example
     * // Create many FriendsGroups
     * const friendsGroup = await prisma.friendsGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FriendsGroups and only return the `id`
     * const friendsGroupWithIdOnly = await prisma.friendsGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendsGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendsGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FriendsGroup.
     * @param {FriendsGroupDeleteArgs} args - Arguments to delete one FriendsGroup.
     * @example
     * // Delete one FriendsGroup
     * const FriendsGroup = await prisma.friendsGroup.delete({
     *   where: {
     *     // ... filter to delete one FriendsGroup
     *   }
     * })
     * 
     */
    delete<T extends FriendsGroupDeleteArgs>(args: SelectSubset<T, FriendsGroupDeleteArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendsGroup.
     * @param {FriendsGroupUpdateArgs} args - Arguments to update one FriendsGroup.
     * @example
     * // Update one FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendsGroupUpdateArgs>(args: SelectSubset<T, FriendsGroupUpdateArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendsGroups.
     * @param {FriendsGroupDeleteManyArgs} args - Arguments to filter FriendsGroups to delete.
     * @example
     * // Delete a few FriendsGroups
     * const { count } = await prisma.friendsGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendsGroupDeleteManyArgs>(args?: SelectSubset<T, FriendsGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendsGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendsGroups
     * const friendsGroup = await prisma.friendsGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendsGroupUpdateManyArgs>(args: SelectSubset<T, FriendsGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendsGroups and returns the data updated in the database.
     * @param {FriendsGroupUpdateManyAndReturnArgs} args - Arguments to update many FriendsGroups.
     * @example
     * // Update many FriendsGroups
     * const friendsGroup = await prisma.friendsGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FriendsGroups and only return the `id`
     * const friendsGroupWithIdOnly = await prisma.friendsGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendsGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendsGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FriendsGroup.
     * @param {FriendsGroupUpsertArgs} args - Arguments to update or create a FriendsGroup.
     * @example
     * // Update or create a FriendsGroup
     * const friendsGroup = await prisma.friendsGroup.upsert({
     *   create: {
     *     // ... data to create a FriendsGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendsGroup we want to update
     *   }
     * })
     */
    upsert<T extends FriendsGroupUpsertArgs>(args: SelectSubset<T, FriendsGroupUpsertArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendsGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupCountArgs} args - Arguments to filter FriendsGroups to count.
     * @example
     * // Count the number of FriendsGroups
     * const count = await prisma.friendsGroup.count({
     *   where: {
     *     // ... the filter for the FriendsGroups we want to count
     *   }
     * })
    **/
    count<T extends FriendsGroupCountArgs>(
      args?: Subset<T, FriendsGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendsGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendsGroupAggregateArgs>(args: Subset<T, FriendsGroupAggregateArgs>): Prisma.PrismaPromise<GetFriendsGroupAggregateType<T>>

    /**
     * Group by FriendsGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendsGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendsGroupGroupByArgs['orderBy'] }
        : { orderBy?: FriendsGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendsGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendsGroup model
   */
  readonly fields: FriendsGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendsGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendsGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupFriends<T extends FriendsGroup$groupFriendsArgs<ExtArgs> = {}>(args?: Subset<T, FriendsGroup$groupFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FriendsGroup model
   */
  interface FriendsGroupFieldRefs {
    readonly id: FieldRef<"FriendsGroup", 'String'>
    readonly name: FieldRef<"FriendsGroup", 'String'>
    readonly userId: FieldRef<"FriendsGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FriendsGroup findUnique
   */
  export type FriendsGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendsGroup to fetch.
     */
    where: FriendsGroupWhereUniqueInput
  }

  /**
   * FriendsGroup findUniqueOrThrow
   */
  export type FriendsGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendsGroup to fetch.
     */
    where: FriendsGroupWhereUniqueInput
  }

  /**
   * FriendsGroup findFirst
   */
  export type FriendsGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendsGroup to fetch.
     */
    where?: FriendsGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendsGroups to fetch.
     */
    orderBy?: FriendsGroupOrderByWithRelationInput | FriendsGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendsGroups.
     */
    cursor?: FriendsGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendsGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendsGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendsGroups.
     */
    distinct?: FriendsGroupScalarFieldEnum | FriendsGroupScalarFieldEnum[]
  }

  /**
   * FriendsGroup findFirstOrThrow
   */
  export type FriendsGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendsGroup to fetch.
     */
    where?: FriendsGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendsGroups to fetch.
     */
    orderBy?: FriendsGroupOrderByWithRelationInput | FriendsGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendsGroups.
     */
    cursor?: FriendsGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendsGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendsGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendsGroups.
     */
    distinct?: FriendsGroupScalarFieldEnum | FriendsGroupScalarFieldEnum[]
  }

  /**
   * FriendsGroup findMany
   */
  export type FriendsGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter, which FriendsGroups to fetch.
     */
    where?: FriendsGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendsGroups to fetch.
     */
    orderBy?: FriendsGroupOrderByWithRelationInput | FriendsGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendsGroups.
     */
    cursor?: FriendsGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendsGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendsGroups.
     */
    skip?: number
    distinct?: FriendsGroupScalarFieldEnum | FriendsGroupScalarFieldEnum[]
  }

  /**
   * FriendsGroup create
   */
  export type FriendsGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendsGroup.
     */
    data: XOR<FriendsGroupCreateInput, FriendsGroupUncheckedCreateInput>
  }

  /**
   * FriendsGroup createMany
   */
  export type FriendsGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendsGroups.
     */
    data: FriendsGroupCreateManyInput | FriendsGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FriendsGroup createManyAndReturn
   */
  export type FriendsGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * The data used to create many FriendsGroups.
     */
    data: FriendsGroupCreateManyInput | FriendsGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendsGroup update
   */
  export type FriendsGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendsGroup.
     */
    data: XOR<FriendsGroupUpdateInput, FriendsGroupUncheckedUpdateInput>
    /**
     * Choose, which FriendsGroup to update.
     */
    where: FriendsGroupWhereUniqueInput
  }

  /**
   * FriendsGroup updateMany
   */
  export type FriendsGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendsGroups.
     */
    data: XOR<FriendsGroupUpdateManyMutationInput, FriendsGroupUncheckedUpdateManyInput>
    /**
     * Filter which FriendsGroups to update
     */
    where?: FriendsGroupWhereInput
    /**
     * Limit how many FriendsGroups to update.
     */
    limit?: number
  }

  /**
   * FriendsGroup updateManyAndReturn
   */
  export type FriendsGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * The data used to update FriendsGroups.
     */
    data: XOR<FriendsGroupUpdateManyMutationInput, FriendsGroupUncheckedUpdateManyInput>
    /**
     * Filter which FriendsGroups to update
     */
    where?: FriendsGroupWhereInput
    /**
     * Limit how many FriendsGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendsGroup upsert
   */
  export type FriendsGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendsGroup to update in case it exists.
     */
    where: FriendsGroupWhereUniqueInput
    /**
     * In case the FriendsGroup found by the `where` argument doesn't exist, create a new FriendsGroup with this data.
     */
    create: XOR<FriendsGroupCreateInput, FriendsGroupUncheckedCreateInput>
    /**
     * In case the FriendsGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendsGroupUpdateInput, FriendsGroupUncheckedUpdateInput>
  }

  /**
   * FriendsGroup delete
   */
  export type FriendsGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
    /**
     * Filter which FriendsGroup to delete.
     */
    where: FriendsGroupWhereUniqueInput
  }

  /**
   * FriendsGroup deleteMany
   */
  export type FriendsGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendsGroups to delete
     */
    where?: FriendsGroupWhereInput
    /**
     * Limit how many FriendsGroups to delete.
     */
    limit?: number
  }

  /**
   * FriendsGroup.groupFriends
   */
  export type FriendsGroup$groupFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    where?: GroupFriendWhereInput
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    cursor?: GroupFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupFriendScalarFieldEnum | GroupFriendScalarFieldEnum[]
  }

  /**
   * FriendsGroup without action
   */
  export type FriendsGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsGroup
     */
    select?: FriendsGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendsGroup
     */
    omit?: FriendsGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsGroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupFriend
   */

  export type AggregateGroupFriend = {
    _count: GroupFriendCountAggregateOutputType | null
    _min: GroupFriendMinAggregateOutputType | null
    _max: GroupFriendMaxAggregateOutputType | null
  }

  export type GroupFriendMinAggregateOutputType = {
    id: string | null
    friendsGroupId: string | null
    friendId: string | null
  }

  export type GroupFriendMaxAggregateOutputType = {
    id: string | null
    friendsGroupId: string | null
    friendId: string | null
  }

  export type GroupFriendCountAggregateOutputType = {
    id: number
    friendsGroupId: number
    friendId: number
    _all: number
  }


  export type GroupFriendMinAggregateInputType = {
    id?: true
    friendsGroupId?: true
    friendId?: true
  }

  export type GroupFriendMaxAggregateInputType = {
    id?: true
    friendsGroupId?: true
    friendId?: true
  }

  export type GroupFriendCountAggregateInputType = {
    id?: true
    friendsGroupId?: true
    friendId?: true
    _all?: true
  }

  export type GroupFriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupFriend to aggregate.
     */
    where?: GroupFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFriends to fetch.
     */
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupFriends
    **/
    _count?: true | GroupFriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupFriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupFriendMaxAggregateInputType
  }

  export type GetGroupFriendAggregateType<T extends GroupFriendAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupFriend[P]>
      : GetScalarType<T[P], AggregateGroupFriend[P]>
  }




  export type GroupFriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFriendWhereInput
    orderBy?: GroupFriendOrderByWithAggregationInput | GroupFriendOrderByWithAggregationInput[]
    by: GroupFriendScalarFieldEnum[] | GroupFriendScalarFieldEnum
    having?: GroupFriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupFriendCountAggregateInputType | true
    _min?: GroupFriendMinAggregateInputType
    _max?: GroupFriendMaxAggregateInputType
  }

  export type GroupFriendGroupByOutputType = {
    id: string
    friendsGroupId: string
    friendId: string
    _count: GroupFriendCountAggregateOutputType | null
    _min: GroupFriendMinAggregateOutputType | null
    _max: GroupFriendMaxAggregateOutputType | null
  }

  type GetGroupFriendGroupByPayload<T extends GroupFriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupFriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupFriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupFriendGroupByOutputType[P]>
            : GetScalarType<T[P], GroupFriendGroupByOutputType[P]>
        }
      >
    >


  export type GroupFriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendsGroupId?: boolean
    friendId?: boolean
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFriend"]>

  export type GroupFriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendsGroupId?: boolean
    friendId?: boolean
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFriend"]>

  export type GroupFriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendsGroupId?: boolean
    friendId?: boolean
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFriend"]>

  export type GroupFriendSelectScalar = {
    id?: boolean
    friendsGroupId?: boolean
    friendId?: boolean
  }

  export type GroupFriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "friendsGroupId" | "friendId", ExtArgs["result"]["groupFriend"]>
  export type GroupFriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupFriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupFriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendsGroup?: boolean | FriendsGroupDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupFriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupFriend"
    objects: {
      friendsGroup: Prisma.$FriendsGroupPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      friendsGroupId: string
      friendId: string
    }, ExtArgs["result"]["groupFriend"]>
    composites: {}
  }

  type GroupFriendGetPayload<S extends boolean | null | undefined | GroupFriendDefaultArgs> = $Result.GetResult<Prisma.$GroupFriendPayload, S>

  type GroupFriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupFriendCountAggregateInputType | true
    }

  export interface GroupFriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupFriend'], meta: { name: 'GroupFriend' } }
    /**
     * Find zero or one GroupFriend that matches the filter.
     * @param {GroupFriendFindUniqueArgs} args - Arguments to find a GroupFriend
     * @example
     * // Get one GroupFriend
     * const groupFriend = await prisma.groupFriend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFriendFindUniqueArgs>(args: SelectSubset<T, GroupFriendFindUniqueArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupFriend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFriendFindUniqueOrThrowArgs} args - Arguments to find a GroupFriend
     * @example
     * // Get one GroupFriend
     * const groupFriend = await prisma.groupFriend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFriendFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupFriend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendFindFirstArgs} args - Arguments to find a GroupFriend
     * @example
     * // Get one GroupFriend
     * const groupFriend = await prisma.groupFriend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFriendFindFirstArgs>(args?: SelectSubset<T, GroupFriendFindFirstArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupFriend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendFindFirstOrThrowArgs} args - Arguments to find a GroupFriend
     * @example
     * // Get one GroupFriend
     * const groupFriend = await prisma.groupFriend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFriendFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupFriends
     * const groupFriends = await prisma.groupFriend.findMany()
     * 
     * // Get first 10 GroupFriends
     * const groupFriends = await prisma.groupFriend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupFriendWithIdOnly = await prisma.groupFriend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFriendFindManyArgs>(args?: SelectSubset<T, GroupFriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupFriend.
     * @param {GroupFriendCreateArgs} args - Arguments to create a GroupFriend.
     * @example
     * // Create one GroupFriend
     * const GroupFriend = await prisma.groupFriend.create({
     *   data: {
     *     // ... data to create a GroupFriend
     *   }
     * })
     * 
     */
    create<T extends GroupFriendCreateArgs>(args: SelectSubset<T, GroupFriendCreateArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupFriends.
     * @param {GroupFriendCreateManyArgs} args - Arguments to create many GroupFriends.
     * @example
     * // Create many GroupFriends
     * const groupFriend = await prisma.groupFriend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupFriendCreateManyArgs>(args?: SelectSubset<T, GroupFriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupFriends and returns the data saved in the database.
     * @param {GroupFriendCreateManyAndReturnArgs} args - Arguments to create many GroupFriends.
     * @example
     * // Create many GroupFriends
     * const groupFriend = await prisma.groupFriend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupFriends and only return the `id`
     * const groupFriendWithIdOnly = await prisma.groupFriend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupFriendCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupFriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupFriend.
     * @param {GroupFriendDeleteArgs} args - Arguments to delete one GroupFriend.
     * @example
     * // Delete one GroupFriend
     * const GroupFriend = await prisma.groupFriend.delete({
     *   where: {
     *     // ... filter to delete one GroupFriend
     *   }
     * })
     * 
     */
    delete<T extends GroupFriendDeleteArgs>(args: SelectSubset<T, GroupFriendDeleteArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupFriend.
     * @param {GroupFriendUpdateArgs} args - Arguments to update one GroupFriend.
     * @example
     * // Update one GroupFriend
     * const groupFriend = await prisma.groupFriend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupFriendUpdateArgs>(args: SelectSubset<T, GroupFriendUpdateArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupFriends.
     * @param {GroupFriendDeleteManyArgs} args - Arguments to filter GroupFriends to delete.
     * @example
     * // Delete a few GroupFriends
     * const { count } = await prisma.groupFriend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupFriendDeleteManyArgs>(args?: SelectSubset<T, GroupFriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupFriends
     * const groupFriend = await prisma.groupFriend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupFriendUpdateManyArgs>(args: SelectSubset<T, GroupFriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupFriends and returns the data updated in the database.
     * @param {GroupFriendUpdateManyAndReturnArgs} args - Arguments to update many GroupFriends.
     * @example
     * // Update many GroupFriends
     * const groupFriend = await prisma.groupFriend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupFriends and only return the `id`
     * const groupFriendWithIdOnly = await prisma.groupFriend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupFriendUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupFriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupFriend.
     * @param {GroupFriendUpsertArgs} args - Arguments to update or create a GroupFriend.
     * @example
     * // Update or create a GroupFriend
     * const groupFriend = await prisma.groupFriend.upsert({
     *   create: {
     *     // ... data to create a GroupFriend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupFriend we want to update
     *   }
     * })
     */
    upsert<T extends GroupFriendUpsertArgs>(args: SelectSubset<T, GroupFriendUpsertArgs<ExtArgs>>): Prisma__GroupFriendClient<$Result.GetResult<Prisma.$GroupFriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendCountArgs} args - Arguments to filter GroupFriends to count.
     * @example
     * // Count the number of GroupFriends
     * const count = await prisma.groupFriend.count({
     *   where: {
     *     // ... the filter for the GroupFriends we want to count
     *   }
     * })
    **/
    count<T extends GroupFriendCountArgs>(
      args?: Subset<T, GroupFriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupFriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupFriendAggregateArgs>(args: Subset<T, GroupFriendAggregateArgs>): Prisma.PrismaPromise<GetGroupFriendAggregateType<T>>

    /**
     * Group by GroupFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupFriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupFriendGroupByArgs['orderBy'] }
        : { orderBy?: GroupFriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupFriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupFriend model
   */
  readonly fields: GroupFriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupFriend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupFriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friendsGroup<T extends FriendsGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FriendsGroupDefaultArgs<ExtArgs>>): Prisma__FriendsGroupClient<$Result.GetResult<Prisma.$FriendsGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupFriend model
   */
  interface GroupFriendFieldRefs {
    readonly id: FieldRef<"GroupFriend", 'String'>
    readonly friendsGroupId: FieldRef<"GroupFriend", 'String'>
    readonly friendId: FieldRef<"GroupFriend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupFriend findUnique
   */
  export type GroupFriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter, which GroupFriend to fetch.
     */
    where: GroupFriendWhereUniqueInput
  }

  /**
   * GroupFriend findUniqueOrThrow
   */
  export type GroupFriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter, which GroupFriend to fetch.
     */
    where: GroupFriendWhereUniqueInput
  }

  /**
   * GroupFriend findFirst
   */
  export type GroupFriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter, which GroupFriend to fetch.
     */
    where?: GroupFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFriends to fetch.
     */
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupFriends.
     */
    cursor?: GroupFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupFriends.
     */
    distinct?: GroupFriendScalarFieldEnum | GroupFriendScalarFieldEnum[]
  }

  /**
   * GroupFriend findFirstOrThrow
   */
  export type GroupFriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter, which GroupFriend to fetch.
     */
    where?: GroupFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFriends to fetch.
     */
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupFriends.
     */
    cursor?: GroupFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupFriends.
     */
    distinct?: GroupFriendScalarFieldEnum | GroupFriendScalarFieldEnum[]
  }

  /**
   * GroupFriend findMany
   */
  export type GroupFriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter, which GroupFriends to fetch.
     */
    where?: GroupFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFriends to fetch.
     */
    orderBy?: GroupFriendOrderByWithRelationInput | GroupFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupFriends.
     */
    cursor?: GroupFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFriends.
     */
    skip?: number
    distinct?: GroupFriendScalarFieldEnum | GroupFriendScalarFieldEnum[]
  }

  /**
   * GroupFriend create
   */
  export type GroupFriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupFriend.
     */
    data: XOR<GroupFriendCreateInput, GroupFriendUncheckedCreateInput>
  }

  /**
   * GroupFriend createMany
   */
  export type GroupFriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupFriends.
     */
    data: GroupFriendCreateManyInput | GroupFriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupFriend createManyAndReturn
   */
  export type GroupFriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * The data used to create many GroupFriends.
     */
    data: GroupFriendCreateManyInput | GroupFriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupFriend update
   */
  export type GroupFriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupFriend.
     */
    data: XOR<GroupFriendUpdateInput, GroupFriendUncheckedUpdateInput>
    /**
     * Choose, which GroupFriend to update.
     */
    where: GroupFriendWhereUniqueInput
  }

  /**
   * GroupFriend updateMany
   */
  export type GroupFriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupFriends.
     */
    data: XOR<GroupFriendUpdateManyMutationInput, GroupFriendUncheckedUpdateManyInput>
    /**
     * Filter which GroupFriends to update
     */
    where?: GroupFriendWhereInput
    /**
     * Limit how many GroupFriends to update.
     */
    limit?: number
  }

  /**
   * GroupFriend updateManyAndReturn
   */
  export type GroupFriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * The data used to update GroupFriends.
     */
    data: XOR<GroupFriendUpdateManyMutationInput, GroupFriendUncheckedUpdateManyInput>
    /**
     * Filter which GroupFriends to update
     */
    where?: GroupFriendWhereInput
    /**
     * Limit how many GroupFriends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupFriend upsert
   */
  export type GroupFriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupFriend to update in case it exists.
     */
    where: GroupFriendWhereUniqueInput
    /**
     * In case the GroupFriend found by the `where` argument doesn't exist, create a new GroupFriend with this data.
     */
    create: XOR<GroupFriendCreateInput, GroupFriendUncheckedCreateInput>
    /**
     * In case the GroupFriend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupFriendUpdateInput, GroupFriendUncheckedUpdateInput>
  }

  /**
   * GroupFriend delete
   */
  export type GroupFriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
    /**
     * Filter which GroupFriend to delete.
     */
    where: GroupFriendWhereUniqueInput
  }

  /**
   * GroupFriend deleteMany
   */
  export type GroupFriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupFriends to delete
     */
    where?: GroupFriendWhereInput
    /**
     * Limit how many GroupFriends to delete.
     */
    limit?: number
  }

  /**
   * GroupFriend without action
   */
  export type GroupFriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFriend
     */
    select?: GroupFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFriend
     */
    omit?: GroupFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFriendInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: string | null
    actorUserId: string | null
    userId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    actorUserId: string | null
    userId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    actorUserId: number
    userId: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    actorUserId?: true
    userId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    actorUserId?: true
    userId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    actorUserId?: true
    userId?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: string
    actorUserId: string
    userId: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    actorUserId?: boolean
    userId?: boolean
    isRead?: boolean
    createdAt?: boolean
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    actorUserId?: boolean
    userId?: boolean
    isRead?: boolean
    createdAt?: boolean
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    actorUserId?: boolean
    userId?: boolean
    isRead?: boolean
    createdAt?: boolean
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    actorUserId?: boolean
    userId?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "actorUserId" | "userId" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorUser?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      actorUser: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      actorUserId: string
      userId: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actorUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly actorUserId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    nickname: 'nickname',
    introduction: 'introduction',
    diaryName: 'diaryName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TodayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    emojiUrl: 'emojiUrl',
    content: 'content',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodayScalarFieldEnum = (typeof TodayScalarFieldEnum)[keyof typeof TodayScalarFieldEnum]


  export const TodayTagScalarFieldEnum: {
    id: 'id',
    todayId: 'todayId',
    tagId: 'tagId'
  };

  export type TodayTagScalarFieldEnum = (typeof TodayTagScalarFieldEnum)[keyof typeof TodayTagScalarFieldEnum]


  export const TodayMentionUserScalarFieldEnum: {
    id: 'id',
    todayId: 'todayId',
    mentionedUserId: 'mentionedUserId'
  };

  export type TodayMentionUserScalarFieldEnum = (typeof TodayMentionUserScalarFieldEnum)[keyof typeof TodayMentionUserScalarFieldEnum]


  export const TodayVisibleUserScalarFieldEnum: {
    id: 'id',
    todayId: 'todayId',
    visibleUserId: 'visibleUserId'
  };

  export type TodayVisibleUserScalarFieldEnum = (typeof TodayVisibleUserScalarFieldEnum)[keyof typeof TodayVisibleUserScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    todayId: 'todayId',
    content: 'content',
    parentCommentId: 'parentCommentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    todayId: 'todayId',
    emojiUrl: 'emojiUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const FriendsGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type FriendsGroupScalarFieldEnum = (typeof FriendsGroupScalarFieldEnum)[keyof typeof FriendsGroupScalarFieldEnum]


  export const GroupFriendScalarFieldEnum: {
    id: 'id',
    friendsGroupId: 'friendsGroupId',
    friendId: 'friendId'
  };

  export type GroupFriendScalarFieldEnum = (typeof GroupFriendScalarFieldEnum)[keyof typeof GroupFriendScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    actorUserId: 'actorUserId',
    userId: 'userId',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    introduction?: StringNullableFilter<"User"> | string | null
    diaryName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    todays?: TodayListRelationFilter
    tags?: TagListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    friendshipsAsUser1?: FriendshipListRelationFilter
    friendshipsAsUser2?: FriendshipListRelationFilter
    friendsGroups?: FriendsGroupListRelationFilter
    notifications?: NotificationListRelationFilter
    actorNotifications?: NotificationListRelationFilter
    groupFriends?: GroupFriendListRelationFilter
    todayMentionedUsers?: TodayMentionUserListRelationFilter
    todayVisibleUsers?: TodayVisibleUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    nickname?: SortOrder
    introduction?: SortOrderInput | SortOrder
    diaryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    todays?: TodayOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    friendshipsAsUser1?: FriendshipOrderByRelationAggregateInput
    friendshipsAsUser2?: FriendshipOrderByRelationAggregateInput
    friendsGroups?: FriendsGroupOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    actorNotifications?: NotificationOrderByRelationAggregateInput
    groupFriends?: GroupFriendOrderByRelationAggregateInput
    todayMentionedUsers?: TodayMentionUserOrderByRelationAggregateInput
    todayVisibleUsers?: TodayVisibleUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    introduction?: StringNullableFilter<"User"> | string | null
    diaryName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    todays?: TodayListRelationFilter
    tags?: TagListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    friendshipsAsUser1?: FriendshipListRelationFilter
    friendshipsAsUser2?: FriendshipListRelationFilter
    friendsGroups?: FriendsGroupListRelationFilter
    notifications?: NotificationListRelationFilter
    actorNotifications?: NotificationListRelationFilter
    groupFriends?: GroupFriendListRelationFilter
    todayMentionedUsers?: TodayMentionUserListRelationFilter
    todayVisibleUsers?: TodayVisibleUserListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    nickname?: SortOrder
    introduction?: SortOrderInput | SortOrder
    diaryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringWithAggregatesFilter<"User"> | string
    introduction?: StringNullableWithAggregatesFilter<"User"> | string | null
    diaryName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TodayWhereInput = {
    AND?: TodayWhereInput | TodayWhereInput[]
    OR?: TodayWhereInput[]
    NOT?: TodayWhereInput | TodayWhereInput[]
    id?: StringFilter<"Today"> | string
    userId?: StringFilter<"Today"> | string
    title?: StringFilter<"Today"> | string
    emojiUrl?: StringFilter<"Today"> | string
    content?: StringFilter<"Today"> | string
    date?: DateTimeFilter<"Today"> | Date | string
    createdAt?: DateTimeFilter<"Today"> | Date | string
    updatedAt?: DateTimeFilter<"Today"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    todayTags?: TodayTagListRelationFilter
    todayMentionedUsers?: TodayMentionUserListRelationFilter
    todayVisibleUsers?: TodayVisibleUserListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
  }

  export type TodayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    emojiUrl?: SortOrder
    content?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    todayTags?: TodayTagOrderByRelationAggregateInput
    todayMentionedUsers?: TodayMentionUserOrderByRelationAggregateInput
    todayVisibleUsers?: TodayVisibleUserOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
  }

  export type TodayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodayWhereInput | TodayWhereInput[]
    OR?: TodayWhereInput[]
    NOT?: TodayWhereInput | TodayWhereInput[]
    userId?: StringFilter<"Today"> | string
    title?: StringFilter<"Today"> | string
    emojiUrl?: StringFilter<"Today"> | string
    content?: StringFilter<"Today"> | string
    date?: DateTimeFilter<"Today"> | Date | string
    createdAt?: DateTimeFilter<"Today"> | Date | string
    updatedAt?: DateTimeFilter<"Today"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    todayTags?: TodayTagListRelationFilter
    todayMentionedUsers?: TodayMentionUserListRelationFilter
    todayVisibleUsers?: TodayVisibleUserListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
  }, "id">

  export type TodayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    emojiUrl?: SortOrder
    content?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodayCountOrderByAggregateInput
    _max?: TodayMaxOrderByAggregateInput
    _min?: TodayMinOrderByAggregateInput
  }

  export type TodayScalarWhereWithAggregatesInput = {
    AND?: TodayScalarWhereWithAggregatesInput | TodayScalarWhereWithAggregatesInput[]
    OR?: TodayScalarWhereWithAggregatesInput[]
    NOT?: TodayScalarWhereWithAggregatesInput | TodayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Today"> | string
    userId?: StringWithAggregatesFilter<"Today"> | string
    title?: StringWithAggregatesFilter<"Today"> | string
    emojiUrl?: StringWithAggregatesFilter<"Today"> | string
    content?: StringWithAggregatesFilter<"Today"> | string
    date?: DateTimeWithAggregatesFilter<"Today"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Today"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Today"> | Date | string
  }

  export type TodayTagWhereInput = {
    AND?: TodayTagWhereInput | TodayTagWhereInput[]
    OR?: TodayTagWhereInput[]
    NOT?: TodayTagWhereInput | TodayTagWhereInput[]
    id?: StringFilter<"TodayTag"> | string
    todayId?: StringFilter<"TodayTag"> | string
    tagId?: StringFilter<"TodayTag"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TodayTagOrderByWithRelationInput = {
    id?: SortOrder
    todayId?: SortOrder
    tagId?: SortOrder
    today?: TodayOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TodayTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodayTagWhereInput | TodayTagWhereInput[]
    OR?: TodayTagWhereInput[]
    NOT?: TodayTagWhereInput | TodayTagWhereInput[]
    todayId?: StringFilter<"TodayTag"> | string
    tagId?: StringFilter<"TodayTag"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id">

  export type TodayTagOrderByWithAggregationInput = {
    id?: SortOrder
    todayId?: SortOrder
    tagId?: SortOrder
    _count?: TodayTagCountOrderByAggregateInput
    _max?: TodayTagMaxOrderByAggregateInput
    _min?: TodayTagMinOrderByAggregateInput
  }

  export type TodayTagScalarWhereWithAggregatesInput = {
    AND?: TodayTagScalarWhereWithAggregatesInput | TodayTagScalarWhereWithAggregatesInput[]
    OR?: TodayTagScalarWhereWithAggregatesInput[]
    NOT?: TodayTagScalarWhereWithAggregatesInput | TodayTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TodayTag"> | string
    todayId?: StringWithAggregatesFilter<"TodayTag"> | string
    tagId?: StringWithAggregatesFilter<"TodayTag"> | string
  }

  export type TodayMentionUserWhereInput = {
    AND?: TodayMentionUserWhereInput | TodayMentionUserWhereInput[]
    OR?: TodayMentionUserWhereInput[]
    NOT?: TodayMentionUserWhereInput | TodayMentionUserWhereInput[]
    id?: StringFilter<"TodayMentionUser"> | string
    todayId?: StringFilter<"TodayMentionUser"> | string
    mentionedUserId?: StringFilter<"TodayMentionUser"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    mentionedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodayMentionUserOrderByWithRelationInput = {
    id?: SortOrder
    todayId?: SortOrder
    mentionedUserId?: SortOrder
    today?: TodayOrderByWithRelationInput
    mentionedUser?: UserOrderByWithRelationInput
  }

  export type TodayMentionUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodayMentionUserWhereInput | TodayMentionUserWhereInput[]
    OR?: TodayMentionUserWhereInput[]
    NOT?: TodayMentionUserWhereInput | TodayMentionUserWhereInput[]
    todayId?: StringFilter<"TodayMentionUser"> | string
    mentionedUserId?: StringFilter<"TodayMentionUser"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    mentionedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TodayMentionUserOrderByWithAggregationInput = {
    id?: SortOrder
    todayId?: SortOrder
    mentionedUserId?: SortOrder
    _count?: TodayMentionUserCountOrderByAggregateInput
    _max?: TodayMentionUserMaxOrderByAggregateInput
    _min?: TodayMentionUserMinOrderByAggregateInput
  }

  export type TodayMentionUserScalarWhereWithAggregatesInput = {
    AND?: TodayMentionUserScalarWhereWithAggregatesInput | TodayMentionUserScalarWhereWithAggregatesInput[]
    OR?: TodayMentionUserScalarWhereWithAggregatesInput[]
    NOT?: TodayMentionUserScalarWhereWithAggregatesInput | TodayMentionUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TodayMentionUser"> | string
    todayId?: StringWithAggregatesFilter<"TodayMentionUser"> | string
    mentionedUserId?: StringWithAggregatesFilter<"TodayMentionUser"> | string
  }

  export type TodayVisibleUserWhereInput = {
    AND?: TodayVisibleUserWhereInput | TodayVisibleUserWhereInput[]
    OR?: TodayVisibleUserWhereInput[]
    NOT?: TodayVisibleUserWhereInput | TodayVisibleUserWhereInput[]
    id?: StringFilter<"TodayVisibleUser"> | string
    todayId?: StringFilter<"TodayVisibleUser"> | string
    visibleUserId?: StringFilter<"TodayVisibleUser"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    visibleUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodayVisibleUserOrderByWithRelationInput = {
    id?: SortOrder
    todayId?: SortOrder
    visibleUserId?: SortOrder
    today?: TodayOrderByWithRelationInput
    visibleUser?: UserOrderByWithRelationInput
  }

  export type TodayVisibleUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodayVisibleUserWhereInput | TodayVisibleUserWhereInput[]
    OR?: TodayVisibleUserWhereInput[]
    NOT?: TodayVisibleUserWhereInput | TodayVisibleUserWhereInput[]
    todayId?: StringFilter<"TodayVisibleUser"> | string
    visibleUserId?: StringFilter<"TodayVisibleUser"> | string
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    visibleUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TodayVisibleUserOrderByWithAggregationInput = {
    id?: SortOrder
    todayId?: SortOrder
    visibleUserId?: SortOrder
    _count?: TodayVisibleUserCountOrderByAggregateInput
    _max?: TodayVisibleUserMaxOrderByAggregateInput
    _min?: TodayVisibleUserMinOrderByAggregateInput
  }

  export type TodayVisibleUserScalarWhereWithAggregatesInput = {
    AND?: TodayVisibleUserScalarWhereWithAggregatesInput | TodayVisibleUserScalarWhereWithAggregatesInput[]
    OR?: TodayVisibleUserScalarWhereWithAggregatesInput[]
    NOT?: TodayVisibleUserScalarWhereWithAggregatesInput | TodayVisibleUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TodayVisibleUser"> | string
    todayId?: StringWithAggregatesFilter<"TodayVisibleUser"> | string
    visibleUserId?: StringWithAggregatesFilter<"TodayVisibleUser"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    todayTags?: TodayTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    todayTags?: TodayTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    userId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    todayTags?: TodayTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    userId?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    todayId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    childComments?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    today?: TodayOrderByWithRelationInput
    parentComment?: CommentOrderByWithRelationInput
    childComments?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: StringFilter<"Comment"> | string
    todayId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    childComments?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    todayId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    parentCommentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    todayId?: StringFilter<"Reaction"> | string
    emojiUrl?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    emojiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    today?: TodayOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    userId?: StringFilter<"Reaction"> | string
    todayId?: StringFilter<"Reaction"> | string
    emojiUrl?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    today?: XOR<TodayScalarRelationFilter, TodayWhereInput>
  }, "id">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    emojiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    userId?: StringWithAggregatesFilter<"Reaction"> | string
    todayId?: StringWithAggregatesFilter<"Reaction"> | string
    emojiUrl?: StringWithAggregatesFilter<"Reaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user1Id_user2Id?: FriendshipUser1IdUser2IdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user1Id_user2Id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    user1Id?: StringWithAggregatesFilter<"Friendship"> | string
    user2Id?: StringWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type FriendsGroupWhereInput = {
    AND?: FriendsGroupWhereInput | FriendsGroupWhereInput[]
    OR?: FriendsGroupWhereInput[]
    NOT?: FriendsGroupWhereInput | FriendsGroupWhereInput[]
    id?: StringFilter<"FriendsGroup"> | string
    name?: StringFilter<"FriendsGroup"> | string
    userId?: StringFilter<"FriendsGroup"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupFriends?: GroupFriendListRelationFilter
  }

  export type FriendsGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    groupFriends?: GroupFriendOrderByRelationAggregateInput
  }

  export type FriendsGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FriendsGroupWhereInput | FriendsGroupWhereInput[]
    OR?: FriendsGroupWhereInput[]
    NOT?: FriendsGroupWhereInput | FriendsGroupWhereInput[]
    name?: StringFilter<"FriendsGroup"> | string
    userId?: StringFilter<"FriendsGroup"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupFriends?: GroupFriendListRelationFilter
  }, "id">

  export type FriendsGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: FriendsGroupCountOrderByAggregateInput
    _max?: FriendsGroupMaxOrderByAggregateInput
    _min?: FriendsGroupMinOrderByAggregateInput
  }

  export type FriendsGroupScalarWhereWithAggregatesInput = {
    AND?: FriendsGroupScalarWhereWithAggregatesInput | FriendsGroupScalarWhereWithAggregatesInput[]
    OR?: FriendsGroupScalarWhereWithAggregatesInput[]
    NOT?: FriendsGroupScalarWhereWithAggregatesInput | FriendsGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FriendsGroup"> | string
    name?: StringWithAggregatesFilter<"FriendsGroup"> | string
    userId?: StringWithAggregatesFilter<"FriendsGroup"> | string
  }

  export type GroupFriendWhereInput = {
    AND?: GroupFriendWhereInput | GroupFriendWhereInput[]
    OR?: GroupFriendWhereInput[]
    NOT?: GroupFriendWhereInput | GroupFriendWhereInput[]
    id?: StringFilter<"GroupFriend"> | string
    friendsGroupId?: StringFilter<"GroupFriend"> | string
    friendId?: StringFilter<"GroupFriend"> | string
    friendsGroup?: XOR<FriendsGroupScalarRelationFilter, FriendsGroupWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupFriendOrderByWithRelationInput = {
    id?: SortOrder
    friendsGroupId?: SortOrder
    friendId?: SortOrder
    friendsGroup?: FriendsGroupOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type GroupFriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupFriendWhereInput | GroupFriendWhereInput[]
    OR?: GroupFriendWhereInput[]
    NOT?: GroupFriendWhereInput | GroupFriendWhereInput[]
    friendsGroupId?: StringFilter<"GroupFriend"> | string
    friendId?: StringFilter<"GroupFriend"> | string
    friendsGroup?: XOR<FriendsGroupScalarRelationFilter, FriendsGroupWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GroupFriendOrderByWithAggregationInput = {
    id?: SortOrder
    friendsGroupId?: SortOrder
    friendId?: SortOrder
    _count?: GroupFriendCountOrderByAggregateInput
    _max?: GroupFriendMaxOrderByAggregateInput
    _min?: GroupFriendMinOrderByAggregateInput
  }

  export type GroupFriendScalarWhereWithAggregatesInput = {
    AND?: GroupFriendScalarWhereWithAggregatesInput | GroupFriendScalarWhereWithAggregatesInput[]
    OR?: GroupFriendScalarWhereWithAggregatesInput[]
    NOT?: GroupFriendScalarWhereWithAggregatesInput | GroupFriendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupFriend"> | string
    friendsGroupId?: StringWithAggregatesFilter<"GroupFriend"> | string
    friendId?: StringWithAggregatesFilter<"GroupFriend"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    actorUserId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    actorUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    actorUserId?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    actorUser?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: StringFilter<"Notification"> | string
    actorUserId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    actorUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    actorUserId?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    actorUserId?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodayCreateInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type TodayCreateManyInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodayTagCreateInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayTagsInput
    tag: TagCreateNestedOneWithoutTodayTagsInput
  }

  export type TodayTagUncheckedCreateInput = {
    id?: string
    todayId: string
    tagId: string
  }

  export type TodayTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTodayTagsNestedInput
  }

  export type TodayTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayTagCreateManyInput = {
    id?: string
    todayId: string
    tagId: string
  }

  export type TodayTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TodayTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserCreateInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayMentionedUsersInput
    mentionedUser: UserCreateNestedOneWithoutTodayMentionedUsersInput
  }

  export type TodayMentionUserUncheckedCreateInput = {
    id?: string
    todayId: string
    mentionedUserId: string
  }

  export type TodayMentionUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayMentionedUsersNestedInput
    mentionedUser?: UserUpdateOneRequiredWithoutTodayMentionedUsersNestedInput
  }

  export type TodayMentionUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    mentionedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserCreateManyInput = {
    id?: string
    todayId: string
    mentionedUserId: string
  }

  export type TodayMentionUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    mentionedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserCreateInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayVisibleUsersInput
    visibleUser: UserCreateNestedOneWithoutTodayVisibleUsersInput
  }

  export type TodayVisibleUserUncheckedCreateInput = {
    id?: string
    todayId: string
    visibleUserId: string
  }

  export type TodayVisibleUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayVisibleUsersNestedInput
    visibleUser?: UserUpdateOneRequiredWithoutTodayVisibleUsersNestedInput
  }

  export type TodayVisibleUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    visibleUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserCreateManyInput = {
    id?: string
    todayId: string
    visibleUserId: string
  }

  export type TodayVisibleUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    visibleUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
    todayTags?: TodayTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    todayTags?: TodayTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    userId: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    today: TodayCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutChildCommentsInput
    childComments?: CommentCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    userId: string
    todayId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    today?: TodayUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutChildCommentsNestedInput
    childComments?: CommentUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childComments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    userId: string
    todayId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateInput = {
    id?: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    today: TodayCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    userId: string
    todayId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    today?: TodayUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    userId: string
    todayId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutFriendshipsAsUser1Input
    user2: UserCreateNestedOneWithoutFriendshipsAsUser2Input
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsGroupCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutFriendsGroupsInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendsGroupInput
  }

  export type FriendsGroupUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendsGroupInput
  }

  export type FriendsGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsGroupsNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendsGroupNestedInput
  }

  export type FriendsGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendsGroupNestedInput
  }

  export type FriendsGroupCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type FriendsGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FriendsGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupFriendCreateInput = {
    id?: string
    friendsGroup: FriendsGroupCreateNestedOneWithoutGroupFriendsInput
    friend: UserCreateNestedOneWithoutGroupFriendsInput
  }

  export type GroupFriendUncheckedCreateInput = {
    id?: string
    friendsGroupId: string
    friendId: string
  }

  export type GroupFriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroup?: FriendsGroupUpdateOneRequiredWithoutGroupFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutGroupFriendsNestedInput
  }

  export type GroupFriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroupId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupFriendCreateManyInput = {
    id?: string
    friendsGroupId: string
    friendId: string
  }

  export type GroupFriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GroupFriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroupId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    actorUser: UserCreateNestedOneWithoutActorNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: string
    actorUserId: string
    userId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUser?: UserUpdateOneRequiredWithoutActorNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: string
    actorUserId: string
    userId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TodayListRelationFilter = {
    every?: TodayWhereInput
    some?: TodayWhereInput
    none?: TodayWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type FriendsGroupListRelationFilter = {
    every?: FriendsGroupWhereInput
    some?: FriendsGroupWhereInput
    none?: FriendsGroupWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type GroupFriendListRelationFilter = {
    every?: GroupFriendWhereInput
    some?: GroupFriendWhereInput
    none?: GroupFriendWhereInput
  }

  export type TodayMentionUserListRelationFilter = {
    every?: TodayMentionUserWhereInput
    some?: TodayMentionUserWhereInput
    none?: TodayMentionUserWhereInput
  }

  export type TodayVisibleUserListRelationFilter = {
    every?: TodayVisibleUserWhereInput
    some?: TodayVisibleUserWhereInput
    none?: TodayVisibleUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TodayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendsGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupFriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodayMentionUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodayVisibleUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    diaryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    diaryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    diaryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TodayTagListRelationFilter = {
    every?: TodayTagWhereInput
    some?: TodayTagWhereInput
    none?: TodayTagWhereInput
  }

  export type TodayTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    emojiUrl?: SortOrder
    content?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    emojiUrl?: SortOrder
    content?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    emojiUrl?: SortOrder
    content?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodayScalarRelationFilter = {
    is?: TodayWhereInput
    isNot?: TodayWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TodayTagCountOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    tagId?: SortOrder
  }

  export type TodayTagMaxOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    tagId?: SortOrder
  }

  export type TodayTagMinOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    tagId?: SortOrder
  }

  export type TodayMentionUserCountOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    mentionedUserId?: SortOrder
  }

  export type TodayMentionUserMaxOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    mentionedUserId?: SortOrder
  }

  export type TodayMentionUserMinOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    mentionedUserId?: SortOrder
  }

  export type TodayVisibleUserCountOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    visibleUserId?: SortOrder
  }

  export type TodayVisibleUserMaxOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    visibleUserId?: SortOrder
  }

  export type TodayVisibleUserMinOrderByAggregateInput = {
    id?: SortOrder
    todayId?: SortOrder
    visibleUserId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    emojiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    emojiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    todayId?: SortOrder
    emojiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipUser1IdUser2IdCompoundUniqueInput = {
    user1Id: string
    user2Id: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendsGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type FriendsGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type FriendsGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type FriendsGroupScalarRelationFilter = {
    is?: FriendsGroupWhereInput
    isNot?: FriendsGroupWhereInput
  }

  export type GroupFriendCountOrderByAggregateInput = {
    id?: SortOrder
    friendsGroupId?: SortOrder
    friendId?: SortOrder
  }

  export type GroupFriendMaxOrderByAggregateInput = {
    id?: SortOrder
    friendsGroupId?: SortOrder
    friendId?: SortOrder
  }

  export type GroupFriendMinOrderByAggregateInput = {
    id?: SortOrder
    friendsGroupId?: SortOrder
    friendId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actorUserId?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actorUserId?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    actorUserId?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TodayCreateNestedManyWithoutUserInput = {
    create?: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput> | TodayCreateWithoutUserInput[] | TodayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayCreateOrConnectWithoutUserInput | TodayCreateOrConnectWithoutUserInput[]
    createMany?: TodayCreateManyUserInputEnvelope
    connect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendsGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput> | FriendsGroupCreateWithoutUserInput[] | FriendsGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutUserInput | FriendsGroupCreateOrConnectWithoutUserInput[]
    createMany?: FriendsGroupCreateManyUserInputEnvelope
    connect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutActorUserInput = {
    create?: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput> | NotificationCreateWithoutActorUserInput[] | NotificationUncheckedCreateWithoutActorUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutActorUserInput | NotificationCreateOrConnectWithoutActorUserInput[]
    createMany?: NotificationCreateManyActorUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GroupFriendCreateNestedManyWithoutFriendInput = {
    create?: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput> | GroupFriendCreateWithoutFriendInput[] | GroupFriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendInput | GroupFriendCreateOrConnectWithoutFriendInput[]
    createMany?: GroupFriendCreateManyFriendInputEnvelope
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
  }

  export type TodayMentionUserCreateNestedManyWithoutMentionedUserInput = {
    create?: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput> | TodayMentionUserCreateWithoutMentionedUserInput[] | TodayMentionUserUncheckedCreateWithoutMentionedUserInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutMentionedUserInput | TodayMentionUserCreateOrConnectWithoutMentionedUserInput[]
    createMany?: TodayMentionUserCreateManyMentionedUserInputEnvelope
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
  }

  export type TodayVisibleUserCreateNestedManyWithoutVisibleUserInput = {
    create?: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput> | TodayVisibleUserCreateWithoutVisibleUserInput[] | TodayVisibleUserUncheckedCreateWithoutVisibleUserInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutVisibleUserInput | TodayVisibleUserCreateOrConnectWithoutVisibleUserInput[]
    createMany?: TodayVisibleUserCreateManyVisibleUserInputEnvelope
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
  }

  export type TodayUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput> | TodayCreateWithoutUserInput[] | TodayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayCreateOrConnectWithoutUserInput | TodayCreateOrConnectWithoutUserInput[]
    createMany?: TodayCreateManyUserInputEnvelope
    connect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendsGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput> | FriendsGroupCreateWithoutUserInput[] | FriendsGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutUserInput | FriendsGroupCreateOrConnectWithoutUserInput[]
    createMany?: FriendsGroupCreateManyUserInputEnvelope
    connect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutActorUserInput = {
    create?: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput> | NotificationCreateWithoutActorUserInput[] | NotificationUncheckedCreateWithoutActorUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutActorUserInput | NotificationCreateOrConnectWithoutActorUserInput[]
    createMany?: NotificationCreateManyActorUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GroupFriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput> | GroupFriendCreateWithoutFriendInput[] | GroupFriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendInput | GroupFriendCreateOrConnectWithoutFriendInput[]
    createMany?: GroupFriendCreateManyFriendInputEnvelope
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
  }

  export type TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput = {
    create?: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput> | TodayMentionUserCreateWithoutMentionedUserInput[] | TodayMentionUserUncheckedCreateWithoutMentionedUserInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutMentionedUserInput | TodayMentionUserCreateOrConnectWithoutMentionedUserInput[]
    createMany?: TodayMentionUserCreateManyMentionedUserInputEnvelope
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
  }

  export type TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput = {
    create?: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput> | TodayVisibleUserCreateWithoutVisibleUserInput[] | TodayVisibleUserUncheckedCreateWithoutVisibleUserInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutVisibleUserInput | TodayVisibleUserCreateOrConnectWithoutVisibleUserInput[]
    createMany?: TodayVisibleUserCreateManyVisibleUserInputEnvelope
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TodayUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput> | TodayCreateWithoutUserInput[] | TodayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayCreateOrConnectWithoutUserInput | TodayCreateOrConnectWithoutUserInput[]
    upsert?: TodayUpsertWithWhereUniqueWithoutUserInput | TodayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodayCreateManyUserInputEnvelope
    set?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    disconnect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    delete?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    connect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    update?: TodayUpdateWithWhereUniqueWithoutUserInput | TodayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodayUpdateManyWithWhereWithoutUserInput | TodayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodayScalarWhereInput | TodayScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendsGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput> | FriendsGroupCreateWithoutUserInput[] | FriendsGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutUserInput | FriendsGroupCreateOrConnectWithoutUserInput[]
    upsert?: FriendsGroupUpsertWithWhereUniqueWithoutUserInput | FriendsGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsGroupCreateManyUserInputEnvelope
    set?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    disconnect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    delete?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    connect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    update?: FriendsGroupUpdateWithWhereUniqueWithoutUserInput | FriendsGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsGroupUpdateManyWithWhereWithoutUserInput | FriendsGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsGroupScalarWhereInput | FriendsGroupScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutActorUserNestedInput = {
    create?: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput> | NotificationCreateWithoutActorUserInput[] | NotificationUncheckedCreateWithoutActorUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutActorUserInput | NotificationCreateOrConnectWithoutActorUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutActorUserInput | NotificationUpsertWithWhereUniqueWithoutActorUserInput[]
    createMany?: NotificationCreateManyActorUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutActorUserInput | NotificationUpdateWithWhereUniqueWithoutActorUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutActorUserInput | NotificationUpdateManyWithWhereWithoutActorUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GroupFriendUpdateManyWithoutFriendNestedInput = {
    create?: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput> | GroupFriendCreateWithoutFriendInput[] | GroupFriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendInput | GroupFriendCreateOrConnectWithoutFriendInput[]
    upsert?: GroupFriendUpsertWithWhereUniqueWithoutFriendInput | GroupFriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: GroupFriendCreateManyFriendInputEnvelope
    set?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    disconnect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    delete?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    update?: GroupFriendUpdateWithWhereUniqueWithoutFriendInput | GroupFriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: GroupFriendUpdateManyWithWhereWithoutFriendInput | GroupFriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
  }

  export type TodayMentionUserUpdateManyWithoutMentionedUserNestedInput = {
    create?: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput> | TodayMentionUserCreateWithoutMentionedUserInput[] | TodayMentionUserUncheckedCreateWithoutMentionedUserInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutMentionedUserInput | TodayMentionUserCreateOrConnectWithoutMentionedUserInput[]
    upsert?: TodayMentionUserUpsertWithWhereUniqueWithoutMentionedUserInput | TodayMentionUserUpsertWithWhereUniqueWithoutMentionedUserInput[]
    createMany?: TodayMentionUserCreateManyMentionedUserInputEnvelope
    set?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    disconnect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    delete?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    update?: TodayMentionUserUpdateWithWhereUniqueWithoutMentionedUserInput | TodayMentionUserUpdateWithWhereUniqueWithoutMentionedUserInput[]
    updateMany?: TodayMentionUserUpdateManyWithWhereWithoutMentionedUserInput | TodayMentionUserUpdateManyWithWhereWithoutMentionedUserInput[]
    deleteMany?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
  }

  export type TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput = {
    create?: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput> | TodayVisibleUserCreateWithoutVisibleUserInput[] | TodayVisibleUserUncheckedCreateWithoutVisibleUserInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutVisibleUserInput | TodayVisibleUserCreateOrConnectWithoutVisibleUserInput[]
    upsert?: TodayVisibleUserUpsertWithWhereUniqueWithoutVisibleUserInput | TodayVisibleUserUpsertWithWhereUniqueWithoutVisibleUserInput[]
    createMany?: TodayVisibleUserCreateManyVisibleUserInputEnvelope
    set?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    disconnect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    delete?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    update?: TodayVisibleUserUpdateWithWhereUniqueWithoutVisibleUserInput | TodayVisibleUserUpdateWithWhereUniqueWithoutVisibleUserInput[]
    updateMany?: TodayVisibleUserUpdateManyWithWhereWithoutVisibleUserInput | TodayVisibleUserUpdateManyWithWhereWithoutVisibleUserInput[]
    deleteMany?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
  }

  export type TodayUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput> | TodayCreateWithoutUserInput[] | TodayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodayCreateOrConnectWithoutUserInput | TodayCreateOrConnectWithoutUserInput[]
    upsert?: TodayUpsertWithWhereUniqueWithoutUserInput | TodayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodayCreateManyUserInputEnvelope
    set?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    disconnect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    delete?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    connect?: TodayWhereUniqueInput | TodayWhereUniqueInput[]
    update?: TodayUpdateWithWhereUniqueWithoutUserInput | TodayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodayUpdateManyWithWhereWithoutUserInput | TodayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodayScalarWhereInput | TodayScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendsGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput> | FriendsGroupCreateWithoutUserInput[] | FriendsGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutUserInput | FriendsGroupCreateOrConnectWithoutUserInput[]
    upsert?: FriendsGroupUpsertWithWhereUniqueWithoutUserInput | FriendsGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsGroupCreateManyUserInputEnvelope
    set?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    disconnect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    delete?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    connect?: FriendsGroupWhereUniqueInput | FriendsGroupWhereUniqueInput[]
    update?: FriendsGroupUpdateWithWhereUniqueWithoutUserInput | FriendsGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsGroupUpdateManyWithWhereWithoutUserInput | FriendsGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsGroupScalarWhereInput | FriendsGroupScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutActorUserNestedInput = {
    create?: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput> | NotificationCreateWithoutActorUserInput[] | NotificationUncheckedCreateWithoutActorUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutActorUserInput | NotificationCreateOrConnectWithoutActorUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutActorUserInput | NotificationUpsertWithWhereUniqueWithoutActorUserInput[]
    createMany?: NotificationCreateManyActorUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutActorUserInput | NotificationUpdateWithWhereUniqueWithoutActorUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutActorUserInput | NotificationUpdateManyWithWhereWithoutActorUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GroupFriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput> | GroupFriendCreateWithoutFriendInput[] | GroupFriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendInput | GroupFriendCreateOrConnectWithoutFriendInput[]
    upsert?: GroupFriendUpsertWithWhereUniqueWithoutFriendInput | GroupFriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: GroupFriendCreateManyFriendInputEnvelope
    set?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    disconnect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    delete?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    update?: GroupFriendUpdateWithWhereUniqueWithoutFriendInput | GroupFriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: GroupFriendUpdateManyWithWhereWithoutFriendInput | GroupFriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
  }

  export type TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput = {
    create?: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput> | TodayMentionUserCreateWithoutMentionedUserInput[] | TodayMentionUserUncheckedCreateWithoutMentionedUserInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutMentionedUserInput | TodayMentionUserCreateOrConnectWithoutMentionedUserInput[]
    upsert?: TodayMentionUserUpsertWithWhereUniqueWithoutMentionedUserInput | TodayMentionUserUpsertWithWhereUniqueWithoutMentionedUserInput[]
    createMany?: TodayMentionUserCreateManyMentionedUserInputEnvelope
    set?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    disconnect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    delete?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    update?: TodayMentionUserUpdateWithWhereUniqueWithoutMentionedUserInput | TodayMentionUserUpdateWithWhereUniqueWithoutMentionedUserInput[]
    updateMany?: TodayMentionUserUpdateManyWithWhereWithoutMentionedUserInput | TodayMentionUserUpdateManyWithWhereWithoutMentionedUserInput[]
    deleteMany?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
  }

  export type TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput = {
    create?: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput> | TodayVisibleUserCreateWithoutVisibleUserInput[] | TodayVisibleUserUncheckedCreateWithoutVisibleUserInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutVisibleUserInput | TodayVisibleUserCreateOrConnectWithoutVisibleUserInput[]
    upsert?: TodayVisibleUserUpsertWithWhereUniqueWithoutVisibleUserInput | TodayVisibleUserUpsertWithWhereUniqueWithoutVisibleUserInput[]
    createMany?: TodayVisibleUserCreateManyVisibleUserInputEnvelope
    set?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    disconnect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    delete?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    update?: TodayVisibleUserUpdateWithWhereUniqueWithoutVisibleUserInput | TodayVisibleUserUpdateWithWhereUniqueWithoutVisibleUserInput[]
    updateMany?: TodayVisibleUserUpdateManyWithWhereWithoutVisibleUserInput | TodayVisibleUserUpdateManyWithWhereWithoutVisibleUserInput[]
    deleteMany?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTodaysInput = {
    create?: XOR<UserCreateWithoutTodaysInput, UserUncheckedCreateWithoutTodaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodaysInput
    connect?: UserWhereUniqueInput
  }

  export type TodayTagCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput> | TodayTagCreateWithoutTodayInput[] | TodayTagUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTodayInput | TodayTagCreateOrConnectWithoutTodayInput[]
    createMany?: TodayTagCreateManyTodayInputEnvelope
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
  }

  export type TodayMentionUserCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput> | TodayMentionUserCreateWithoutTodayInput[] | TodayMentionUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutTodayInput | TodayMentionUserCreateOrConnectWithoutTodayInput[]
    createMany?: TodayMentionUserCreateManyTodayInputEnvelope
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
  }

  export type TodayVisibleUserCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput> | TodayVisibleUserCreateWithoutTodayInput[] | TodayVisibleUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutTodayInput | TodayVisibleUserCreateOrConnectWithoutTodayInput[]
    createMany?: TodayVisibleUserCreateManyTodayInputEnvelope
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutTodayInput = {
    create?: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput> | CommentCreateWithoutTodayInput[] | CommentUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTodayInput | CommentCreateOrConnectWithoutTodayInput[]
    createMany?: CommentCreateManyTodayInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutTodayInput = {
    create?: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput> | ReactionCreateWithoutTodayInput[] | ReactionUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutTodayInput | ReactionCreateOrConnectWithoutTodayInput[]
    createMany?: ReactionCreateManyTodayInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type TodayTagUncheckedCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput> | TodayTagCreateWithoutTodayInput[] | TodayTagUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTodayInput | TodayTagCreateOrConnectWithoutTodayInput[]
    createMany?: TodayTagCreateManyTodayInputEnvelope
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
  }

  export type TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput> | TodayMentionUserCreateWithoutTodayInput[] | TodayMentionUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutTodayInput | TodayMentionUserCreateOrConnectWithoutTodayInput[]
    createMany?: TodayMentionUserCreateManyTodayInputEnvelope
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
  }

  export type TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput = {
    create?: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput> | TodayVisibleUserCreateWithoutTodayInput[] | TodayVisibleUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutTodayInput | TodayVisibleUserCreateOrConnectWithoutTodayInput[]
    createMany?: TodayVisibleUserCreateManyTodayInputEnvelope
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTodayInput = {
    create?: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput> | CommentCreateWithoutTodayInput[] | CommentUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTodayInput | CommentCreateOrConnectWithoutTodayInput[]
    createMany?: CommentCreateManyTodayInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutTodayInput = {
    create?: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput> | ReactionCreateWithoutTodayInput[] | ReactionUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutTodayInput | ReactionCreateOrConnectWithoutTodayInput[]
    createMany?: ReactionCreateManyTodayInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTodaysNestedInput = {
    create?: XOR<UserCreateWithoutTodaysInput, UserUncheckedCreateWithoutTodaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodaysInput
    upsert?: UserUpsertWithoutTodaysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodaysInput, UserUpdateWithoutTodaysInput>, UserUncheckedUpdateWithoutTodaysInput>
  }

  export type TodayTagUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput> | TodayTagCreateWithoutTodayInput[] | TodayTagUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTodayInput | TodayTagCreateOrConnectWithoutTodayInput[]
    upsert?: TodayTagUpsertWithWhereUniqueWithoutTodayInput | TodayTagUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayTagCreateManyTodayInputEnvelope
    set?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    disconnect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    delete?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    update?: TodayTagUpdateWithWhereUniqueWithoutTodayInput | TodayTagUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayTagUpdateManyWithWhereWithoutTodayInput | TodayTagUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
  }

  export type TodayMentionUserUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput> | TodayMentionUserCreateWithoutTodayInput[] | TodayMentionUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutTodayInput | TodayMentionUserCreateOrConnectWithoutTodayInput[]
    upsert?: TodayMentionUserUpsertWithWhereUniqueWithoutTodayInput | TodayMentionUserUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayMentionUserCreateManyTodayInputEnvelope
    set?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    disconnect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    delete?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    update?: TodayMentionUserUpdateWithWhereUniqueWithoutTodayInput | TodayMentionUserUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayMentionUserUpdateManyWithWhereWithoutTodayInput | TodayMentionUserUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
  }

  export type TodayVisibleUserUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput> | TodayVisibleUserCreateWithoutTodayInput[] | TodayVisibleUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutTodayInput | TodayVisibleUserCreateOrConnectWithoutTodayInput[]
    upsert?: TodayVisibleUserUpsertWithWhereUniqueWithoutTodayInput | TodayVisibleUserUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayVisibleUserCreateManyTodayInputEnvelope
    set?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    disconnect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    delete?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    update?: TodayVisibleUserUpdateWithWhereUniqueWithoutTodayInput | TodayVisibleUserUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayVisibleUserUpdateManyWithWhereWithoutTodayInput | TodayVisibleUserUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutTodayNestedInput = {
    create?: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput> | CommentCreateWithoutTodayInput[] | CommentUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTodayInput | CommentCreateOrConnectWithoutTodayInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTodayInput | CommentUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: CommentCreateManyTodayInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTodayInput | CommentUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTodayInput | CommentUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutTodayNestedInput = {
    create?: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput> | ReactionCreateWithoutTodayInput[] | ReactionUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutTodayInput | ReactionCreateOrConnectWithoutTodayInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutTodayInput | ReactionUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: ReactionCreateManyTodayInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutTodayInput | ReactionUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutTodayInput | ReactionUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type TodayTagUncheckedUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput> | TodayTagCreateWithoutTodayInput[] | TodayTagUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTodayInput | TodayTagCreateOrConnectWithoutTodayInput[]
    upsert?: TodayTagUpsertWithWhereUniqueWithoutTodayInput | TodayTagUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayTagCreateManyTodayInputEnvelope
    set?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    disconnect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    delete?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    update?: TodayTagUpdateWithWhereUniqueWithoutTodayInput | TodayTagUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayTagUpdateManyWithWhereWithoutTodayInput | TodayTagUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
  }

  export type TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput> | TodayMentionUserCreateWithoutTodayInput[] | TodayMentionUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayMentionUserCreateOrConnectWithoutTodayInput | TodayMentionUserCreateOrConnectWithoutTodayInput[]
    upsert?: TodayMentionUserUpsertWithWhereUniqueWithoutTodayInput | TodayMentionUserUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayMentionUserCreateManyTodayInputEnvelope
    set?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    disconnect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    delete?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    connect?: TodayMentionUserWhereUniqueInput | TodayMentionUserWhereUniqueInput[]
    update?: TodayMentionUserUpdateWithWhereUniqueWithoutTodayInput | TodayMentionUserUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayMentionUserUpdateManyWithWhereWithoutTodayInput | TodayMentionUserUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
  }

  export type TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput = {
    create?: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput> | TodayVisibleUserCreateWithoutTodayInput[] | TodayVisibleUserUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: TodayVisibleUserCreateOrConnectWithoutTodayInput | TodayVisibleUserCreateOrConnectWithoutTodayInput[]
    upsert?: TodayVisibleUserUpsertWithWhereUniqueWithoutTodayInput | TodayVisibleUserUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: TodayVisibleUserCreateManyTodayInputEnvelope
    set?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    disconnect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    delete?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    connect?: TodayVisibleUserWhereUniqueInput | TodayVisibleUserWhereUniqueInput[]
    update?: TodayVisibleUserUpdateWithWhereUniqueWithoutTodayInput | TodayVisibleUserUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: TodayVisibleUserUpdateManyWithWhereWithoutTodayInput | TodayVisibleUserUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTodayNestedInput = {
    create?: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput> | CommentCreateWithoutTodayInput[] | CommentUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTodayInput | CommentCreateOrConnectWithoutTodayInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTodayInput | CommentUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: CommentCreateManyTodayInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTodayInput | CommentUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTodayInput | CommentUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutTodayNestedInput = {
    create?: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput> | ReactionCreateWithoutTodayInput[] | ReactionUncheckedCreateWithoutTodayInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutTodayInput | ReactionCreateOrConnectWithoutTodayInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutTodayInput | ReactionUpsertWithWhereUniqueWithoutTodayInput[]
    createMany?: ReactionCreateManyTodayInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutTodayInput | ReactionUpdateWithWhereUniqueWithoutTodayInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutTodayInput | ReactionUpdateManyWithWhereWithoutTodayInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type TodayCreateNestedOneWithoutTodayTagsInput = {
    create?: XOR<TodayCreateWithoutTodayTagsInput, TodayUncheckedCreateWithoutTodayTagsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayTagsInput
    connect?: TodayWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTodayTagsInput = {
    create?: XOR<TagCreateWithoutTodayTagsInput, TagUncheckedCreateWithoutTodayTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTodayTagsInput
    connect?: TagWhereUniqueInput
  }

  export type TodayUpdateOneRequiredWithoutTodayTagsNestedInput = {
    create?: XOR<TodayCreateWithoutTodayTagsInput, TodayUncheckedCreateWithoutTodayTagsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayTagsInput
    upsert?: TodayUpsertWithoutTodayTagsInput
    connect?: TodayWhereUniqueInput
    update?: XOR<XOR<TodayUpdateToOneWithWhereWithoutTodayTagsInput, TodayUpdateWithoutTodayTagsInput>, TodayUncheckedUpdateWithoutTodayTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTodayTagsNestedInput = {
    create?: XOR<TagCreateWithoutTodayTagsInput, TagUncheckedCreateWithoutTodayTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTodayTagsInput
    upsert?: TagUpsertWithoutTodayTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTodayTagsInput, TagUpdateWithoutTodayTagsInput>, TagUncheckedUpdateWithoutTodayTagsInput>
  }

  export type TodayCreateNestedOneWithoutTodayMentionedUsersInput = {
    create?: XOR<TodayCreateWithoutTodayMentionedUsersInput, TodayUncheckedCreateWithoutTodayMentionedUsersInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayMentionedUsersInput
    connect?: TodayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTodayMentionedUsersInput = {
    create?: XOR<UserCreateWithoutTodayMentionedUsersInput, UserUncheckedCreateWithoutTodayMentionedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayMentionedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type TodayUpdateOneRequiredWithoutTodayMentionedUsersNestedInput = {
    create?: XOR<TodayCreateWithoutTodayMentionedUsersInput, TodayUncheckedCreateWithoutTodayMentionedUsersInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayMentionedUsersInput
    upsert?: TodayUpsertWithoutTodayMentionedUsersInput
    connect?: TodayWhereUniqueInput
    update?: XOR<XOR<TodayUpdateToOneWithWhereWithoutTodayMentionedUsersInput, TodayUpdateWithoutTodayMentionedUsersInput>, TodayUncheckedUpdateWithoutTodayMentionedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutTodayMentionedUsersNestedInput = {
    create?: XOR<UserCreateWithoutTodayMentionedUsersInput, UserUncheckedCreateWithoutTodayMentionedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayMentionedUsersInput
    upsert?: UserUpsertWithoutTodayMentionedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodayMentionedUsersInput, UserUpdateWithoutTodayMentionedUsersInput>, UserUncheckedUpdateWithoutTodayMentionedUsersInput>
  }

  export type TodayCreateNestedOneWithoutTodayVisibleUsersInput = {
    create?: XOR<TodayCreateWithoutTodayVisibleUsersInput, TodayUncheckedCreateWithoutTodayVisibleUsersInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayVisibleUsersInput
    connect?: TodayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTodayVisibleUsersInput = {
    create?: XOR<UserCreateWithoutTodayVisibleUsersInput, UserUncheckedCreateWithoutTodayVisibleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayVisibleUsersInput
    connect?: UserWhereUniqueInput
  }

  export type TodayUpdateOneRequiredWithoutTodayVisibleUsersNestedInput = {
    create?: XOR<TodayCreateWithoutTodayVisibleUsersInput, TodayUncheckedCreateWithoutTodayVisibleUsersInput>
    connectOrCreate?: TodayCreateOrConnectWithoutTodayVisibleUsersInput
    upsert?: TodayUpsertWithoutTodayVisibleUsersInput
    connect?: TodayWhereUniqueInput
    update?: XOR<XOR<TodayUpdateToOneWithWhereWithoutTodayVisibleUsersInput, TodayUpdateWithoutTodayVisibleUsersInput>, TodayUncheckedUpdateWithoutTodayVisibleUsersInput>
  }

  export type UserUpdateOneRequiredWithoutTodayVisibleUsersNestedInput = {
    create?: XOR<UserCreateWithoutTodayVisibleUsersInput, UserUncheckedCreateWithoutTodayVisibleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodayVisibleUsersInput
    upsert?: UserUpsertWithoutTodayVisibleUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodayVisibleUsersInput, UserUpdateWithoutTodayVisibleUsersInput>, UserUncheckedUpdateWithoutTodayVisibleUsersInput>
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type TodayTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput> | TodayTagCreateWithoutTagInput[] | TodayTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTagInput | TodayTagCreateOrConnectWithoutTagInput[]
    createMany?: TodayTagCreateManyTagInputEnvelope
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
  }

  export type TodayTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput> | TodayTagCreateWithoutTagInput[] | TodayTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTagInput | TodayTagCreateOrConnectWithoutTagInput[]
    createMany?: TodayTagCreateManyTagInputEnvelope
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type TodayTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput> | TodayTagCreateWithoutTagInput[] | TodayTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTagInput | TodayTagCreateOrConnectWithoutTagInput[]
    upsert?: TodayTagUpsertWithWhereUniqueWithoutTagInput | TodayTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TodayTagCreateManyTagInputEnvelope
    set?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    disconnect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    delete?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    update?: TodayTagUpdateWithWhereUniqueWithoutTagInput | TodayTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TodayTagUpdateManyWithWhereWithoutTagInput | TodayTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
  }

  export type TodayTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput> | TodayTagCreateWithoutTagInput[] | TodayTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodayTagCreateOrConnectWithoutTagInput | TodayTagCreateOrConnectWithoutTagInput[]
    upsert?: TodayTagUpsertWithWhereUniqueWithoutTagInput | TodayTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TodayTagCreateManyTagInputEnvelope
    set?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    disconnect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    delete?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    connect?: TodayTagWhereUniqueInput | TodayTagWhereUniqueInput[]
    update?: TodayTagUpdateWithWhereUniqueWithoutTagInput | TodayTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TodayTagUpdateManyWithWhereWithoutTagInput | TodayTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TodayCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TodayCreateWithoutCommentsInput, TodayUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutCommentsInput
    connect?: TodayWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutChildCommentsInput = {
    create?: XOR<CommentCreateWithoutChildCommentsInput, CommentUncheckedCreateWithoutChildCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildCommentsInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TodayUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TodayCreateWithoutCommentsInput, TodayUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutCommentsInput
    upsert?: TodayUpsertWithoutCommentsInput
    connect?: TodayWhereUniqueInput
    update?: XOR<XOR<TodayUpdateToOneWithWhereWithoutCommentsInput, TodayUpdateWithoutCommentsInput>, TodayUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutChildCommentsNestedInput = {
    create?: XOR<CommentCreateWithoutChildCommentsInput, CommentUncheckedCreateWithoutChildCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildCommentsInput
    upsert?: CommentUpsertWithoutChildCommentsInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutChildCommentsInput, CommentUpdateWithoutChildCommentsInput>, CommentUncheckedUpdateWithoutChildCommentsInput>
  }

  export type CommentUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentCommentInput | CommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentCommentInput | CommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentCommentInput | CommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentCommentInput | CommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentCommentInput | CommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentCommentInput | CommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type TodayCreateNestedOneWithoutReactionsInput = {
    create?: XOR<TodayCreateWithoutReactionsInput, TodayUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutReactionsInput
    connect?: TodayWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type TodayUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<TodayCreateWithoutReactionsInput, TodayUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: TodayCreateOrConnectWithoutReactionsInput
    upsert?: TodayUpsertWithoutReactionsInput
    connect?: TodayWhereUniqueInput
    update?: XOR<XOR<TodayUpdateToOneWithWhereWithoutReactionsInput, TodayUpdateWithoutReactionsInput>, TodayUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutFriendshipsAsUser1Input = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendshipsAsUser2Input = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser1Input
    upsert?: UserUpsertWithoutFriendshipsAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendshipsAsUser1Input, UserUpdateWithoutFriendshipsAsUser1Input>, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendshipsAsUser2Input
    upsert?: UserUpsertWithoutFriendshipsAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendshipsAsUser2Input, UserUpdateWithoutFriendshipsAsUser2Input>, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
  }

  export type UserCreateNestedOneWithoutFriendsGroupsInput = {
    create?: XOR<UserCreateWithoutFriendsGroupsInput, UserUncheckedCreateWithoutFriendsGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupFriendCreateNestedManyWithoutFriendsGroupInput = {
    create?: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput> | GroupFriendCreateWithoutFriendsGroupInput[] | GroupFriendUncheckedCreateWithoutFriendsGroupInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendsGroupInput | GroupFriendCreateOrConnectWithoutFriendsGroupInput[]
    createMany?: GroupFriendCreateManyFriendsGroupInputEnvelope
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
  }

  export type GroupFriendUncheckedCreateNestedManyWithoutFriendsGroupInput = {
    create?: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput> | GroupFriendCreateWithoutFriendsGroupInput[] | GroupFriendUncheckedCreateWithoutFriendsGroupInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendsGroupInput | GroupFriendCreateOrConnectWithoutFriendsGroupInput[]
    createMany?: GroupFriendCreateManyFriendsGroupInputEnvelope
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFriendsGroupsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsGroupsInput, UserUncheckedCreateWithoutFriendsGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsGroupsInput
    upsert?: UserUpsertWithoutFriendsGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsGroupsInput, UserUpdateWithoutFriendsGroupsInput>, UserUncheckedUpdateWithoutFriendsGroupsInput>
  }

  export type GroupFriendUpdateManyWithoutFriendsGroupNestedInput = {
    create?: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput> | GroupFriendCreateWithoutFriendsGroupInput[] | GroupFriendUncheckedCreateWithoutFriendsGroupInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendsGroupInput | GroupFriendCreateOrConnectWithoutFriendsGroupInput[]
    upsert?: GroupFriendUpsertWithWhereUniqueWithoutFriendsGroupInput | GroupFriendUpsertWithWhereUniqueWithoutFriendsGroupInput[]
    createMany?: GroupFriendCreateManyFriendsGroupInputEnvelope
    set?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    disconnect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    delete?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    update?: GroupFriendUpdateWithWhereUniqueWithoutFriendsGroupInput | GroupFriendUpdateWithWhereUniqueWithoutFriendsGroupInput[]
    updateMany?: GroupFriendUpdateManyWithWhereWithoutFriendsGroupInput | GroupFriendUpdateManyWithWhereWithoutFriendsGroupInput[]
    deleteMany?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
  }

  export type GroupFriendUncheckedUpdateManyWithoutFriendsGroupNestedInput = {
    create?: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput> | GroupFriendCreateWithoutFriendsGroupInput[] | GroupFriendUncheckedCreateWithoutFriendsGroupInput[]
    connectOrCreate?: GroupFriendCreateOrConnectWithoutFriendsGroupInput | GroupFriendCreateOrConnectWithoutFriendsGroupInput[]
    upsert?: GroupFriendUpsertWithWhereUniqueWithoutFriendsGroupInput | GroupFriendUpsertWithWhereUniqueWithoutFriendsGroupInput[]
    createMany?: GroupFriendCreateManyFriendsGroupInputEnvelope
    set?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    disconnect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    delete?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    connect?: GroupFriendWhereUniqueInput | GroupFriendWhereUniqueInput[]
    update?: GroupFriendUpdateWithWhereUniqueWithoutFriendsGroupInput | GroupFriendUpdateWithWhereUniqueWithoutFriendsGroupInput[]
    updateMany?: GroupFriendUpdateManyWithWhereWithoutFriendsGroupInput | GroupFriendUpdateManyWithWhereWithoutFriendsGroupInput[]
    deleteMany?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
  }

  export type FriendsGroupCreateNestedOneWithoutGroupFriendsInput = {
    create?: XOR<FriendsGroupCreateWithoutGroupFriendsInput, FriendsGroupUncheckedCreateWithoutGroupFriendsInput>
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutGroupFriendsInput
    connect?: FriendsGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupFriendsInput = {
    create?: XOR<UserCreateWithoutGroupFriendsInput, UserUncheckedCreateWithoutGroupFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type FriendsGroupUpdateOneRequiredWithoutGroupFriendsNestedInput = {
    create?: XOR<FriendsGroupCreateWithoutGroupFriendsInput, FriendsGroupUncheckedCreateWithoutGroupFriendsInput>
    connectOrCreate?: FriendsGroupCreateOrConnectWithoutGroupFriendsInput
    upsert?: FriendsGroupUpsertWithoutGroupFriendsInput
    connect?: FriendsGroupWhereUniqueInput
    update?: XOR<XOR<FriendsGroupUpdateToOneWithWhereWithoutGroupFriendsInput, FriendsGroupUpdateWithoutGroupFriendsInput>, FriendsGroupUncheckedUpdateWithoutGroupFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutGroupFriendsNestedInput = {
    create?: XOR<UserCreateWithoutGroupFriendsInput, UserUncheckedCreateWithoutGroupFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupFriendsInput
    upsert?: UserUpsertWithoutGroupFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupFriendsInput, UserUpdateWithoutGroupFriendsInput>, UserUncheckedUpdateWithoutGroupFriendsInput>
  }

  export type UserCreateNestedOneWithoutActorNotificationsInput = {
    create?: XOR<UserCreateWithoutActorNotificationsInput, UserUncheckedCreateWithoutActorNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActorNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutActorNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutActorNotificationsInput, UserUncheckedCreateWithoutActorNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActorNotificationsInput
    upsert?: UserUpsertWithoutActorNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActorNotificationsInput, UserUpdateWithoutActorNotificationsInput>, UserUncheckedUpdateWithoutActorNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TodayCreateWithoutUserInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutUserInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput>
  }

  export type TodayCreateManyUserInputEnvelope = {
    data: TodayCreateManyUserInput | TodayCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUserInput = {
    id?: string
    name: string
    todayTags?: TodayTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    today: TodayCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutChildCommentsInput
    childComments?: CommentCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    todayId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    id?: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    today: TodayCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string
    todayId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2: UserCreateNestedOneWithoutFriendshipsAsUser2Input
  }

  export type FriendshipUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipCreateManyUser1InputEnvelope = {
    data: FriendshipCreateManyUser1Input | FriendshipCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutFriendshipsAsUser1Input
  }

  export type FriendshipUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipCreateManyUser2InputEnvelope = {
    data: FriendshipCreateManyUser2Input | FriendshipCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type FriendsGroupCreateWithoutUserInput = {
    id?: string
    name: string
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendsGroupInput
  }

  export type FriendsGroupUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendsGroupInput
  }

  export type FriendsGroupCreateOrConnectWithoutUserInput = {
    where: FriendsGroupWhereUniqueInput
    create: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput>
  }

  export type FriendsGroupCreateManyUserInputEnvelope = {
    data: FriendsGroupCreateManyUserInput | FriendsGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    actorUser: UserCreateNestedOneWithoutActorNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    actorUserId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutActorUserInput = {
    id?: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutActorUserInput = {
    id?: string
    type: string
    userId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutActorUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput>
  }

  export type NotificationCreateManyActorUserInputEnvelope = {
    data: NotificationCreateManyActorUserInput | NotificationCreateManyActorUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupFriendCreateWithoutFriendInput = {
    id?: string
    friendsGroup: FriendsGroupCreateNestedOneWithoutGroupFriendsInput
  }

  export type GroupFriendUncheckedCreateWithoutFriendInput = {
    id?: string
    friendsGroupId: string
  }

  export type GroupFriendCreateOrConnectWithoutFriendInput = {
    where: GroupFriendWhereUniqueInput
    create: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput>
  }

  export type GroupFriendCreateManyFriendInputEnvelope = {
    data: GroupFriendCreateManyFriendInput | GroupFriendCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type TodayMentionUserCreateWithoutMentionedUserInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayMentionedUsersInput
  }

  export type TodayMentionUserUncheckedCreateWithoutMentionedUserInput = {
    id?: string
    todayId: string
  }

  export type TodayMentionUserCreateOrConnectWithoutMentionedUserInput = {
    where: TodayMentionUserWhereUniqueInput
    create: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput>
  }

  export type TodayMentionUserCreateManyMentionedUserInputEnvelope = {
    data: TodayMentionUserCreateManyMentionedUserInput | TodayMentionUserCreateManyMentionedUserInput[]
    skipDuplicates?: boolean
  }

  export type TodayVisibleUserCreateWithoutVisibleUserInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayVisibleUsersInput
  }

  export type TodayVisibleUserUncheckedCreateWithoutVisibleUserInput = {
    id?: string
    todayId: string
  }

  export type TodayVisibleUserCreateOrConnectWithoutVisibleUserInput = {
    where: TodayVisibleUserWhereUniqueInput
    create: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput>
  }

  export type TodayVisibleUserCreateManyVisibleUserInputEnvelope = {
    data: TodayVisibleUserCreateManyVisibleUserInput | TodayVisibleUserCreateManyVisibleUserInput[]
    skipDuplicates?: boolean
  }

  export type TodayUpsertWithWhereUniqueWithoutUserInput = {
    where: TodayWhereUniqueInput
    update: XOR<TodayUpdateWithoutUserInput, TodayUncheckedUpdateWithoutUserInput>
    create: XOR<TodayCreateWithoutUserInput, TodayUncheckedCreateWithoutUserInput>
  }

  export type TodayUpdateWithWhereUniqueWithoutUserInput = {
    where: TodayWhereUniqueInput
    data: XOR<TodayUpdateWithoutUserInput, TodayUncheckedUpdateWithoutUserInput>
  }

  export type TodayUpdateManyWithWhereWithoutUserInput = {
    where: TodayScalarWhereInput
    data: XOR<TodayUpdateManyMutationInput, TodayUncheckedUpdateManyWithoutUserInput>
  }

  export type TodayScalarWhereInput = {
    AND?: TodayScalarWhereInput | TodayScalarWhereInput[]
    OR?: TodayScalarWhereInput[]
    NOT?: TodayScalarWhereInput | TodayScalarWhereInput[]
    id?: StringFilter<"Today"> | string
    userId?: StringFilter<"Today"> | string
    title?: StringFilter<"Today"> | string
    emojiUrl?: StringFilter<"Today"> | string
    content?: StringFilter<"Today"> | string
    date?: DateTimeFilter<"Today"> | Date | string
    createdAt?: DateTimeFilter<"Today"> | Date | string
    updatedAt?: DateTimeFilter<"Today"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    todayId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    todayId?: StringFilter<"Reaction"> | string
    emojiUrl?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser1Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser1Input>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser2Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser2Input>
  }

  export type FriendsGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendsGroupWhereUniqueInput
    update: XOR<FriendsGroupUpdateWithoutUserInput, FriendsGroupUncheckedUpdateWithoutUserInput>
    create: XOR<FriendsGroupCreateWithoutUserInput, FriendsGroupUncheckedCreateWithoutUserInput>
  }

  export type FriendsGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendsGroupWhereUniqueInput
    data: XOR<FriendsGroupUpdateWithoutUserInput, FriendsGroupUncheckedUpdateWithoutUserInput>
  }

  export type FriendsGroupUpdateManyWithWhereWithoutUserInput = {
    where: FriendsGroupScalarWhereInput
    data: XOR<FriendsGroupUpdateManyMutationInput, FriendsGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendsGroupScalarWhereInput = {
    AND?: FriendsGroupScalarWhereInput | FriendsGroupScalarWhereInput[]
    OR?: FriendsGroupScalarWhereInput[]
    NOT?: FriendsGroupScalarWhereInput | FriendsGroupScalarWhereInput[]
    id?: StringFilter<"FriendsGroup"> | string
    name?: StringFilter<"FriendsGroup"> | string
    userId?: StringFilter<"FriendsGroup"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    actorUserId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutActorUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutActorUserInput, NotificationUncheckedUpdateWithoutActorUserInput>
    create: XOR<NotificationCreateWithoutActorUserInput, NotificationUncheckedCreateWithoutActorUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutActorUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutActorUserInput, NotificationUncheckedUpdateWithoutActorUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutActorUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutActorUserInput>
  }

  export type GroupFriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: GroupFriendWhereUniqueInput
    update: XOR<GroupFriendUpdateWithoutFriendInput, GroupFriendUncheckedUpdateWithoutFriendInput>
    create: XOR<GroupFriendCreateWithoutFriendInput, GroupFriendUncheckedCreateWithoutFriendInput>
  }

  export type GroupFriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: GroupFriendWhereUniqueInput
    data: XOR<GroupFriendUpdateWithoutFriendInput, GroupFriendUncheckedUpdateWithoutFriendInput>
  }

  export type GroupFriendUpdateManyWithWhereWithoutFriendInput = {
    where: GroupFriendScalarWhereInput
    data: XOR<GroupFriendUpdateManyMutationInput, GroupFriendUncheckedUpdateManyWithoutFriendInput>
  }

  export type GroupFriendScalarWhereInput = {
    AND?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
    OR?: GroupFriendScalarWhereInput[]
    NOT?: GroupFriendScalarWhereInput | GroupFriendScalarWhereInput[]
    id?: StringFilter<"GroupFriend"> | string
    friendsGroupId?: StringFilter<"GroupFriend"> | string
    friendId?: StringFilter<"GroupFriend"> | string
  }

  export type TodayMentionUserUpsertWithWhereUniqueWithoutMentionedUserInput = {
    where: TodayMentionUserWhereUniqueInput
    update: XOR<TodayMentionUserUpdateWithoutMentionedUserInput, TodayMentionUserUncheckedUpdateWithoutMentionedUserInput>
    create: XOR<TodayMentionUserCreateWithoutMentionedUserInput, TodayMentionUserUncheckedCreateWithoutMentionedUserInput>
  }

  export type TodayMentionUserUpdateWithWhereUniqueWithoutMentionedUserInput = {
    where: TodayMentionUserWhereUniqueInput
    data: XOR<TodayMentionUserUpdateWithoutMentionedUserInput, TodayMentionUserUncheckedUpdateWithoutMentionedUserInput>
  }

  export type TodayMentionUserUpdateManyWithWhereWithoutMentionedUserInput = {
    where: TodayMentionUserScalarWhereInput
    data: XOR<TodayMentionUserUpdateManyMutationInput, TodayMentionUserUncheckedUpdateManyWithoutMentionedUserInput>
  }

  export type TodayMentionUserScalarWhereInput = {
    AND?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
    OR?: TodayMentionUserScalarWhereInput[]
    NOT?: TodayMentionUserScalarWhereInput | TodayMentionUserScalarWhereInput[]
    id?: StringFilter<"TodayMentionUser"> | string
    todayId?: StringFilter<"TodayMentionUser"> | string
    mentionedUserId?: StringFilter<"TodayMentionUser"> | string
  }

  export type TodayVisibleUserUpsertWithWhereUniqueWithoutVisibleUserInput = {
    where: TodayVisibleUserWhereUniqueInput
    update: XOR<TodayVisibleUserUpdateWithoutVisibleUserInput, TodayVisibleUserUncheckedUpdateWithoutVisibleUserInput>
    create: XOR<TodayVisibleUserCreateWithoutVisibleUserInput, TodayVisibleUserUncheckedCreateWithoutVisibleUserInput>
  }

  export type TodayVisibleUserUpdateWithWhereUniqueWithoutVisibleUserInput = {
    where: TodayVisibleUserWhereUniqueInput
    data: XOR<TodayVisibleUserUpdateWithoutVisibleUserInput, TodayVisibleUserUncheckedUpdateWithoutVisibleUserInput>
  }

  export type TodayVisibleUserUpdateManyWithWhereWithoutVisibleUserInput = {
    where: TodayVisibleUserScalarWhereInput
    data: XOR<TodayVisibleUserUpdateManyMutationInput, TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserInput>
  }

  export type TodayVisibleUserScalarWhereInput = {
    AND?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
    OR?: TodayVisibleUserScalarWhereInput[]
    NOT?: TodayVisibleUserScalarWhereInput | TodayVisibleUserScalarWhereInput[]
    id?: StringFilter<"TodayVisibleUser"> | string
    todayId?: StringFilter<"TodayVisibleUser"> | string
    visibleUserId?: StringFilter<"TodayVisibleUser"> | string
  }

  export type UserCreateWithoutTodaysInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutTodaysInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutTodaysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodaysInput, UserUncheckedCreateWithoutTodaysInput>
  }

  export type TodayTagCreateWithoutTodayInput = {
    id?: string
    tag: TagCreateNestedOneWithoutTodayTagsInput
  }

  export type TodayTagUncheckedCreateWithoutTodayInput = {
    id?: string
    tagId: string
  }

  export type TodayTagCreateOrConnectWithoutTodayInput = {
    where: TodayTagWhereUniqueInput
    create: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput>
  }

  export type TodayTagCreateManyTodayInputEnvelope = {
    data: TodayTagCreateManyTodayInput | TodayTagCreateManyTodayInput[]
    skipDuplicates?: boolean
  }

  export type TodayMentionUserCreateWithoutTodayInput = {
    id?: string
    mentionedUser: UserCreateNestedOneWithoutTodayMentionedUsersInput
  }

  export type TodayMentionUserUncheckedCreateWithoutTodayInput = {
    id?: string
    mentionedUserId: string
  }

  export type TodayMentionUserCreateOrConnectWithoutTodayInput = {
    where: TodayMentionUserWhereUniqueInput
    create: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput>
  }

  export type TodayMentionUserCreateManyTodayInputEnvelope = {
    data: TodayMentionUserCreateManyTodayInput | TodayMentionUserCreateManyTodayInput[]
    skipDuplicates?: boolean
  }

  export type TodayVisibleUserCreateWithoutTodayInput = {
    id?: string
    visibleUser: UserCreateNestedOneWithoutTodayVisibleUsersInput
  }

  export type TodayVisibleUserUncheckedCreateWithoutTodayInput = {
    id?: string
    visibleUserId: string
  }

  export type TodayVisibleUserCreateOrConnectWithoutTodayInput = {
    where: TodayVisibleUserWhereUniqueInput
    create: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput>
  }

  export type TodayVisibleUserCreateManyTodayInputEnvelope = {
    data: TodayVisibleUserCreateManyTodayInput | TodayVisibleUserCreateManyTodayInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutTodayInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutChildCommentsInput
    childComments?: CommentCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUncheckedCreateWithoutTodayInput = {
    id?: string
    userId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentCreateOrConnectWithoutTodayInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput>
  }

  export type CommentCreateManyTodayInputEnvelope = {
    data: CommentCreateManyTodayInput | CommentCreateManyTodayInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutTodayInput = {
    id?: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutTodayInput = {
    id?: string
    userId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutTodayInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput>
  }

  export type ReactionCreateManyTodayInputEnvelope = {
    data: ReactionCreateManyTodayInput | ReactionCreateManyTodayInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTodaysInput = {
    update: XOR<UserUpdateWithoutTodaysInput, UserUncheckedUpdateWithoutTodaysInput>
    create: XOR<UserCreateWithoutTodaysInput, UserUncheckedCreateWithoutTodaysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodaysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodaysInput, UserUncheckedUpdateWithoutTodaysInput>
  }

  export type UserUpdateWithoutTodaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayTagUpsertWithWhereUniqueWithoutTodayInput = {
    where: TodayTagWhereUniqueInput
    update: XOR<TodayTagUpdateWithoutTodayInput, TodayTagUncheckedUpdateWithoutTodayInput>
    create: XOR<TodayTagCreateWithoutTodayInput, TodayTagUncheckedCreateWithoutTodayInput>
  }

  export type TodayTagUpdateWithWhereUniqueWithoutTodayInput = {
    where: TodayTagWhereUniqueInput
    data: XOR<TodayTagUpdateWithoutTodayInput, TodayTagUncheckedUpdateWithoutTodayInput>
  }

  export type TodayTagUpdateManyWithWhereWithoutTodayInput = {
    where: TodayTagScalarWhereInput
    data: XOR<TodayTagUpdateManyMutationInput, TodayTagUncheckedUpdateManyWithoutTodayInput>
  }

  export type TodayTagScalarWhereInput = {
    AND?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
    OR?: TodayTagScalarWhereInput[]
    NOT?: TodayTagScalarWhereInput | TodayTagScalarWhereInput[]
    id?: StringFilter<"TodayTag"> | string
    todayId?: StringFilter<"TodayTag"> | string
    tagId?: StringFilter<"TodayTag"> | string
  }

  export type TodayMentionUserUpsertWithWhereUniqueWithoutTodayInput = {
    where: TodayMentionUserWhereUniqueInput
    update: XOR<TodayMentionUserUpdateWithoutTodayInput, TodayMentionUserUncheckedUpdateWithoutTodayInput>
    create: XOR<TodayMentionUserCreateWithoutTodayInput, TodayMentionUserUncheckedCreateWithoutTodayInput>
  }

  export type TodayMentionUserUpdateWithWhereUniqueWithoutTodayInput = {
    where: TodayMentionUserWhereUniqueInput
    data: XOR<TodayMentionUserUpdateWithoutTodayInput, TodayMentionUserUncheckedUpdateWithoutTodayInput>
  }

  export type TodayMentionUserUpdateManyWithWhereWithoutTodayInput = {
    where: TodayMentionUserScalarWhereInput
    data: XOR<TodayMentionUserUpdateManyMutationInput, TodayMentionUserUncheckedUpdateManyWithoutTodayInput>
  }

  export type TodayVisibleUserUpsertWithWhereUniqueWithoutTodayInput = {
    where: TodayVisibleUserWhereUniqueInput
    update: XOR<TodayVisibleUserUpdateWithoutTodayInput, TodayVisibleUserUncheckedUpdateWithoutTodayInput>
    create: XOR<TodayVisibleUserCreateWithoutTodayInput, TodayVisibleUserUncheckedCreateWithoutTodayInput>
  }

  export type TodayVisibleUserUpdateWithWhereUniqueWithoutTodayInput = {
    where: TodayVisibleUserWhereUniqueInput
    data: XOR<TodayVisibleUserUpdateWithoutTodayInput, TodayVisibleUserUncheckedUpdateWithoutTodayInput>
  }

  export type TodayVisibleUserUpdateManyWithWhereWithoutTodayInput = {
    where: TodayVisibleUserScalarWhereInput
    data: XOR<TodayVisibleUserUpdateManyMutationInput, TodayVisibleUserUncheckedUpdateManyWithoutTodayInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTodayInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTodayInput, CommentUncheckedUpdateWithoutTodayInput>
    create: XOR<CommentCreateWithoutTodayInput, CommentUncheckedCreateWithoutTodayInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTodayInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTodayInput, CommentUncheckedUpdateWithoutTodayInput>
  }

  export type CommentUpdateManyWithWhereWithoutTodayInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTodayInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutTodayInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutTodayInput, ReactionUncheckedUpdateWithoutTodayInput>
    create: XOR<ReactionCreateWithoutTodayInput, ReactionUncheckedCreateWithoutTodayInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutTodayInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutTodayInput, ReactionUncheckedUpdateWithoutTodayInput>
  }

  export type ReactionUpdateManyWithWhereWithoutTodayInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutTodayInput>
  }

  export type TodayCreateWithoutTodayTagsInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutTodayTagsInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutTodayTagsInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutTodayTagsInput, TodayUncheckedCreateWithoutTodayTagsInput>
  }

  export type TagCreateWithoutTodayTagsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutTodayTagsInput = {
    id?: string
    userId: string
    name: string
  }

  export type TagCreateOrConnectWithoutTodayTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTodayTagsInput, TagUncheckedCreateWithoutTodayTagsInput>
  }

  export type TodayUpsertWithoutTodayTagsInput = {
    update: XOR<TodayUpdateWithoutTodayTagsInput, TodayUncheckedUpdateWithoutTodayTagsInput>
    create: XOR<TodayCreateWithoutTodayTagsInput, TodayUncheckedCreateWithoutTodayTagsInput>
    where?: TodayWhereInput
  }

  export type TodayUpdateToOneWithWhereWithoutTodayTagsInput = {
    where?: TodayWhereInput
    data: XOR<TodayUpdateWithoutTodayTagsInput, TodayUncheckedUpdateWithoutTodayTagsInput>
  }

  export type TodayUpdateWithoutTodayTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutTodayTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type TagUpsertWithoutTodayTagsInput = {
    update: XOR<TagUpdateWithoutTodayTagsInput, TagUncheckedUpdateWithoutTodayTagsInput>
    create: XOR<TagCreateWithoutTodayTagsInput, TagUncheckedCreateWithoutTodayTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTodayTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTodayTagsInput, TagUncheckedUpdateWithoutTodayTagsInput>
  }

  export type TagUpdateWithoutTodayTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutTodayTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TodayCreateWithoutTodayMentionedUsersInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutTodayMentionedUsersInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutTodayMentionedUsersInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutTodayMentionedUsersInput, TodayUncheckedCreateWithoutTodayMentionedUsersInput>
  }

  export type UserCreateWithoutTodayMentionedUsersInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutTodayMentionedUsersInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutTodayMentionedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodayMentionedUsersInput, UserUncheckedCreateWithoutTodayMentionedUsersInput>
  }

  export type TodayUpsertWithoutTodayMentionedUsersInput = {
    update: XOR<TodayUpdateWithoutTodayMentionedUsersInput, TodayUncheckedUpdateWithoutTodayMentionedUsersInput>
    create: XOR<TodayCreateWithoutTodayMentionedUsersInput, TodayUncheckedCreateWithoutTodayMentionedUsersInput>
    where?: TodayWhereInput
  }

  export type TodayUpdateToOneWithWhereWithoutTodayMentionedUsersInput = {
    where?: TodayWhereInput
    data: XOR<TodayUpdateWithoutTodayMentionedUsersInput, TodayUncheckedUpdateWithoutTodayMentionedUsersInput>
  }

  export type TodayUpdateWithoutTodayMentionedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutTodayMentionedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type UserUpsertWithoutTodayMentionedUsersInput = {
    update: XOR<UserUpdateWithoutTodayMentionedUsersInput, UserUncheckedUpdateWithoutTodayMentionedUsersInput>
    create: XOR<UserCreateWithoutTodayMentionedUsersInput, UserUncheckedCreateWithoutTodayMentionedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodayMentionedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodayMentionedUsersInput, UserUncheckedUpdateWithoutTodayMentionedUsersInput>
  }

  export type UserUpdateWithoutTodayMentionedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodayMentionedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayCreateWithoutTodayVisibleUsersInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutTodayVisibleUsersInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutTodayVisibleUsersInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutTodayVisibleUsersInput, TodayUncheckedCreateWithoutTodayVisibleUsersInput>
  }

  export type UserCreateWithoutTodayVisibleUsersInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
  }

  export type UserUncheckedCreateWithoutTodayVisibleUsersInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
  }

  export type UserCreateOrConnectWithoutTodayVisibleUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodayVisibleUsersInput, UserUncheckedCreateWithoutTodayVisibleUsersInput>
  }

  export type TodayUpsertWithoutTodayVisibleUsersInput = {
    update: XOR<TodayUpdateWithoutTodayVisibleUsersInput, TodayUncheckedUpdateWithoutTodayVisibleUsersInput>
    create: XOR<TodayCreateWithoutTodayVisibleUsersInput, TodayUncheckedCreateWithoutTodayVisibleUsersInput>
    where?: TodayWhereInput
  }

  export type TodayUpdateToOneWithWhereWithoutTodayVisibleUsersInput = {
    where?: TodayWhereInput
    data: XOR<TodayUpdateWithoutTodayVisibleUsersInput, TodayUncheckedUpdateWithoutTodayVisibleUsersInput>
  }

  export type TodayUpdateWithoutTodayVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutTodayVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type UserUpsertWithoutTodayVisibleUsersInput = {
    update: XOR<UserUpdateWithoutTodayVisibleUsersInput, UserUncheckedUpdateWithoutTodayVisibleUsersInput>
    create: XOR<UserCreateWithoutTodayVisibleUsersInput, UserUncheckedCreateWithoutTodayVisibleUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodayVisibleUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodayVisibleUsersInput, UserUncheckedUpdateWithoutTodayVisibleUsersInput>
  }

  export type UserUpdateWithoutTodayVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodayVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
  }

  export type UserCreateWithoutTagsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type TodayTagCreateWithoutTagInput = {
    id?: string
    today: TodayCreateNestedOneWithoutTodayTagsInput
  }

  export type TodayTagUncheckedCreateWithoutTagInput = {
    id?: string
    todayId: string
  }

  export type TodayTagCreateOrConnectWithoutTagInput = {
    where: TodayTagWhereUniqueInput
    create: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput>
  }

  export type TodayTagCreateManyTagInputEnvelope = {
    data: TodayTagCreateManyTagInput | TodayTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TodayTagWhereUniqueInput
    update: XOR<TodayTagUpdateWithoutTagInput, TodayTagUncheckedUpdateWithoutTagInput>
    create: XOR<TodayTagCreateWithoutTagInput, TodayTagUncheckedCreateWithoutTagInput>
  }

  export type TodayTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TodayTagWhereUniqueInput
    data: XOR<TodayTagUpdateWithoutTagInput, TodayTagUncheckedUpdateWithoutTagInput>
  }

  export type TodayTagUpdateManyWithWhereWithoutTagInput = {
    where: TodayTagScalarWhereInput
    data: XOR<TodayTagUpdateManyMutationInput, TodayTagUncheckedUpdateManyWithoutTagInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TodayCreateWithoutCommentsInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    reactions?: ReactionCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutCommentsInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutCommentsInput, TodayUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutChildCommentsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    today: TodayCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutChildCommentsInput
  }

  export type CommentUncheckedCreateWithoutChildCommentsInput = {
    id?: string
    userId: string
    todayId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutChildCommentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutChildCommentsInput, CommentUncheckedCreateWithoutChildCommentsInput>
  }

  export type CommentCreateWithoutParentCommentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    today: TodayCreateNestedOneWithoutCommentsInput
    childComments?: CommentCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUncheckedCreateWithoutParentCommentInput = {
    id?: string
    userId: string
    todayId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    childComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentCreateOrConnectWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentCreateManyParentCommentInputEnvelope = {
    data: CommentCreateManyParentCommentInput | CommentCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayUpsertWithoutCommentsInput = {
    update: XOR<TodayUpdateWithoutCommentsInput, TodayUncheckedUpdateWithoutCommentsInput>
    create: XOR<TodayCreateWithoutCommentsInput, TodayUncheckedCreateWithoutCommentsInput>
    where?: TodayWhereInput
  }

  export type TodayUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TodayWhereInput
    data: XOR<TodayUpdateWithoutCommentsInput, TodayUncheckedUpdateWithoutCommentsInput>
  }

  export type TodayUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type CommentUpsertWithoutChildCommentsInput = {
    update: XOR<CommentUpdateWithoutChildCommentsInput, CommentUncheckedUpdateWithoutChildCommentsInput>
    create: XOR<CommentCreateWithoutChildCommentsInput, CommentUncheckedCreateWithoutChildCommentsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutChildCommentsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutChildCommentsInput, CommentUncheckedUpdateWithoutChildCommentsInput>
  }

  export type CommentUpdateWithoutChildCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    today?: TodayUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutChildCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutChildCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentCommentInput, CommentUncheckedUpdateWithoutParentCommentInput>
    create: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentCommentInput, CommentUncheckedUpdateWithoutParentCommentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentCommentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type TodayCreateWithoutReactionsInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodaysInput
    todayTags?: TodayTagCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutTodayInput
    comments?: CommentCreateNestedManyWithoutTodayInput
  }

  export type TodayUncheckedCreateWithoutReactionsInput = {
    id?: string
    userId: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    todayTags?: TodayTagUncheckedCreateNestedManyWithoutTodayInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutTodayInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutTodayInput
    comments?: CommentUncheckedCreateNestedManyWithoutTodayInput
  }

  export type TodayCreateOrConnectWithoutReactionsInput = {
    where: TodayWhereUniqueInput
    create: XOR<TodayCreateWithoutReactionsInput, TodayUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayUpsertWithoutReactionsInput = {
    update: XOR<TodayUpdateWithoutReactionsInput, TodayUncheckedUpdateWithoutReactionsInput>
    create: XOR<TodayCreateWithoutReactionsInput, TodayUncheckedCreateWithoutReactionsInput>
    where?: TodayWhereInput
  }

  export type TodayUpdateToOneWithWhereWithoutReactionsInput = {
    where?: TodayWhereInput
    data: XOR<TodayUpdateWithoutReactionsInput, TodayUncheckedUpdateWithoutReactionsInput>
  }

  export type TodayUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodaysNestedInput
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type UserCreateWithoutFriendshipsAsUser1Input = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutFriendshipsAsUser1Input = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutFriendshipsAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
  }

  export type UserCreateWithoutFriendshipsAsUser2Input = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutFriendshipsAsUser2Input = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutFriendshipsAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
  }

  export type UserUpsertWithoutFriendshipsAsUser1Input = {
    update: XOR<UserUpdateWithoutFriendshipsAsUser1Input, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
    create: XOR<UserCreateWithoutFriendshipsAsUser1Input, UserUncheckedCreateWithoutFriendshipsAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendshipsAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendshipsAsUser1Input, UserUncheckedUpdateWithoutFriendshipsAsUser1Input>
  }

  export type UserUpdateWithoutFriendshipsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendshipsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUpsertWithoutFriendshipsAsUser2Input = {
    update: XOR<UserUpdateWithoutFriendshipsAsUser2Input, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
    create: XOR<UserCreateWithoutFriendshipsAsUser2Input, UserUncheckedCreateWithoutFriendshipsAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendshipsAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendshipsAsUser2Input, UserUncheckedUpdateWithoutFriendshipsAsUser2Input>
  }

  export type UserUpdateWithoutFriendshipsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendshipsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserCreateWithoutFriendsGroupsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutFriendsGroupsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutFriendsGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsGroupsInput, UserUncheckedCreateWithoutFriendsGroupsInput>
  }

  export type GroupFriendCreateWithoutFriendsGroupInput = {
    id?: string
    friend: UserCreateNestedOneWithoutGroupFriendsInput
  }

  export type GroupFriendUncheckedCreateWithoutFriendsGroupInput = {
    id?: string
    friendId: string
  }

  export type GroupFriendCreateOrConnectWithoutFriendsGroupInput = {
    where: GroupFriendWhereUniqueInput
    create: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput>
  }

  export type GroupFriendCreateManyFriendsGroupInputEnvelope = {
    data: GroupFriendCreateManyFriendsGroupInput | GroupFriendCreateManyFriendsGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFriendsGroupsInput = {
    update: XOR<UserUpdateWithoutFriendsGroupsInput, UserUncheckedUpdateWithoutFriendsGroupsInput>
    create: XOR<UserCreateWithoutFriendsGroupsInput, UserUncheckedCreateWithoutFriendsGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsGroupsInput, UserUncheckedUpdateWithoutFriendsGroupsInput>
  }

  export type UserUpdateWithoutFriendsGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type GroupFriendUpsertWithWhereUniqueWithoutFriendsGroupInput = {
    where: GroupFriendWhereUniqueInput
    update: XOR<GroupFriendUpdateWithoutFriendsGroupInput, GroupFriendUncheckedUpdateWithoutFriendsGroupInput>
    create: XOR<GroupFriendCreateWithoutFriendsGroupInput, GroupFriendUncheckedCreateWithoutFriendsGroupInput>
  }

  export type GroupFriendUpdateWithWhereUniqueWithoutFriendsGroupInput = {
    where: GroupFriendWhereUniqueInput
    data: XOR<GroupFriendUpdateWithoutFriendsGroupInput, GroupFriendUncheckedUpdateWithoutFriendsGroupInput>
  }

  export type GroupFriendUpdateManyWithWhereWithoutFriendsGroupInput = {
    where: GroupFriendScalarWhereInput
    data: XOR<GroupFriendUpdateManyMutationInput, GroupFriendUncheckedUpdateManyWithoutFriendsGroupInput>
  }

  export type FriendsGroupCreateWithoutGroupFriendsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutFriendsGroupsInput
  }

  export type FriendsGroupUncheckedCreateWithoutGroupFriendsInput = {
    id?: string
    name: string
    userId: string
  }

  export type FriendsGroupCreateOrConnectWithoutGroupFriendsInput = {
    where: FriendsGroupWhereUniqueInput
    create: XOR<FriendsGroupCreateWithoutGroupFriendsInput, FriendsGroupUncheckedCreateWithoutGroupFriendsInput>
  }

  export type UserCreateWithoutGroupFriendsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutGroupFriendsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutGroupFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupFriendsInput, UserUncheckedCreateWithoutGroupFriendsInput>
  }

  export type FriendsGroupUpsertWithoutGroupFriendsInput = {
    update: XOR<FriendsGroupUpdateWithoutGroupFriendsInput, FriendsGroupUncheckedUpdateWithoutGroupFriendsInput>
    create: XOR<FriendsGroupCreateWithoutGroupFriendsInput, FriendsGroupUncheckedCreateWithoutGroupFriendsInput>
    where?: FriendsGroupWhereInput
  }

  export type FriendsGroupUpdateToOneWithWhereWithoutGroupFriendsInput = {
    where?: FriendsGroupWhereInput
    data: XOR<FriendsGroupUpdateWithoutGroupFriendsInput, FriendsGroupUncheckedUpdateWithoutGroupFriendsInput>
  }

  export type FriendsGroupUpdateWithoutGroupFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsGroupsNestedInput
  }

  export type FriendsGroupUncheckedUpdateWithoutGroupFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutGroupFriendsInput = {
    update: XOR<UserUpdateWithoutGroupFriendsInput, UserUncheckedUpdateWithoutGroupFriendsInput>
    create: XOR<UserCreateWithoutGroupFriendsInput, UserUncheckedCreateWithoutGroupFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupFriendsInput, UserUncheckedUpdateWithoutGroupFriendsInput>
  }

  export type UserUpdateWithoutGroupFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserCreateWithoutActorNotificationsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutActorNotificationsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutActorNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActorNotificationsInput, UserUncheckedCreateWithoutActorNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserCreateNestedManyWithoutVisibleUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    userId: string
    password?: string | null
    nickname: string
    introduction?: string | null
    diaryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todays?: TodayUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    friendshipsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendshipsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    friendsGroups?: FriendsGroupUncheckedCreateNestedManyWithoutUserInput
    actorNotifications?: NotificationUncheckedCreateNestedManyWithoutActorUserInput
    groupFriends?: GroupFriendUncheckedCreateNestedManyWithoutFriendInput
    todayMentionedUsers?: TodayMentionUserUncheckedCreateNestedManyWithoutMentionedUserInput
    todayVisibleUsers?: TodayVisibleUserUncheckedCreateNestedManyWithoutVisibleUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutActorNotificationsInput = {
    update: XOR<UserUpdateWithoutActorNotificationsInput, UserUncheckedUpdateWithoutActorNotificationsInput>
    create: XOR<UserCreateWithoutActorNotificationsInput, UserUncheckedCreateWithoutActorNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActorNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActorNotificationsInput, UserUncheckedUpdateWithoutActorNotificationsInput>
  }

  export type UserUpdateWithoutActorNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActorNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutVisibleUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    diaryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todays?: TodayUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    friendshipsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendshipsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    friendsGroups?: FriendsGroupUncheckedUpdateManyWithoutUserNestedInput
    actorNotifications?: NotificationUncheckedUpdateManyWithoutActorUserNestedInput
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutMentionedUserNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserNestedInput
  }

  export type TodayCreateManyUserInput = {
    id?: string
    title: string
    emojiUrl: string
    content: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyUserInput = {
    id?: string
    name: string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    todayId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    id?: string
    todayId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateManyUser1Input = {
    id?: string
    user2Id: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUser2Input = {
    id?: string
    user1Id: string
    createdAt?: Date | string
  }

  export type FriendsGroupCreateManyUserInput = {
    id?: string
    name: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    actorUserId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateManyActorUserInput = {
    id?: string
    type: string
    userId: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type GroupFriendCreateManyFriendInput = {
    id?: string
    friendsGroupId: string
  }

  export type TodayMentionUserCreateManyMentionedUserInput = {
    id?: string
    todayId: string
  }

  export type TodayVisibleUserCreateManyVisibleUserInput = {
    id?: string
    todayId: string
  }

  export type TodayUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUpdateManyWithoutTodayNestedInput
    comments?: CommentUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTodayNestedInput
    todayMentionedUsers?: TodayMentionUserUncheckedUpdateManyWithoutTodayNestedInput
    todayVisibleUsers?: TodayVisibleUserUncheckedUpdateManyWithoutTodayNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTodayNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutTodayNestedInput
  }

  export type TodayUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    todayTags?: TodayTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    todayTags?: TodayTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    today?: TodayUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutChildCommentsNestedInput
    childComments?: CommentUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childComments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    today?: TodayUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutFriendshipsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendshipsAsUser1NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsGroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupFriends?: GroupFriendUpdateManyWithoutFriendsGroupNestedInput
  }

  export type FriendsGroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupFriends?: GroupFriendUncheckedUpdateManyWithoutFriendsGroupNestedInput
  }

  export type FriendsGroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUser?: UserUpdateOneRequiredWithoutActorNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutActorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutActorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutActorUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFriendUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroup?: FriendsGroupUpdateOneRequiredWithoutGroupFriendsNestedInput
  }

  export type GroupFriendUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupFriendUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendsGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserUpdateWithoutMentionedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayMentionedUsersNestedInput
  }

  export type TodayMentionUserUncheckedUpdateWithoutMentionedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserUncheckedUpdateManyWithoutMentionedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserUpdateWithoutVisibleUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayVisibleUsersNestedInput
  }

  export type TodayVisibleUserUncheckedUpdateWithoutVisibleUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserUncheckedUpdateManyWithoutVisibleUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayTagCreateManyTodayInput = {
    id?: string
    tagId: string
  }

  export type TodayMentionUserCreateManyTodayInput = {
    id?: string
    mentionedUserId: string
  }

  export type TodayVisibleUserCreateManyTodayInput = {
    id?: string
    visibleUserId: string
  }

  export type CommentCreateManyTodayInput = {
    id?: string
    userId: string
    content: string
    parentCommentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateManyTodayInput = {
    id?: string
    userId: string
    emojiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodayTagUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: TagUpdateOneRequiredWithoutTodayTagsNestedInput
  }

  export type TodayTagUncheckedUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayTagUncheckedUpdateManyWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentionedUser?: UserUpdateOneRequiredWithoutTodayMentionedUsersNestedInput
  }

  export type TodayMentionUserUncheckedUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentionedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayMentionUserUncheckedUpdateManyWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentionedUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibleUser?: UserUpdateOneRequiredWithoutTodayVisibleUsersNestedInput
  }

  export type TodayVisibleUserUncheckedUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibleUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayVisibleUserUncheckedUpdateManyWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibleUserId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutChildCommentsNestedInput
    childComments?: CommentUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childComments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutTodayInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emojiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodayTagCreateManyTagInput = {
    id?: string
    todayId: string
  }

  export type TodayTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    today?: TodayUpdateOneRequiredWithoutTodayTagsNestedInput
  }

  export type TodayTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type TodayTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyParentCommentInput = {
    id?: string
    userId: string
    todayId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    today?: TodayUpdateOneRequiredWithoutCommentsNestedInput
    childComments?: CommentUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childComments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    todayId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFriendCreateManyFriendsGroupInput = {
    id?: string
    friendId: string
  }

  export type GroupFriendUpdateWithoutFriendsGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friend?: UserUpdateOneRequiredWithoutGroupFriendsNestedInput
  }

  export type GroupFriendUncheckedUpdateWithoutFriendsGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupFriendUncheckedUpdateManyWithoutFriendsGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}