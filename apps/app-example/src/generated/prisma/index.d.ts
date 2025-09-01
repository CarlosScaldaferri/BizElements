
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
 * Model UserRegistration
 * 
 */
export type UserRegistration = $Result.DefaultSelection<Prisma.$UserRegistrationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserRegistrations
 * const userRegistrations = await prisma.userRegistration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserRegistrations
   * const userRegistrations = await prisma.userRegistration.findMany()
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
   * `prisma.userRegistration`: Exposes CRUD operations for the **UserRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRegistrations
    * const userRegistrations = await prisma.userRegistration.findMany()
    * ```
    */
  get userRegistration(): Prisma.UserRegistrationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    UserRegistration: 'UserRegistration'
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
      modelProps: "userRegistration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserRegistration: {
        payload: Prisma.$UserRegistrationPayload<ExtArgs>
        fields: Prisma.UserRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          findFirst: {
            args: Prisma.UserRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          findMany: {
            args: Prisma.UserRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>[]
          }
          create: {
            args: Prisma.UserRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          createMany: {
            args: Prisma.UserRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>[]
          }
          delete: {
            args: Prisma.UserRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          update: {
            args: Prisma.UserRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.UserRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.UserRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegistrationPayload>
          }
          aggregate: {
            args: Prisma.UserRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRegistration>
          }
          groupBy: {
            args: Prisma.UserRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<UserRegistrationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    userRegistration?: UserRegistrationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model UserRegistration
   */

  export type AggregateUserRegistration = {
    _count: UserRegistrationCountAggregateOutputType | null
    _min: UserRegistrationMinAggregateOutputType | null
    _max: UserRegistrationMaxAggregateOutputType | null
  }

  export type UserRegistrationMinAggregateOutputType = {
    id: string | null
    avatarUrl: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    country: string | null
    bio: string | null
    receiveNewsletter: boolean | null
    receivePromotions: boolean | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRegistrationMaxAggregateOutputType = {
    id: string | null
    avatarUrl: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    country: string | null
    bio: string | null
    receiveNewsletter: boolean | null
    receivePromotions: boolean | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRegistrationCountAggregateOutputType = {
    id: number
    avatarUrl: number
    firstName: number
    lastName: number
    email: number
    dateOfBirth: number
    gender: number
    country: number
    bio: number
    receiveNewsletter: number
    receivePromotions: number
    emailNotifications: number
    smsNotifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRegistrationMinAggregateInputType = {
    id?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    bio?: true
    receiveNewsletter?: true
    receivePromotions?: true
    emailNotifications?: true
    smsNotifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRegistrationMaxAggregateInputType = {
    id?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    bio?: true
    receiveNewsletter?: true
    receivePromotions?: true
    emailNotifications?: true
    smsNotifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRegistrationCountAggregateInputType = {
    id?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    bio?: true
    receiveNewsletter?: true
    receivePromotions?: true
    emailNotifications?: true
    smsNotifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegistration to aggregate.
     */
    where?: UserRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegistrations to fetch.
     */
    orderBy?: UserRegistrationOrderByWithRelationInput | UserRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRegistrations
    **/
    _count?: true | UserRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRegistrationMaxAggregateInputType
  }

  export type GetUserRegistrationAggregateType<T extends UserRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRegistration[P]>
      : GetScalarType<T[P], AggregateUserRegistration[P]>
  }




  export type UserRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRegistrationWhereInput
    orderBy?: UserRegistrationOrderByWithAggregationInput | UserRegistrationOrderByWithAggregationInput[]
    by: UserRegistrationScalarFieldEnum[] | UserRegistrationScalarFieldEnum
    having?: UserRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRegistrationCountAggregateInputType | true
    _min?: UserRegistrationMinAggregateInputType
    _max?: UserRegistrationMaxAggregateInputType
  }

  export type UserRegistrationGroupByOutputType = {
    id: string
    avatarUrl: string | null
    firstName: string
    lastName: string
    email: string
    dateOfBirth: Date
    gender: $Enums.Gender
    country: string
    bio: string
    receiveNewsletter: boolean
    receivePromotions: boolean
    emailNotifications: boolean
    smsNotifications: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserRegistrationCountAggregateOutputType | null
    _min: UserRegistrationMinAggregateOutputType | null
    _max: UserRegistrationMaxAggregateOutputType | null
  }

  type GetUserRegistrationGroupByPayload<T extends UserRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], UserRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type UserRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    bio?: boolean
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRegistration"]>

  export type UserRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    bio?: boolean
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRegistration"]>

  export type UserRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    bio?: boolean
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRegistration"]>

  export type UserRegistrationSelectScalar = {
    id?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    bio?: boolean
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avatarUrl" | "firstName" | "lastName" | "email" | "dateOfBirth" | "gender" | "country" | "bio" | "receiveNewsletter" | "receivePromotions" | "emailNotifications" | "smsNotifications" | "createdAt" | "updatedAt", ExtArgs["result"]["userRegistration"]>

  export type $UserRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRegistration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      avatarUrl: string | null
      firstName: string
      lastName: string
      email: string
      dateOfBirth: Date
      gender: $Enums.Gender
      country: string
      bio: string
      receiveNewsletter: boolean
      receivePromotions: boolean
      emailNotifications: boolean
      smsNotifications: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRegistration"]>
    composites: {}
  }

  type UserRegistrationGetPayload<S extends boolean | null | undefined | UserRegistrationDefaultArgs> = $Result.GetResult<Prisma.$UserRegistrationPayload, S>

  type UserRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRegistrationCountAggregateInputType | true
    }

  export interface UserRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRegistration'], meta: { name: 'UserRegistration' } }
    /**
     * Find zero or one UserRegistration that matches the filter.
     * @param {UserRegistrationFindUniqueArgs} args - Arguments to find a UserRegistration
     * @example
     * // Get one UserRegistration
     * const userRegistration = await prisma.userRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRegistrationFindUniqueArgs>(args: SelectSubset<T, UserRegistrationFindUniqueArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRegistrationFindUniqueOrThrowArgs} args - Arguments to find a UserRegistration
     * @example
     * // Get one UserRegistration
     * const userRegistration = await prisma.userRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationFindFirstArgs} args - Arguments to find a UserRegistration
     * @example
     * // Get one UserRegistration
     * const userRegistration = await prisma.userRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRegistrationFindFirstArgs>(args?: SelectSubset<T, UserRegistrationFindFirstArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationFindFirstOrThrowArgs} args - Arguments to find a UserRegistration
     * @example
     * // Get one UserRegistration
     * const userRegistration = await prisma.userRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRegistrations
     * const userRegistrations = await prisma.userRegistration.findMany()
     * 
     * // Get first 10 UserRegistrations
     * const userRegistrations = await prisma.userRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRegistrationWithIdOnly = await prisma.userRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRegistrationFindManyArgs>(args?: SelectSubset<T, UserRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRegistration.
     * @param {UserRegistrationCreateArgs} args - Arguments to create a UserRegistration.
     * @example
     * // Create one UserRegistration
     * const UserRegistration = await prisma.userRegistration.create({
     *   data: {
     *     // ... data to create a UserRegistration
     *   }
     * })
     * 
     */
    create<T extends UserRegistrationCreateArgs>(args: SelectSubset<T, UserRegistrationCreateArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRegistrations.
     * @param {UserRegistrationCreateManyArgs} args - Arguments to create many UserRegistrations.
     * @example
     * // Create many UserRegistrations
     * const userRegistration = await prisma.userRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRegistrationCreateManyArgs>(args?: SelectSubset<T, UserRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRegistrations and returns the data saved in the database.
     * @param {UserRegistrationCreateManyAndReturnArgs} args - Arguments to create many UserRegistrations.
     * @example
     * // Create many UserRegistrations
     * const userRegistration = await prisma.userRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRegistrations and only return the `id`
     * const userRegistrationWithIdOnly = await prisma.userRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRegistration.
     * @param {UserRegistrationDeleteArgs} args - Arguments to delete one UserRegistration.
     * @example
     * // Delete one UserRegistration
     * const UserRegistration = await prisma.userRegistration.delete({
     *   where: {
     *     // ... filter to delete one UserRegistration
     *   }
     * })
     * 
     */
    delete<T extends UserRegistrationDeleteArgs>(args: SelectSubset<T, UserRegistrationDeleteArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRegistration.
     * @param {UserRegistrationUpdateArgs} args - Arguments to update one UserRegistration.
     * @example
     * // Update one UserRegistration
     * const userRegistration = await prisma.userRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRegistrationUpdateArgs>(args: SelectSubset<T, UserRegistrationUpdateArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRegistrations.
     * @param {UserRegistrationDeleteManyArgs} args - Arguments to filter UserRegistrations to delete.
     * @example
     * // Delete a few UserRegistrations
     * const { count } = await prisma.userRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRegistrationDeleteManyArgs>(args?: SelectSubset<T, UserRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRegistrations
     * const userRegistration = await prisma.userRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRegistrationUpdateManyArgs>(args: SelectSubset<T, UserRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRegistrations and returns the data updated in the database.
     * @param {UserRegistrationUpdateManyAndReturnArgs} args - Arguments to update many UserRegistrations.
     * @example
     * // Update many UserRegistrations
     * const userRegistration = await prisma.userRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRegistrations and only return the `id`
     * const userRegistrationWithIdOnly = await prisma.userRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRegistration.
     * @param {UserRegistrationUpsertArgs} args - Arguments to update or create a UserRegistration.
     * @example
     * // Update or create a UserRegistration
     * const userRegistration = await prisma.userRegistration.upsert({
     *   create: {
     *     // ... data to create a UserRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRegistration we want to update
     *   }
     * })
     */
    upsert<T extends UserRegistrationUpsertArgs>(args: SelectSubset<T, UserRegistrationUpsertArgs<ExtArgs>>): Prisma__UserRegistrationClient<$Result.GetResult<Prisma.$UserRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationCountArgs} args - Arguments to filter UserRegistrations to count.
     * @example
     * // Count the number of UserRegistrations
     * const count = await prisma.userRegistration.count({
     *   where: {
     *     // ... the filter for the UserRegistrations we want to count
     *   }
     * })
    **/
    count<T extends UserRegistrationCountArgs>(
      args?: Subset<T, UserRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRegistrationAggregateArgs>(args: Subset<T, UserRegistrationAggregateArgs>): Prisma.PrismaPromise<GetUserRegistrationAggregateType<T>>

    /**
     * Group by UserRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegistrationGroupByArgs} args - Group by arguments.
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
      T extends UserRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: UserRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRegistration model
   */
  readonly fields: UserRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserRegistration model
   */
  interface UserRegistrationFieldRefs {
    readonly id: FieldRef<"UserRegistration", 'String'>
    readonly avatarUrl: FieldRef<"UserRegistration", 'String'>
    readonly firstName: FieldRef<"UserRegistration", 'String'>
    readonly lastName: FieldRef<"UserRegistration", 'String'>
    readonly email: FieldRef<"UserRegistration", 'String'>
    readonly dateOfBirth: FieldRef<"UserRegistration", 'DateTime'>
    readonly gender: FieldRef<"UserRegistration", 'Gender'>
    readonly country: FieldRef<"UserRegistration", 'String'>
    readonly bio: FieldRef<"UserRegistration", 'String'>
    readonly receiveNewsletter: FieldRef<"UserRegistration", 'Boolean'>
    readonly receivePromotions: FieldRef<"UserRegistration", 'Boolean'>
    readonly emailNotifications: FieldRef<"UserRegistration", 'Boolean'>
    readonly smsNotifications: FieldRef<"UserRegistration", 'Boolean'>
    readonly createdAt: FieldRef<"UserRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRegistration findUnique
   */
  export type UserRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which UserRegistration to fetch.
     */
    where: UserRegistrationWhereUniqueInput
  }

  /**
   * UserRegistration findUniqueOrThrow
   */
  export type UserRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which UserRegistration to fetch.
     */
    where: UserRegistrationWhereUniqueInput
  }

  /**
   * UserRegistration findFirst
   */
  export type UserRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which UserRegistration to fetch.
     */
    where?: UserRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegistrations to fetch.
     */
    orderBy?: UserRegistrationOrderByWithRelationInput | UserRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegistrations.
     */
    cursor?: UserRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegistrations.
     */
    distinct?: UserRegistrationScalarFieldEnum | UserRegistrationScalarFieldEnum[]
  }

  /**
   * UserRegistration findFirstOrThrow
   */
  export type UserRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which UserRegistration to fetch.
     */
    where?: UserRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegistrations to fetch.
     */
    orderBy?: UserRegistrationOrderByWithRelationInput | UserRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegistrations.
     */
    cursor?: UserRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegistrations.
     */
    distinct?: UserRegistrationScalarFieldEnum | UserRegistrationScalarFieldEnum[]
  }

  /**
   * UserRegistration findMany
   */
  export type UserRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which UserRegistrations to fetch.
     */
    where?: UserRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegistrations to fetch.
     */
    orderBy?: UserRegistrationOrderByWithRelationInput | UserRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRegistrations.
     */
    cursor?: UserRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegistrations.
     */
    skip?: number
    distinct?: UserRegistrationScalarFieldEnum | UserRegistrationScalarFieldEnum[]
  }

  /**
   * UserRegistration create
   */
  export type UserRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to create a UserRegistration.
     */
    data: XOR<UserRegistrationCreateInput, UserRegistrationUncheckedCreateInput>
  }

  /**
   * UserRegistration createMany
   */
  export type UserRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRegistrations.
     */
    data: UserRegistrationCreateManyInput | UserRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRegistration createManyAndReturn
   */
  export type UserRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many UserRegistrations.
     */
    data: UserRegistrationCreateManyInput | UserRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRegistration update
   */
  export type UserRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to update a UserRegistration.
     */
    data: XOR<UserRegistrationUpdateInput, UserRegistrationUncheckedUpdateInput>
    /**
     * Choose, which UserRegistration to update.
     */
    where: UserRegistrationWhereUniqueInput
  }

  /**
   * UserRegistration updateMany
   */
  export type UserRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRegistrations.
     */
    data: XOR<UserRegistrationUpdateManyMutationInput, UserRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which UserRegistrations to update
     */
    where?: UserRegistrationWhereInput
    /**
     * Limit how many UserRegistrations to update.
     */
    limit?: number
  }

  /**
   * UserRegistration updateManyAndReturn
   */
  export type UserRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update UserRegistrations.
     */
    data: XOR<UserRegistrationUpdateManyMutationInput, UserRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which UserRegistrations to update
     */
    where?: UserRegistrationWhereInput
    /**
     * Limit how many UserRegistrations to update.
     */
    limit?: number
  }

  /**
   * UserRegistration upsert
   */
  export type UserRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * The filter to search for the UserRegistration to update in case it exists.
     */
    where: UserRegistrationWhereUniqueInput
    /**
     * In case the UserRegistration found by the `where` argument doesn't exist, create a new UserRegistration with this data.
     */
    create: XOR<UserRegistrationCreateInput, UserRegistrationUncheckedCreateInput>
    /**
     * In case the UserRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRegistrationUpdateInput, UserRegistrationUncheckedUpdateInput>
  }

  /**
   * UserRegistration delete
   */
  export type UserRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
    /**
     * Filter which UserRegistration to delete.
     */
    where: UserRegistrationWhereUniqueInput
  }

  /**
   * UserRegistration deleteMany
   */
  export type UserRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegistrations to delete
     */
    where?: UserRegistrationWhereInput
    /**
     * Limit how many UserRegistrations to delete.
     */
    limit?: number
  }

  /**
   * UserRegistration without action
   */
  export type UserRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegistration
     */
    select?: UserRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegistration
     */
    omit?: UserRegistrationOmit<ExtArgs> | null
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


  export const UserRegistrationScalarFieldEnum: {
    id: 'id',
    avatarUrl: 'avatarUrl',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    country: 'country',
    bio: 'bio',
    receiveNewsletter: 'receiveNewsletter',
    receivePromotions: 'receivePromotions',
    emailNotifications: 'emailNotifications',
    smsNotifications: 'smsNotifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRegistrationScalarFieldEnum = (typeof UserRegistrationScalarFieldEnum)[keyof typeof UserRegistrationScalarFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


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


  export type UserRegistrationWhereInput = {
    AND?: UserRegistrationWhereInput | UserRegistrationWhereInput[]
    OR?: UserRegistrationWhereInput[]
    NOT?: UserRegistrationWhereInput | UserRegistrationWhereInput[]
    id?: StringFilter<"UserRegistration"> | string
    avatarUrl?: StringNullableFilter<"UserRegistration"> | string | null
    firstName?: StringFilter<"UserRegistration"> | string
    lastName?: StringFilter<"UserRegistration"> | string
    email?: StringFilter<"UserRegistration"> | string
    dateOfBirth?: DateTimeFilter<"UserRegistration"> | Date | string
    gender?: EnumGenderFilter<"UserRegistration"> | $Enums.Gender
    country?: StringFilter<"UserRegistration"> | string
    bio?: StringFilter<"UserRegistration"> | string
    receiveNewsletter?: BoolFilter<"UserRegistration"> | boolean
    receivePromotions?: BoolFilter<"UserRegistration"> | boolean
    emailNotifications?: BoolFilter<"UserRegistration"> | boolean
    smsNotifications?: BoolFilter<"UserRegistration"> | boolean
    createdAt?: DateTimeFilter<"UserRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"UserRegistration"> | Date | string
  }

  export type UserRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    receiveNewsletter?: SortOrder
    receivePromotions?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserRegistrationWhereInput | UserRegistrationWhereInput[]
    OR?: UserRegistrationWhereInput[]
    NOT?: UserRegistrationWhereInput | UserRegistrationWhereInput[]
    avatarUrl?: StringNullableFilter<"UserRegistration"> | string | null
    firstName?: StringFilter<"UserRegistration"> | string
    lastName?: StringFilter<"UserRegistration"> | string
    dateOfBirth?: DateTimeFilter<"UserRegistration"> | Date | string
    gender?: EnumGenderFilter<"UserRegistration"> | $Enums.Gender
    country?: StringFilter<"UserRegistration"> | string
    bio?: StringFilter<"UserRegistration"> | string
    receiveNewsletter?: BoolFilter<"UserRegistration"> | boolean
    receivePromotions?: BoolFilter<"UserRegistration"> | boolean
    emailNotifications?: BoolFilter<"UserRegistration"> | boolean
    smsNotifications?: BoolFilter<"UserRegistration"> | boolean
    createdAt?: DateTimeFilter<"UserRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"UserRegistration"> | Date | string
  }, "id" | "email">

  export type UserRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    receiveNewsletter?: SortOrder
    receivePromotions?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRegistrationCountOrderByAggregateInput
    _max?: UserRegistrationMaxOrderByAggregateInput
    _min?: UserRegistrationMinOrderByAggregateInput
  }

  export type UserRegistrationScalarWhereWithAggregatesInput = {
    AND?: UserRegistrationScalarWhereWithAggregatesInput | UserRegistrationScalarWhereWithAggregatesInput[]
    OR?: UserRegistrationScalarWhereWithAggregatesInput[]
    NOT?: UserRegistrationScalarWhereWithAggregatesInput | UserRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRegistration"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"UserRegistration"> | string | null
    firstName?: StringWithAggregatesFilter<"UserRegistration"> | string
    lastName?: StringWithAggregatesFilter<"UserRegistration"> | string
    email?: StringWithAggregatesFilter<"UserRegistration"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"UserRegistration"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"UserRegistration"> | $Enums.Gender
    country?: StringWithAggregatesFilter<"UserRegistration"> | string
    bio?: StringWithAggregatesFilter<"UserRegistration"> | string
    receiveNewsletter?: BoolWithAggregatesFilter<"UserRegistration"> | boolean
    receivePromotions?: BoolWithAggregatesFilter<"UserRegistration"> | boolean
    emailNotifications?: BoolWithAggregatesFilter<"UserRegistration"> | boolean
    smsNotifications?: BoolWithAggregatesFilter<"UserRegistration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRegistration"> | Date | string
  }

  export type UserRegistrationCreateInput = {
    id?: string
    avatarUrl?: string | null
    firstName: string
    lastName: string
    email: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    country: string
    bio: string
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRegistrationUncheckedCreateInput = {
    id?: string
    avatarUrl?: string | null
    firstName: string
    lastName: string
    email: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    country: string
    bio: string
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    receiveNewsletter?: BoolFieldUpdateOperationsInput | boolean
    receivePromotions?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    receiveNewsletter?: BoolFieldUpdateOperationsInput | boolean
    receivePromotions?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRegistrationCreateManyInput = {
    id?: string
    avatarUrl?: string | null
    firstName: string
    lastName: string
    email: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    country: string
    bio: string
    receiveNewsletter?: boolean
    receivePromotions?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    receiveNewsletter?: BoolFieldUpdateOperationsInput | boolean
    receivePromotions?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    receiveNewsletter?: BoolFieldUpdateOperationsInput | boolean
    receivePromotions?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    receiveNewsletter?: SortOrder
    receivePromotions?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    receiveNewsletter?: SortOrder
    receivePromotions?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    receiveNewsletter?: SortOrder
    receivePromotions?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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