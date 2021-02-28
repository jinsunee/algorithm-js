# Heap (힙)

- 최솟값 혹은 최댓값을 빠르게 구할 수 있는 자료구조
- 완전이진트리를 이용해서 구현된다.
- 배열로 저장되어있으며, 트리형태로 인덱싱되어있다.
  - 트리형태로 인덱싱?
    <div>
      <img width="300" alt="스크린샷 2021-02-28 오후 3 18 26" src="https://user-images.githubusercontent.com/31176502/109409700-43a95600-79d8-11eb-8725-f03b6dcdfd35.png">
    </div>

    실제로 코딩할 때는 index가 0부터 시작하므로, 아래처럼 코딩해야한다.
    <div>
      <img width="300" alt="스크린샷 2021-02-28 오후 3 18 26" src="https://user-images.githubusercontent.com/31176502/109412530-da334280-79eb-11eb-854c-8f13bada4c35.png">
    </div>

  - 추가적인 메모리가 필요하지 않다.
