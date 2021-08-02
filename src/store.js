import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    basePath: 'http://localhost:81/',
      events: [
        {
          id: 12,
          name: 'Акустический рок',
          img_path: 'guitar_rock.jpg',
          description: 'Исполнение любимых хитов русского рока в темноте дает возможность ощутить всю глубину эмоций. Все вызванные музыкой чувства  в "Невидимом мире" наделены максимальным пределом: любовь – возвышенная, ненависть – запредельная. Исполнитель Алексей Кречет.',
          duration: 60,
          people_amount: '8-20',
          cost: '50',
          costReal: 25,
          adults: 1,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 1
        },
        {
          id: 11,
          name: 'Русский рок',
          img_path: 'russian_rock.jpg',
          description: 'Наверное, у каждого есть любимая песня старого доброго русского рока? Из репертуара группы «Чайф», а может быть «Арии», или «Сплина»? Песня, которая возвращает в прошлое, в теплые воспоминания и заводит с новой силой. И вот теперь есть прекрасная возможность погрузиться в эту атмосферу вечной молодости и безудержного кайфа! А может, и открыть для себя новые смыслы в хорошо знакомых мелодиях… Ведь в темноте все воспринимается иначе! Испонение: кавер-группа Zapad-5 и Алексей Кречет.',
          duration: 60,
          people_amount: '8-20',
          cost: '50',
          costReal: 25,
          adults: 1,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 1
        },
        {
          id: 8,
          name: 'Мировые хиты XX века',
          img_path: 'world_hits.jpg',
          description: 'XX век — время разительных перемен, которые не обошли стороной и музыку. Мир услышал новые ритмы и аккорды: джаз и рок, блюз и рок-н-ролл, десятки новых музыкальных имен. Eagles, Gary Moore, Bob Dylan, Eric Clapton и многие другие исполнители стали уже легендами, и мы сможем прикоснуться к их гениальности на нашем концерте, который проходит в полной темноте. «Слушаю не музыку – слушаю свою душу», - сказала Марина Цветаева, гениальная поэтесса прошлого века. Это именно тот эффект, который ожидает наших слушателей на концерте «Мировые хиты XX века» в исполнении незрячих музыкантов кавер-группы «ZAPAD 5» и Алексея Кречета.',
          duration: 60,
          people_amount: '8-20',
          cost: '50',
          costReal: 25,
          adults: 1,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 1
        },
        
        {
          id: 2,
          name: 'Богемская рапсодия',
          img_path: 'rapsodia.jpg',
          description: '«Старые сказки повзрослеют, но никогда не умрут». Фредди Меркьюри действительно знал, что это значит. Встреча с шедеврами рок-музыки, над которыми не властно время. Ритмы знаковой группы Queen, поражающие бешеным драйвом и магической энергетикой, в темноте заходят еще круче! Стоит попробовать!',
          duration: 60,
          people_amount: '8-20',
          cost: '50',
          costReal: 25,
          adults: 1,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 1
        },
        {
          id: 9,
          name: 'Детский День Рождения в темноте',
          img_path: 'bday.jpg',
          description: 'Новый формат праздника, который состоит из двух частей: квеста в темноте и чаепития в уютном итальянском дворике, можно с заказанными родителями угощеньями и тортиком со свечками. Игровая программа-квест «Детективное агентство», или  «Гарри Поттер», «Холодное сердце» (на выбор) для детей 8-12 лет приглашает окунуться в загадочную атмосферу необычных открытий…в полной темноте!  Опытные тренеры дают задания, при выполнении которых ребятам придется задействовать все свои чувства – обоняние, слух, осязание, интуицию… Все, кроме зрения! Дети не просто играют, но и учатся погружаться в себя, концентрироваться на поставленной задаче, фантазировать, развивать свою интуицию, слушать себя и других.',
          duration: 60,
          people_amount: '4-15',
          cost: '150+',
          costReal: '75+',
          adults: 0,
          family: 1,
          children: 1,
          corporate: 0,
          couple: 0
        },
        {
          id: 10,
          name: 'Выпускной для 4, 9 классов',
          img_path: 'graduation.jpg',
          description: 'Новый формат праздника, который состоит из двух частей: квеста в темноте и чаепития в уютном итальянском дворике, с заказанными родителями угощеньями. Наших детей уже сложно чем-то удивить. Они всё уже видели. Что про Минск говорить, когда пол-Европы было объезжено. Дети пресытились искусственными развлечениями. И вот в такие моменты хочется чего-то настоящего, правда? Такого, чтоб не ублажало, а трогало, чтоб не на поверхности, а внутри, чтоб не по карману било, а в самое сердце. Вечные ценности - вот когда про них вспоминаем... Особенно в связи с таким событием, как выпускной. На нашей интерактивной программе-квесте мы научим детей работать в команде, слушать себя и других, руководствоваться интуицией и ориентироваться в необычной ситуации, и это станет новым и очень ценным опытом в жизни.',
          duration: 90,
          people_amount: '15',
          cost: '300',
          costReal: '150',
          adults: 0,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 0
        },
        {
          id: 1,
          name: 'BLUEGRASSafari',
          img_path: 'safari.jpg',
          description: 'Хотите совершить захватывающий и головокружительный прыжок в Америку XIX века? Путешествия во времени – это реальность! Под яркие мотивы и краски традиционных музыкальных инструментов - фиддл, банджо, губная гармоника, казу, гитара - вы окунетесь в чарующую атмосферу прерий Великих равнин, дельты реки Миссисипи, вдохнете воздух гор Аппалачи, побываете на сельской вечеринке, услышите историю любви. Вашими гидами в этом приключении В ПОЛНОЙ ТЕМНОТЕ будут музыканты группы Garlic & Pumpkin Stringband. Мы уже готовы отправиться в путь, а вы?!',
          duration: 60,
          people_amount: '8-20',
          cost: '50',
          costReal: 25,
          adults: 1,
          family: 1,
          children: 1,
          corporate: 1,
          couple: 1
        },

      {
        id: 7,
        name: 'Легенды Вероны',
        img_path: 'verona.jpg',
        description: 'Загадочное сочетание темноты, пряных запахов и лирических итальянских мелодий откроет удивительный мир, полный волнующих чувств и тайных фантазий. В воздухе пахнет летом и морем, звучат ласковые и нежные мотивы, мысли и чувства приобретают новое направление, словом, погружаемся в романтику!',
        duration: 60,
        people_amount: '8-20',
        cost: '50',
        costReal: 25,
        adults: 1,
        family: 1,
        children: 1,
        corporate: 1,
        couple: 1
      },
    
      {
        id: 3,
        name: 'Страстные ритмы фламенко',
        img_path: 'flamenco.jpg',
        description: 'Головокружительные и захватывающие аккорды испанской музыки в полной темноте скажут то, что нельзя выразить с помощью слов. В голове проносятся образы цыганской страсти под звуки кастаньет, ощущается терпкий и немного сладковатый вкус испанского вина, сердце то замирает, то готово выскочить из груди... Вперед за яркими эмоциями и бушующими чувствами!',
        duration: 60,
        people_amount: '8-20',
        cost: '50',
        costReal: 25,
        adults: 1,
        family: 1,
        children: 1,
        corporate: 1,
        couple: 1
      },
      {
        id: 4,
        name: 'Свидание в темноте',
        img_path: 'date.jpg',
        description: 'О чем мы думаем, собираясь на свидание? Наверняка вертятся мысли: "Хорошо ли я выгляжу? Вызываю ли симпатию?" В этот момент мы невольно прячемся под маской идеального себя. А ведь так хочется оставаться самими собой, быть искренними и общаться просто... без масок! Предлагаем вам возможность познать "невидимый мир" друг друга, где вы сможете слушать и слышать, чувствовать и доверять... Ведь полная темнота открывает новый взгляд на привычные стороны жизни. Такое свидание запомнится надолго!',
        duration: 90,
        people_amount: '2',
        cost: '100',
        costReal: 50,
        adults: 1,
        family: 0,
        children: 0,
        corporate: 0,
        couple: 1
      },
      {
        id: 5,
        name: 'Мир наощупь (дети)',
        img_path: 'world_children.jpg',
        description: 'Помните свое детство? Взрослые, отправляя вас спать, желают спокойной ночи и выключают свет. Чем для вас была тогда темнота? Чем-то пугающим? Неизведанным? И даже опасным? А может, воображение рисовало добрых магов и сказочных фей? Поволоку таинственности помогут приоткрыть наши добрые волшебники-гиды.',
        duration: 60,
        people_amount: '4-12',
        cost: '30',
        costReal: 15,
        adults: 0,
        family: 1,
        children: 1,
        corporate: 1,
        couple: 0
      },
      {
        id: 6,
        name: 'Мир наощупь (взрослые)',
        img_path: 'world_adults.jpg',
        description: 'Темнота для многих обозначает Ничто. То самое Ничто, в котором находится Всё, ответы на все вопросы. Правильно соприкасаясь и работая с темнотой, мы можем разглядеть и сделать Всё. Или очень многое. Мы будем руководствоваться интуицией, чувствами и умением взаимодействовать с другими. Наши профессиональные проводники в мир темноты в этом нам помогут!',
        duration: 60,
        people_amount: '4-10',
        cost: '40',
        costReal: 20,
        adults: 1,
        family: 1,
        children: 0,
        corporate: 1,
        couple: 1
      },
    ],
    phones: [
      {
        id: 1,
        number: '+375-25-502-22-32'
      },
      {
        id: 2,
        number: '+375-33-342-22-32'
      },
    ],
    reviews: [
      {
        id: 1,
        author: 'Александр',
        date: '2021-01-17',
        text: 'Побывав в невидимом мире, для себя понял одну вещь, что люди которые видят всё не до конца понимают, как прекрасен этот мир. Побывав в абсолютной темноте, не видя ничего, опираясь только на слух, обоняние и интуицию, ты видишь этот мир совершенно с другой стороны. Вещи которые тебе знакомы, становятся совсем не знакомыми. Самое главное, это приятная атмосфера, приятные люди, настоящие профессионалы своего дела. Хочется пожелать успехов в большом и хорошем деле. Всем советую посетить.'
      },
      {
        id: 2,
        author: 'Михаил',
        date: '2021-01-17',
        text: 'Спасибо большое за атмосферу, все было замечательно. Советую всем для посещений, для открытий новых ощущений и возможностей. Увидеть мир с другой стороны. Спасибо тренерам за профессионализм, тепло и открытость. Успеха и процветания вашему центру.'
      },
      {
        id: 3,
        author: 'Алена',
        date: '2021-01-18',
        text: 'Спасибо организаторам проекта «Невидимый мир» за приглашение на презентационное мероприятие. Тёплая атмосфера, интересные игры, прекрасная музыка, весёлое общение и всё это проходило в полной темноте. Не буду раскрывать подробностей, приходите и прочувствуйте сами, ощутите этот многогранный невидимый мир, зарядитесь позитивом и хорошо проведите время. С удовольствием приду на Ваши дальнейшие мероприятия и с радостью поделюсь с друзьями).'
      },
      {
        id: 4,
        author: 'Настя',
        date: '2021-01-18',
        text: 'Совершенно новый формат времяпрепровождения! С первого взгляда простые действия и задания превращаются настоящие квесты)) полная темнота обостряет другие органы восприятия и лишний раз напоминает о том, как здорово просто видеть! Очень рекомендую к посещению!'
      },
      {
        id: 5,
        author: 'Надежда',
        date: '2021-01-18',
        text: 'Меня зовут Надежда и я хочу поделиться впечатлениями об обсолютно новом проекте, на котором мне посчастливилось побывать. Теперь и в Минске будут проходить разные  мероприятия (праздники, концерты, свидания) в полной темноте. Когда отключается один из органов чувств (зрение), то другие (обоняние, слух, осознание) усиливаются. Я считаю, что это прекрасная возможность познать себя и других.'
      },
      {
        id: 6,
        author: 'Геннадий',
        date: '2021-01-18',
        text: 'Все классно! Новизна ощущений, абсолютно другое восприятие реальности, обострение чувств. Приятное ощущение в темноте, касание рук, объединение людей. Голоса и руки – это объединяет. Повышение КПД остальных органов чувств. Это как судака ночью ловить на джиг. Острое ощущение. Участие в тренингах НМ помогает избавиться от комплексов, увеличивает степени свободы, снимаются условности. '
      },
      {
        id: 7,
        author: 'Екатерина',
        date: '2021-01-18',
        text: ' Участвовала в таком мероприятии впервые. Поразило музыкальное сопровождение, было интересно сделать все то, о чем ты мечтал бы сделать в темноте, прочувствовать запахи, определить что это на ощупь, сориентироваться в пространстве, то есть осознанно задействовать все другие органы чувств помимо зрения. Думаю, это одна из тех вещей, которую каждому стоит попробовать минимум раз в жизни, чтобы ощутить ее по-новому.'
      },
    ]
  },
  getters: {
    getOneEvent(state){
      return state.events.find(evt => {evt.id == this.$route.params.eventId})
    },
    findThreeEvt(state){
      let tmpArr = [];
      while (tmpArr.length < 3){
        let newEvt = state.events[Math.floor(Math.random() * state.events.length)];
        if(!tmpArr.includes(newEvt)){
          tmpArr.push(newEvt);
        }
      }
      return tmpArr;
    },
    getEventById: state => id => {
      return state.events.find(evt => evt.id === id);
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
