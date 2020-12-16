function sortedValue(list, blackList) {

let result = [];

  for(let i = 0; i < list.length; i++) {
    // проходим по масиву черного списка
      for(let index = 0; index <= blackList.length; index++){
        if (list[i].includes(blackList[index]) === true) {
          index = 0;
          break;
        } 
           if (blackList.length === index) {
           result.push(list[i]);
         }
      }
  }

console.log(result);
}

let list = ["1234@mail.ru", "qwerty@google.ru", "copy@link.com", "85659@god.su", "123@res.com"];

let blackList = ["3у3у3у3@gmail.ru", "укрук_@yandex.ru", "copy@link.com", "fjeoge@mail.ru", "123@res.com"];

sortedValue(list, blackList);