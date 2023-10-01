// 
import { iot_categories_LS, ia_categories_LS, programming_language_categories_LS } from "../local_storage/get_keys.js";

/* capture current date */
const date_time_now = {
    date_time: new Date().toLocaleString(),
};

/* database fake */
export const data_cards_DB = [
    {
        id: 1,
        title: 'Adobe Firefly',
        banner_home: {
            src: '/assets/images/banners/ia/adobe_firefly.jpg',
            alt: 'Imagem ilustrativa logo IA.',
        },
        banner_category: {
            src: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
            alt: 'Imagem ilustrativa logo IA.',
        },
        category: 'ia',
        display_category: 'Inteliência Artificial',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: ia_categories_LS.adobe_firefly,
        first_characters: '<strong>Primeiro motor de IA para edição de imagens</strong> que possui preenchimento generativo de imagens.',
        description: `<strong>O Adobe Firefly</strong> é o primeiro motor de IA para <strong>edição de imagens</strong> que possui preenchimento generativo de imagens. Esta característica do Firefly permite com que o programa faça <strong>alterações nas imagens sem danificar a estrutura</strong> dela, dando a possibilidade dos usuários em adicionar e remover elementos, podendo também estender as imagens usando o <strong>preenchimento generativo</strong> e preenchê-las com com criações da <strong>própria IA</strong><br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Adobe_Firefly" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 2,
        title: 'JavaScript',
        banner_home: {
            src: '/assets/images/banners/programming/javascript.jpg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        category: 'programming',
        display_category: 'Linguagem de Programação',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: programming_language_categories_LS.javascript,
        first_characters: '<strong>Linguagem de programação</strong> interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
        description: `<strong>JavaScript</strong> é uma linguagem de programação <strong>interpretada estruturada</strong>, de <strong>script</strong> em alto nível com <strong>tipagem dinâmica fraca</strong> e multiparadigma. Juntamente com HTML e CSS, o JavaScript é <strong>uma das três principais tecnologias</strong> da World Wide Web.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/JavaScript" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 3,
        title: 'Google Glass',
        banner_home: {
            src: '/assets/images/banners/iot/google_glass.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        category: 'iot',
        display_category: 'Internet das Coisas',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: iot_categories_LS.google_glass,
        first_characters: '<strong>Acessório em forma de óculos</strong> que possibilita a interação dos usuários com conteúdos em realidade aumentada',
        description: `O <strong>Google Glass</strong> é um acessório em forma de óculos que <strong>possibilita a interação</strong> dos usuários com diversos conteúdos em <strong>realidade aumentada</strong>. Também chamado de Project Glass, o eletrônico é capaz de <strong>tirar fotos a partir de comandos de voz</strong>, enviar mensagens instantâneas e realizar <strong>vídeoconferências</strong>.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Project_Glass" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 4,
        title: 'Hand Talk',
        banner_home: {
            src: '/assets/images/banners/ia/handtalk.jpg',
            alt: 'Imagem ilustrativa logo IA.',
        },
        banner_category: {
            src: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
            alt: 'Imagem ilustrativa logo IA.',
        },
        category: 'ia',
        display_category: 'Inteliência Artificial',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: ia_categories_LS.hand_talk,
        first_characters: '<strong>Traduz automaticamente</strong> textos e áudios em português para Libras e para a Língua Americana de Sinais (ASL).',
        description: `Por meio de inteligência artificial, o <strong>aplicativo HandTalk</strong> promove a inclusão de pessoas surdas. A plataforma traduz automaticamente textos e áudios em português para a <strong>Língua Brasileira de Sinais (Libras) e para a Língua Americana de Sinais (ASL)</strong>. A ferramenta usa um avatar digital, o personagem chamado Hugo, para <strong>desenvolver os gestos e facilitar a comunicação com pessoas surdas ou com dificuldade auditiva</strong>. Em 2015, foi eleito como o melhor aplicativo de acessibilidade da América Latina pela ONU.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Hand_Talk" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 5,
        title: 'Python',
        banner_home: {
            src: '/assets/images/banners/programming/python.jpeg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        category: 'programming',
        display_category: 'Linguagem de Programação',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: programming_language_categories_LS.python,
        first_characters: '<strong>Linguagem de programação</strong> de alto nível, interpretada  de script, imperativa, orientada a objetos.',
        description: `Python é uma <strong>linguagem de programação de alto nível</strong>, interpretada de script, imperativa, orientada a objetos, funcional,<strong> de tipagem dinâmica e forte</strong>. Foi lançada por Guido van Rossum em 1991.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 6,
        title: 'Smartwatch',
        banner_home: {
            src: '/assets/images/banners/iot/smartwatch.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        category: 'iot',
        display_category: 'Internet das Coisas',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: iot_categories_LS.smartwatch,
        first_characters: '<strong>Relógio de pulso computadorizado</strong> com funcionalidades que vão além de mostrar as horas.',
        description: `É um <strong>relógio de pulso computadorizado</strong> com funcionalidades que <strong>vão além de mostrar as horas</strong>, e é com frequência comparado aos assistentes digitais pessoais.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Smartwatch" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 7,
        title: 'PHP',
        banner_home: {
            src: '/assets/images/banners/programming/php.jpeg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
            alt: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        },
        category: 'programming',
        display_category: 'Linguagem de Programação',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: programming_language_categories_LS.php,
        first_characters: '<strong>Linguagem de programação</strong> interpretada livre, usada para o desenvolvimento de aplicações no lado do servidor.',
        description: `PHP é uma <strong>linguagem de programação interpretada livre</strong>, usada originalmente apenas para o <strong>desenvolvimento de aplicações</strong> presentes e atuantes<strong> no lado do servidor</strong>, capazes de gerar conteúdo dinâmico na World Wide Web.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/PHP" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 8,
        title: 'Midjourney',
        banner_home: {
            src: '/assets/images/banners/ia/midjourney.jpg',
            alt: 'Imagem ilustrativa logo IA.',
        },
        banner_category: {
            src: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
            alt: 'Imagem ilustrativa logo IA.',
        },
        category: 'ia',
        display_category: 'Inteliência Artificial',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: ia_categories_LS.midjourney,
        first_characters: '<strong>Ferramenta que usa algoritmos</strong> avançados de aprendizado de máquina para gerar imagens a partir de texto.',
        description: `<strong>Criado pela Midjourney Inc.</strong>, o programa é uma ferramenta que usa <strong>algoritmos avançados de aprendizado de máquina</strong> para gerar imagens a partir de texto. Alguns <strong>resultados são impressionantes</strong>, quase como retirados de artes conceituais para filmes, <strong>enquanto outros podem ser bizarramente</strong> engraçados.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Midjourney" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
    {
        id: 9,
        title: 'Drone',
        banner_home: {
            src: '../../../assets/images/banners/iot/drone.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        banner_category: {
            src: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
            alt: 'Imagem ilustrativa logo IOT.',
        },
        category: 'iot',
        display_category: 'Internet das Coisas',
        date: `Criado em: ${date_time_now.date_time}`,
        views_ls: iot_categories_LS.drone,
        first_characters: '<strong>Veículo aéreo não tripulado</strong>, controlado sem a necessidade de pilotos embarcados para ser guiada.',
        description: `<strong>Veículo aéreo não tripulado</strong>, também conhecido como drone, é todo e qualquer tipo de aeronave que pode ser <strong>controlada nos 3 eixos</strong> e que não necessite de <strong>pilotos embarcados</strong> para ser guiada.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Ve%C3%ADculo_a%C3%A9reo_n%C3%A3o_tripulado" target="_blank" rel="external"> Saiba mais.</a></strong>`,
        profile: {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        },
    },
];