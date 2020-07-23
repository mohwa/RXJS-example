// Reactive Programming

// - 해당 내용을 rx로 짤 때와 react로 짤때 가독성 및 결합도를 생각해보자
// - 검색어에 따라 stack overflow 검색결과를 브라우저에 띄운다 (api 이용)
// - 불필요한 요청 방지를 위해 1초동안 검색어에 변화가 없을 경우에만 요청을 보낸다.
// - 이전에 보냈던 요청의 응답이 그 이후 요청의 응답보다 늦게 도착할 경우 이를 무시한다.
// - 중복되는 검색어가 연속으로 들어왔을 때 요청을 한번만 보낸다.
// - 요청이 실패할 경우 자동으로 최대 3번까지 요청을 재시도한다.

// - rxjs의 경우
sbj.pipe(filter((value, index) => value !== ''))
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .pipe(switchMap((value:any, index:number) => {
      return ajax.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${value}&site=stackoverflow`)
                .pipe(map(r => r.response.items))
                .pipe(retry(3))
    }
    ))
    .subscribe(
      (value: any) => setResult(value),
      (err: any) => setError('error!')
    );

// react 인 경우 ???