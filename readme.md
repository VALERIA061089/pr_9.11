## **Практическая работа 9.11**

В практической работе нам требовалось создать генератор случайных пользовательских данных: ФИО, пола, даты рождения и профессии. С возможностью сбрасывать информацию и генерировать новую с помощью соответствующих кнопок.

### ***ФИО***

Женскую фамилию нельзя писать в *JSON*, она должна происходить из предоставленных мужских фамилий. Женские имена можно написать в качестве *JSON*. Требовалось написать дополнительные условия *if else* для женщин и мужчин. Добавлена генерация закреплённого за полом отчества в отдельном объекте, полученном от кода *JSON*.

### ***Пол***

В генерации пола необходимо было воспользоваться тернарным оператором.

### ***Дата рождения***

Для генерации года использовались *min*, *max* значения из функции случайной генерации. Месяц рождения написан текстом.

### ***Кнопка удаления сгенерированных данных***

Кнопка очистки должна удалять только сгенерированные значения, не удаляя теги в HTML разметке.

Добавлено **CSS** оформление.

Добавлена кнопка, активирующая генерацию всех данных.