//**Задача №2:** проверить JSON на Well formed:
//
//```json
//{
//
//        ""surname"": ""Иванов""
//
//        ""name"": ""Иван""
//
//        ""patronymic"": ""Иванович""
//
//        ""birthdate"": ""01.01.1990""
//
//        ""birthplace"": ""Москва""
//
//        ""phone"": ""8 926 766 48 48""
//
//}
//</aside>


Нет запятых после пары-значения, кроме последнего элемента,
кавычки должны быть одинарные, </aside> - в json не нужен. Исправила, что увидела:
{

        "surname": "Иванов",

        "name": "Иван",

        "patronymic": "Иванович",

        "birthdate": "01.01.1990",

        "birthplace": "Москва",

        "phone": "8 926 766 48 48"

}

