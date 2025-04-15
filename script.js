document.addEventListener('DOMContentLoaded', function() {
    // Пример данных о книгах
    const books = [
        {
            title: "Основы программирования",
            author: "Иванов А.А.",
            year: 2020,
            category: "Информатика"
        },
        {
            title: "Физика для начинающих",
            author: "Петров С.И.",
            year: 2019,
            category: "Физика"
        },
        {
            title: "Химические реакции",
            author: "Сидорова М.В.",
            year: 2021,
            category: "Химия"
        },
        {
            title: "Высшая математика",
            author: "Кузнецов Д.Н.",
            year: 2018,
            category: "Математика"
        },
        {
            title: "Биология клетки",
            author: "Николаева Е.П.",
            year: 2022,
            category: "Биология"
        },
        {
            title: "Основы электротехники",
            author: "Федоров В.Г.",
            year: 2020,
            category: "Техника"
        }
    ];

    // Функция для отображения книг
    function displayBooks(booksToDisplay) {
        const booksContainer = document.getElementById('books-list');
        booksContainer.innerHTML = '';
        
        booksToDisplay.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p><strong>Год издания:</strong> ${book.year}</p>
                <p><strong>Категория:</strong> ${book.category}</p>
            `;
            booksContainer.appendChild(bookElement);
        });
    }

    // Инициализация - показываем все книги
    displayBooks(books);

    // Поиск книг
    document.getElementById('search-btn').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks);
    });

    // Поиск при нажатии Enter
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });
});



    // Функция для отображения книг
    function displayBooks(booksToDisplay) {
        const booksContainer = document.getElementById('books-list');
        booksContainer.innerHTML = '';
        
        booksToDisplay.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <img src="${book.image || 'https://via.placeholder.com/300x400?text=Нет+изображения'}" alt="${book.title}" class="book-cover">
                <h3>${book.title}</h3>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p><strong>Год издания:</strong> ${book.year}</p>
                <p><strong>Категория:</strong> ${book.category}</p>
            `;
            booksContainer.appendChild(bookElement);
        });
    }

 
    document.addEventListener('DOMContentLoaded', function() {
        const books = [
            {
                id: 1,
                title: "Квантовая физика для начинающих",
                author: "Алексей Левин",
                year: 2022,
                category: "Физика",
                image: "https://img.biblioclub.ru/sm_cover/6ab4811d0847e126999f36a4504b84dbpn5xzrbcvm/cover.jpg",
                description: `
                    <p>Это фундаментальное руководство раскрывает тайны квантового мира доступным языком. Книга включает:</p>
                    <ul>
                        <li>Основы квантовой механики</li>
                        <li>Эксперименты с элементарными частицами</li>
                        <li>Применение в современных технологиях</li>
                        <li>Задачи с решениями</li>
                    </ul>
                    <p>Рекомендовано для студентов физических специальностей и всех, кто интересуется наукой.</p>
                `
            },
            {
                id: 2,
                title: "Искусственный интеллект. Современный подход",
                author: "Стюарт Рассел",
                year: 2021,
                category: "Компьютерные науки",
                image: "https://ir.ozone.ru/multimedia/c1000/1011598299.jpg",
                description: "Самый популярный учебник по ИИ, используемый в ведущих университетах мира."
            },
            {
                id: 3,
                title: "Астрофизика с космической скоростью",
                author: "Нил Деграсс Тайсон",
                year: 2023,
                category: "Астрономия",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxl3E9OqMu1NP3Q73hK1djvTtJheK68y7Jg&s",
                description: "Захватывающее путешествие по Вселенной от знаменитого астрофизика."
            },
            // Дополнительные книги (реальные обложки)
            {
                id: 4,
                title: "Чистый код. Создание, анализ и рефакторинг",
                author: "Роберт Мартин",
                year: 2020,
                category: "Программирование",
                image: "https://cdn1.ozone.ru/s3/multimedia-1-h/7042796189.jpg",
                description: `
                    <p>Библия программиста, которая учит:</p>
                    <ul>
                        <li>Писать код, который легко поддерживать</li>
                        <li>Избегать типичных ошибок</li>
                        <li>Правильно именовать переменные</li>
                        <li>Оптимизировать структуру кода</li>
                    </ul>
                    <p>Содержит примеры на Java, C++ и Python.</p>
                `
            },
            {
                id: 5,
                title: "Грокаем алгоритмы",
                author: "Адитья Бхаргава",
                year: 2022,
                category: "Алгоритмы",
                image: "https://s1-goods.ozstatic.by/2000/541/569/10/10569541_0.jpg",
                description:`
                <p>Захватывающий экскурс в современную астрофизику от ведущего популяризатора науки:</p>
                <ul>
                    <li>Чёрные дыры и нейтронные звёзды</li>
                    <li>Тёмная материя и энергия</li>
                    <li>Поиск жизни во Вселенной</li>
                    <li>Последние открытия телескопа Джеймса Уэбба</li>
                </ul>
                <p>Идеально для первого знакомства с космологией.</p>
            `
            },
            {
                id: 6,
                title: "Физика невозможного",
                author: "Митио Каку",
                year: 2021,
                category: "Физика",
                image: "https://alpinabook.ru/upload/iblock/0c5/0c5286251cfe9bf3f798b89bb2620624.jpg",
                description: `
                    <p>Фундаментальный труд нобелевского лауреата по экономике:</p>
                    <ul>
                        <li>Равновесие Нэша</li>
                        <li>Аукционы и стратегии</li>
                        <li>Приложения в экономике</li>
                        <li>Психология принятия решений</li>
                    </ul>
                    <p>С примерами из реальной бизнес-практики.</p>
                `
            },
            {
                id: 7,
                title: "Космос",
                author: "Карл Саган",
                year: 2019,
                category: "Астрономия",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBSXxx2gP1e2jgD8iPLMFMx0NjUnaVVhldQ&s"
            },
            {
                id: 8,
                title: "Теоретический минимум по компьютерным наукам",
                author: "Фил Новак",
                year: 2023,
                category: "Компьютерные науки",
                image: "https://img.biblioclub.ru/sm_cover/aa8f64d68f2ad378910f4a86e7a02001jq6j4yv1sn/cover.jpg"
            },
            {
                id: 9,
                title: "Органическая химия",
                author: "Джон МакМюррей",
                year: 2022,
                category: "Химия",
                image: "https://s1.livelib.ru/boocover/1005462049/200x305/0951/__Molekulyarnaya_biologiya_kletki._Uchebnik._V_3_tomah._Tom_1.jpg"
            },
            {
                id: 10,
                title: "Биология клетки",
                author: "Брюс Альбертс",
                year: 2021,
                category: "Биология",
                image: "https://s1.livelib.ru/boocover/1005462049/200x305/0951/__Molekulyarnaya_biologiya_kletki._Uchebnik._V_3_tomah._Tom_1.jpg"
            },
            // Ещё 20 книг с реальными обложками
            {
                id: 11,
                title: "Вычислительная техника",
                author: "Эндрю Таненбаум",
                year: 2020,
                category: "Компьютерные науки",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66rFmO9E-vT89_hIhLNO2mz2cG4BDhtHleA&s"
            },
            {
                id: 12,
                title: "Машинное обучение",
                author: "Кевин Мерфи",
                year: 2023,
                category: "Искусственный интеллект",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXASWBAZHkG2Iff9otEEEYfVKbksS255Dyw&s"
            },
            {
                id: 13,
                title: "Теория вероятностей",
                author: "Александр Ширяев",
                year: 2022,
                category: "Математика",
                image: "https://smart-lab.ru/uploads/books/00/03/27/327_full.jpg"
            },
            {
                id: 14,
                title: "Квантовая механика",
                author: "Леонард Сасскинд",
                year: 2021,
                category: "Физика",
                image: "https://i.livelib.ru/workpic/1001837873/200/cde5/__Kvantovaya_mehanika._Teoreticheskij_minimum.jpg"
            },
            {
                id: 15,
                title: "Электротехника",
                author: "Аллан Хэмбл",
                year: 2020,
                category: "Электроника",
                image: "https://www.logobook.ru/make_nimage.php?uid=12467276"
            },
            
            {
                id: 16,
                title: "Алгоритмы: построение и анализ",
                author: "Томас Кормен",
                year: 2023,
                category: "Алгоритмы",
                image: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e4/Introduction_to_Algorithms_2nd_Russian_cover.jpg/274px-Introduction_to_Algorithms_2nd_Russian_cover.jpg"
            },
            {
                id: 17,
                title: "Физика полупроводников",
                author: "Саймон Сзэ",
                year: 2022,
                category: "Физика",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUxEGSlAWnmaEFTiokq2GwL-7prBu6GwmMA&s"
            },
            {
                id: 18,
                title: "Биохимия",
                author: "Джереми Берг",
                year: 2021,
                category: "Биохимия",
                image: "https://goods-photos.static1-sima-land.com/items/5871352/0/400.jpg?v=1615273846"
            },
            {
                id: 19,
                title: "Теория автоматов",
                author: "Джон Хопкрофт",
                year: 2020,
                category: "Информатика",
                image: "https://cbook.benran.ru/s.aspx?pn=0&par=166962"
            },
            {
                id: 20,
                title: "Общая химия",
                author: "Лайнус Полинг",
                year: 2019,
                category: "Химия",
                image: "https://bukinistika.refmag.ru/images/P40222-195135_thumb.jpg"
            },
            // Последние 10 книг
            {
                id: 21,
                title: "Дифференциальные уравнения",
                author: "Владимир Арнольд",
                year: 2023,
                category: "Математика",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgYpW0cu1KMsVapb-6s7qy7MPt7pxVbbReg&s"
            },
            {
                id: 22,
                title: "Теория струн",
                author: "Брайан Грин",
                year: 2022,
                category: "Физика",
                image: "https://urss.ru/covers500/122874.jpg"
            },
            {
                id: 23,
                title: "Нейронные сети",
                author: "Саймон Хайкин",
                year: 2021,
                category: "Искусственный интеллект",
                image: "https://img.labirint.ru/images/comments_pic/2302/1_68efa62efac6a2b3b47b0779445ea219_1673521266.jpg"
            },
            {
                id: 24,
                title: "Квантовые вычисления",
                author: "Майкл Нильсен",
                year: 2020,
                category: "Квантовые технологии",
                image: "https://i.livelib.ru/workpic/1002189731/200/20ce/__Kvantovye_vychisleniya_i_kvantovaya_informatsiya.jpg"
            },
            {
                id: 25,
                title: "Анализ данных",
                author: "Джон Веннабл",
                year: 2019,
                category: "Data Science",
                image: "https://imo10.labirint.ru/books/513050/cover.jpg/363-0"
            },
            {
                id: 26,
                title: "Теория хаоса",
                author: "Джеймс Глик",
                year: 2023,
                category: "Математика",
                image: "https://ir.ozone.ru/s3/multimedia-u/c1000/6864044898.jpg"
            },
            {
                id: 27,
                title: "Генетика",
                author: "Энтони Гриффитс",
                year: 2022,
                category: "Биология",
                image: "https://i.livelib.ru/workpic/1002276201/200/7bd3/__Genetika.jpg"
            },
            {
                id: 28,
                title: "Нанотехнологии",
                author: "Марк Ратнер",
                year: 2021,
                category: "Физика",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-obnYsS99qFdjAYjrSiz5DLzgynd0u1-DA&s"
            },
            {
                id: 29,
                title: "Криптография",
                author: "Брюс Шнайер",
                year: 2020,
                category: "Информационная безопасность",
                image: "https://imo10.labirint.ru/books/345501/cover.jpg/242-0",
                description: `
                    <p>Лучшее введение в алгоритмы с визуальными примерами:</p>
                    <ul>
                        <li>Поиск в ширину и глубину</li>
                        <li>Динамическое программирование</li>
                        <li>Жадные алгоритмы</li>
                        <li>Сложность O-нотации</li>
                    </ul>
                    <p>Более 400 иллюстраций и диаграмм.</p>
                `
            },
            {
                id: 30,
                title: "Теория игр",
                author: "Роджер Майерсон",
                year: 2019,
                category: "Математика",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6APBdwKydOUT1JrqtLenGBIML253u-jiyA&s",
                description: `
                <p>Фундаментальный труд нобелевского лауреата по экономике:</p>
                <ul>
                    <li>Равновесие Нэша</li>
                    <li>Аукционы и стратегии</li>
                    <li>Приложения в экономике</li>
                    <li>Психология принятия решений</li>
                </ul>
                <p>С примерами из реальной бизнес-практики.</p>
            `
            }
        ];

        function showBookDetails(bookId) {
            const book = books.find(b => b.id === bookId);
            if (book) {
                document.getElementById('book-detail-title').textContent = book.title;
                document.getElementById('book-detail-image').src = book.image;
                document.getElementById('book-detail-author').textContent = book.author;
                document.getElementById('book-detail-year').textContent = book.year;
                document.getElementById('book-detail-category').textContent = book.category;
                document.getElementById('book-detail-description').innerHTML = book.description;
                
                document.getElementById('catalog').style.display = 'none';
                document.getElementById('book-details').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

    // Функция для отображения всех книг
    function displayBooks(booksToDisplay) {
        const booksContainer = document.getElementById('books-list');
        booksContainer.innerHTML = '';
        
        booksToDisplay.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="book-cover">
                <h3>${book.title}</h3>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p><strong>Год издания:</strong> ${book.year}</p>
                <p><strong>Категория:</strong> ${book.category}</p>
                <button class="view-details" data-id="${book.id}">Подробнее</button>
            `;
            booksContainer.appendChild(bookElement);
        });

        // Добавляем обработчики для кнопок "Подробнее"
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const bookId = parseInt(this.getAttribute('data-id'));
                showBookDetails(bookId);
            });
        });
    }

    // Функция для отображения деталей книги
    function showBookDetails(bookId) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            document.getElementById('book-detail-title').textContent = book.title;
            document.getElementById('book-detail-image').src = book.image;
            document.getElementById('book-detail-image').alt = book.title;
            document.getElementById('book-detail-author').textContent = book.author;
            document.getElementById('book-detail-year').textContent = book.year;
            document.getElementById('book-detail-category').textContent = book.category;
            document.getElementById('book-detail-description').textContent = book.description;
            
            // Показываем секцию с деталями и скрываем каталог
            document.getElementById('catalog').style.display = 'none';
            document.getElementById('book-details').style.display = 'block';
            
            // Прокручиваем к началу секции
            document.getElementById('book-details').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Функция для возврата в каталог
    function backToCatalog() {
        document.getElementById('catalog').style.display = 'block';
        document.getElementById('book-details').style.display = 'none';
    }

    // Обработчик для кнопки "Вернуться в каталог"
    document.getElementById('back-to-catalog').addEventListener('click', backToCatalog);

    // Функция для поиска и перенаправления на книгу
    function searchAndRedirect() {
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        
        if (searchTerm === '') {
            displayBooks(books);
            return;
        }
        
        const foundBook = books.find(book => 
            book.title.toLowerCase().includes(searchTerm)
        );
        
        if (foundBook) {
            // Если книга найдена, показываем её детали
            showBookDetails(foundBook.id);
        } else {
            // Если книга не найдена, показываем все подходящие варианты
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm) ||
                book.category.toLowerCase().includes(searchTerm)
            );
            displayBooks(filteredBooks);
            
            if (filteredBooks.length === 0) {
                alert('Книга не найдена. Попробуйте другой запрос.');
            }
        }
    }

    // Инициализация - показываем все книги
    displayBooks(books);

    // Поиск книг
    document.getElementById('search-btn').addEventListener('click', searchAndRedirect);

    // Поиск при нажатии Enter
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchAndRedirect();
        }
    });

    // Обработка URL при загрузке страницы
    function handleUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            document.getElementById('search-input').value = searchQuery;
            searchAndRedirect();
        }
        
        const bookId = urlParams.get('book');
        if (bookId) {
            showBookDetails(parseInt(bookId));
        }
    }

    handleUrl();
});