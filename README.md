# VPS benchmarks
**UpCloud, Linode and DigitalOcean comparison**

You can find nonreferral coupon codes for DigitalOcean and Linode easy, for [UpCloud](https://www.upcloud.com) I believe you need to use a referral.

This is my referral code to get [25$](https://www.upcloud.com/register/?promo=6U86FH) free Credit without payment, if you think my benchmark was useful to you: **6U86FH**

- Info
  * [1 - CPU](#1---cpu)
  * [2 - Memory](#2---memory)
  * [3 - Disk](#3---disk)
- Web performance
  * [4 - HTTP](#4---http)
  * [5 - WebSocket](#5---websocket)
- Database performance
  * [6 - MongoDB](#6---mongodb)
  * [7 - Redis](#7---redis)
- Network performance
  * [8 - Network](#8---network)


## 1 - CPU:

All tests were performed with these configs unless stated otherwise.

#### UpCloud 10$ - CPU 1 core - 1 GB RAM - 512 MB Swap
```
# Operating system: Ubuntu 16.04

# CPU model:
Intel(R) Xeon(R) CPU E5-2687W v3 @ 3.10GHz
cpu MHz : 3099.998
cache size : 25600 KB
```

#### DigitalOcean 10$ - CPU 1 core - 1 GB RAM - 512 MB Swap
```
# Operating system: Ubuntu 16.04

# CPU model:
Intel(R) Xeon(R) CPU E5-2650 v4 @ 2.20GHz
cpu MHz : 2199.998
cache size : 30720 KB
```

#### Linode 5$ - CPU 1 core - 1 GB RAM - 512 MB Swap
```
# Operating system: Ubuntu 16.04

# CPU model:
Intel(R) Xeon(R) CPU E5-2680 v3 @ 2.50GHz
cpu MHz : 2499.996
cache size : 4096 KB
```


## 2 - Memory:

#### UpCloud
```
AVG     Method: MEMCPY  Elapsed: 0.00081        MiB: 8.00000    Copy: 9877.763 MiB/s
AVG     Method: DUMB    Elapsed: 0.00061        MiB: 8.00000    Copy: 13183.916 MiB/s
AVG     Method: MCBLOCK Elapsed: 0.00058        MiB: 8.00000    Copy: 13682.230 MiB/s
```

#### DigitalOcean
```
AVG     Method: MEMCPY  Elapsed: 0.00205        MiB: 8.00000    Copy: 3895.977 MiB/s
AVG     Method: DUMB    Elapsed: 0.00094        MiB: 8.00000    Copy: 8498.885 MiB/s
AVG     Method: MCBLOCK Elapsed: 0.00092        MiB: 8.00000    Copy: 8683.382 MiB/s
```

#### Linode
```
AVG     Method: MEMCPY  Elapsed: 0.00302        MiB: 8.00000    Copy: 2651.904 MiB/s
AVG     Method: DUMB    Elapsed: 0.00176        MiB: 8.00000    Copy: 4541.584 MiB/s
AVG     Method: MCBLOCK Elapsed: 0.00102        MiB: 8.00000    Copy: 7843.906 MiB/s
```

## 3 - Disk:

#### Cache I/O operations
|                | UpCloud            | DigitalOcean       | Linode             |
| :------------- | -----------------: | -----------------: | -----------------: |
| Disk latency   | **0.16 ms**        | 0.25 ms            | 0.26 ms            |
| Cached read    | **11297.39 MB/sec**| 9712.05 MB/sec     | 9558.28 MB/sec     |
| Buffered read  | 399.89 MB/sec      | **1311.79 MB/sec** | **1319.94 MB/sec** |


#### Random I/O operations
|                | UpCloud (iops)     | DigitalOcean (iops)| Linode (iops)      |
| :------------- | -----------------: | -----------------: | -----------------: |
| Read 256 MB    | 98550              | **146612**         | 51807              |
| Read 4 GB      | 92794              | **158827**         | 60297              |
| Write 256 MB   | **91658**          | 22193              | 50921              |
| Write 4 GB     | **81747**          | 23910              | 52347              |


## 4 - HTTP:
#### This benchmark performed on 1 Core.

Default loggers and unnecessary response headers have been removed from these web servers.
This is not a comparison between web frameworks but between VPS providers, still for comparability these simple servers are doing the same thing, the same way.

Node.js frameworks also tested with a custom http server called `uws.http`: [µWS](https://github.com/uNetworking/uWebSockets)

In this benchmark uws didn't include the `Status`, `Content-Type` and `Date` headers in the response, after it becomes production ready expect less requests per second.

I had to make modifications in the `fastify` core to make it work with `uws`, this and other large servers are not presented in this repo.

IMG1

#### Closed HTTP connections
|                         | UpCloud (req/s)    | DigitalOcean (req/s) | Linode (req/s)     |
| :---------------------- | -----------------: | -------------------: | -----------------: |
| node.js - express       | 5640               | 4347                 | 2670               |
| node.js - express (uws) | 35222              | 28093                | 12536              |
| node.js - fastify       | 9832               | 8290                 | 4234               |
| node.js - fastify (uws) | 56782              | 48247                | 21445              |
| go - iris               | 8415               | 8518                 | 4394               |
| go - gin                | 9247               | 8415                 | 4810               |
| elixir - phoenix        | 8513               | 6115                 | 4901               |
| php - laravel           | 812                | 584                  | 418                |
| php - symfony           | 728                | 522                  | 367                |


IMG2

#### Persistent HTTP/2 connections
|                         | UpCloud (req/s)    | DigitalOcean (req/s) | Linode (req/s)     |
| :---------------------- | -----------------: | -------------------: | -----------------: |
| node.js - express       | 12085              | 9153                 | 6086               |
| node.js - express (uws) | 40496              | 23511                | 12678              |
| node.js - fastify       | 25687              | 20185                | 9206               |
| node.js - fastify (uws) | 62976              | 45781                | 19549              |
| go - iris               | 25039              | 22789                | 11576              |
| go - gin                | 30341              | 26798                | 12043              |
| elixir - phoenix        | 22819              | 14328                | 10874              |
| php - laravel           | -                  | -                    | -                  |
| php - symfony           | -                  | -                    | -                  |


## 5 - WebSocket:
#### This benchmark performed only on UpCloud 2 Core.

A WebSocket test is difficult to do, I have completed this only on the UpCloud server, when I have some time I will do again on DigitalOcean and Linode servers and share the results.

Many WebSocket benchmarks are about establishing connections on bare metal servers (that is meaningless, any weak server can handle an awful lot of idle connection),
because of this I measured throughput.

#### Average latency (the lower the better)
|                     | deepstream.io      | socket.io          | phoenix            | Meteor.js          |
| :------------------ | -----------------: | -----------------: | -----------------: | -----------------: |
| 100 messages/s      | 1.17 ms            | 0.64 ms            | 1.05 ms            | 58.14 ms              |
| 1 000 messages/s    | 1.54 ms            | 9.83 ms            | 2.44 ms            | -                  |
| 10 000 messages/s   | 1.68 ms            | 44.58 ms           | 98.32 ms           | -                  |
| 100 000 messages/s  | 8.24 ms            | 341.62 ms          | 839.88 ms          | -                  |

#### Average failed messages (messages/sec)
|                     | deepstream.io      | socket.io          | phoenix            | Meteor.js          |
| :------------------ | -----------------: | -----------------: | -----------------: | -----------------: |
| 100                 | 0                  | 0                  | 0                  | 0                  |
| 1 000               | 0                  | 0                  | 0                  | All                |
| 10 000              | 0                  | 0                  | 0                  | All                |
| 100 000             | 0                  | 18531              | 53751              | All                |


## 6 - MongoDB:
#### This benchmark performed on 2 Core using 1 thread. (operations/sec or documents/sec)

|                                             | UpCloud            | DigitalOcean       | Linode             | UpCloud - 2 thread  |
| :------------------------------------------ | -----------------: | -----------------: | -----------------: | ------------------: |
| Query Int Id FindOne                        | 23760              | 3700               | 7183               | 48327               |
| Query Int NonId FindOne                     | 16081              | 2851               | 5263               | 32166               |
| Query Find Projection                       | 11933              | 2077               | 4742               | 24036               |
| Query Find Projection Three Fields          | 10869              | 2808               | 4376               | 21237               |
| Query Text Find Single                      | 14099              | 2261               | 4941               | 28038               |
| Query Text Find Single LargeDoc             | 89                 | 29                 | 53                 | 163                 |
| Query Text Find Three Words                 | 11347              | 2032               | 4070               | 21478               |
| Query Text Find Three Words CaseSensitive   | 17397              | 3147               | 5492               | 30712               |
| Query Text Find Phrase                      | 17394              | 3718               | 5992               | 29829               |
| Query PartialIndex FilteredRange            | 25494              | 5275               | 8869               | 50671               |
| -                                           |                    |                    |                    |                     |
| Insert Empty                                | 17762              | 4171               | 5675               | 30590               |
| Insert Just ID                              | 17888              | 3112               | 5237               | 33360               |
| Insert Just Num                             | 17595              | 3345               | 6296               | 30021               |
| Insert Just Num Indexed                     | 16555              | 3337               | 5740               | 29867               |
| Insert Int ID Upsert                        | 13494              | 2242               | 5488               | 23732               |
| Insert Int Vector                           | 1804               | 478                | 975                | 1957                |
| Insert LargeDoc Vector                      | 623                | 163                | 430                | 667                 |
| Insert SeqInt ID Indexed                    | 15846              | 2824               | 6262               | 27555               |
| Insert SingleIndex Seq                      | 16050              | 3398               | 4991               | 26809               |
| Insert DocValidation One Int                | 17307              | 3000               | 5285               | 31926               |
| Insert DocValidation Ten Int                | 16004              | 3957               | 5194               | 29763               |
| Insert PartialIndex FullRange               | 15326              | 3863               | 5686               | 26910               |
| -                                           |                    |                    |                    |                     |
| Update Inc NoIndex                          | 13897              | 3071               | 5225               | 27393               |
| Update Inc WithIndex                        | 11747              | 2835               | 4650               | 22698               |
| Update Inc NoIndex Upsert                   | 13993              | 3359               | 5360               | 27024               |
| Update Inc WithIndex Upsert                 | 11975              | 2711               | 5070               | 23313               |
| Update Inc Few SmallDoc                     | 12875              | 2427               | 5246               | 24343               |
| Update Field At Offset                      | 578                | 212                | 338                | 770                 |
| -                                           |                    |                    |                    |                     |
| Remove Int Id                               | 21912              | 3541               | 8693               | 43729               |
| Remove Int NonId NoIndex                    | 2077               | 542                | 1183               | 1507                |
| Remove Int NonId Index                      | 17773              | 3301               | 7372               | 33056               |
| -                                           |                    |                    |                    |                     |
| Geo near 2d findOne                         | 5918               | 1765               | 2328               | 11944               |
| Geo near 2d find                            | 2485               | 810                | 1083               | 4778                |
| Geo geoJSON nearSphere 2dsphere find        | 200                | 67                 | 117                | 385                 |
| Geo geoJSON within 2dsphere centersphere    | 629                | 172                | 373                | 1185                |
| -                                           |                    |                    |                    |                     |
| Aggregation Group All                       | 4385               | 1491               | 2423               | 8557                |
| Aggregation Limit                           | 1507               | 604                | 623                | 2952                |


## 7 - Redis:
#### This benchmark performed on 1 Core using 1 thread. (operations/sec)

|             | UpCloud            | DigitalOcean       | Linode             | UpCloud - 2 core   |
| :---------- | -----------------: | -----------------: | -----------------: | -----------------: |
| SET         | 532 623            | 322 216            | 295 508            | 769 526            |
| GET         | 611 060            | 423 549            | 309 071            | 951 927            |
| LPUSH       | 683 527            | 487 210            | 388 575            | 1 095 290          |
| LPOP        | 673 854            | 509 554            | 382 336            | 1 091 107          |

#### UpCloud: latency histogram
```
====== SET ======
  2000000 requests completed in 3.71 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

0.00% <= 1 milliseconds
99.71% <= 2 milliseconds
99.96% <= 3 milliseconds
100.00% <= 3 milliseconds
538502.94 requests per second
```

#### DigitalOcean: latency histogram
```
====== SET ======
  2000000 requests completed in 5.41 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

0.00% <= 1 milliseconds
7.70% <= 2 milliseconds
98.14% <= 3 milliseconds
99.48% <= 4 milliseconds
99.56% <= 5 milliseconds
99.96% <= 6 milliseconds
99.97% <= 7 milliseconds
100.00% <= 7 milliseconds
369959.28 requests per second
```

#### Linode: latency histogram
```
====== SET ======
  2000000 requests completed in 8.28 seconds
  50 parallel clients
  3 bytes payload
  keep alive: 1

0.02% <= 1 milliseconds
0.17% <= 2 milliseconds
56.01% <= 3 milliseconds
79.25% <= 4 milliseconds
91.29% <= 5 milliseconds
97.39% <= 6 milliseconds
98.94% <= 7 milliseconds
99.70% <= 8 milliseconds
99.91% <= 9 milliseconds
99.96% <= 10 milliseconds
100.00% <= 10 milliseconds
241400.12 requests per second
```


## 8 - Network:

All VPS have 1 Gbps connection, for my job low latency from the Frankfurt server is more important than speed,
so I tested the hosting provider's other Data centers from there.

#### Public network RTT

|                | UpCloud - Frankfurt  | DigitalOcean - Frankfurt | Linode - Frankfurt   |
| :------------- | -------------------: | -----------------------: | -------------------: |
| Frankfurt      | 0.307 ms             | 0.625 ms                 | 0.633 ms             |
| Amsterdam      | 7.058 ms             | 6.390 ms                 | -                    |
| London         | 16.118 ms            | 16.404 ms                | 16.997 ms            |
| Newark         | -                    | -                        | 82.116 ms            |
| New York       | -                    | 84.007 ms                |                      |
| Chicago        | 108.045 ms           | -                        | -                    |
| Atlanta        | -                    | -                        | 100.579 ms           |
| Dallas         | -                    | -                        | 117.886 ms           |
| Fremont        | -                    | -                        | 147.890 ms           |
| San Francisco  | -                    | 152.691 ms               | -                    |
| Bangalore      | -                    | 126.019 ms               | -                    |
| Singapore      | 339.455 ms           | 165.436 ms               | 258.297 ms           |
| Tokyo          | -                    | -                        | 247.459 ms           |

#### Private network RTT

Real Private network is only available for UpCloud yet.

|                | UpCloud - Frankfurt  |
| :------------- | -------------------: |
| Frankfurt      | 0.264 ms             |
| Amsterdam      | 7.181 ms             |
| London         | 16.121 ms            |
| Chicago        | 103.115 ms           |
| Singapore      | 343.052 ms           |
