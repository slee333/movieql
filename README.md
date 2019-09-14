# movieql

## Lecture 1

Added graphQL yoga with yarn. Added git repo.

Apparently graphQL makes backend development super easy.


## Lecture 2

graphQL prevents you suffering from underfetching and overfetching.

#### Overfetching

> 처리해야 하는 일에 비해 너무 많은 데이터를 받는 것.
>
> 몇가지만 쓰고 나머진 버리게 되니 비효율~

#### Underfetching

인스타그램을 처음 열면 노티, 피드, 유저 정보를 받아옴
 
이걸 한 번이 아니라 세번에 걸쳐 받아오게 되는게 Underfetching

graphQL은 이럴 일이 읎다

#### URLs

URL은 잊어라! URL 체계가 읎다~ 한가지의 query만 있을 뿐

#### Query

내가 요청한 Query에 따라 그것만 보내줌!


## Lecture 3

Set up environment. Used graphQL-yoga, babel-cli, nodemon and etc.

*nodemon*: restart server everytime your code changes. 전에 써봤던거!

*graphql-yoga*: node js만 생으로 써보다 얘를 써본다. 근데 query만 봐도 이전에 쓰던 것들보다 편해보인다!

*schema*: description of data you will give/get to/from user. 

## Lecture 4

뭔가 많이 했다. 중요한 것들만 요약해보면:

*Schema* 파일에는 query가 들어간다. 내가 user에게 무엇을 줄지 결정한다. 지금 이 단계에서는 name만 되어있다.

*resolver.js*는 이제 query를 resolve 해준다. schema에 정의한 query가 들어왔을 때 그걸 어떻게 handle할지 보여준다. 이 경우엔 name이란 query에 "Wook"을 return.

graphQL은 resolver와 query만 존재한다. 이 resolver를 원하는 대로 프로그래밍 가능. Db에서 다른 Db로 갈 수도. 메모리로도 가고 다른 API로도 가고 등등..

## Lecture 5

*playground*: Let you test your DB.

Query는 post로 sever로 보내진다. 

## Lecture 7

Workflow:
- graphQL Resolver가 graphQL server서 요청을 받음
- graphQL 서버가 query/mutation의 정의를 발견 (schema)
- GraphQL은 해당 resolver를 찾고 resolver 내 함수들을 실행.
- 해당 query가 argument가 필요할 경우 해당 requirement를 schema에 정의 할 수 있다.
- passed 된 arguement들은 resolver로 넘어간다. URL을 쓸 필요가 없다는 뜻이다!

So in GraphQL...
- Define how your data's gonna look @ **schema**
- Use **resolver** to resolve **operations**
- Schema is kinda like URL and resolver is kinda like view.