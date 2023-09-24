/* import localStorage */
import { get_views_posts } from "../local_storage/get_views_posts.js";

/* db fake */
export const db = [
    {
        indice_1: 1,
        title_1: 'Adobe Firefly',
        attribute_1: 'src',
        address_1: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
        alt_1: 'Imagem ilustrativa logo IA.',
        views_1: get_views_posts.ia.adobe_firefly,
        text_1: `<strong>O Adobe Firefly</strong> é o primeiro motor de IA para <strong>edição de imagens</strong> que possui preenchimento generativo de imagens. Esta característica do Firefly permite com que o programa faça <strong>alterações nas imagens sem danificar a estrutura</strong> dela, dando a possibilidade dos usuários em adicionar e remover elementos, podendo também estender as imagens usando o <strong>preenchimento generativo</strong> e preenchê-las com com criações da <strong>própria IA</strong><br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Adobe_Firefly" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_2: 2,
        title_2: 'JavaScript',
        attribute_2: 'src',
        address_2: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
        alt_2: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        views_2: get_views_posts.programming.js,
        text_2: `<strong>JavaScript</strong> é uma linguagem de programação <strong>interpretada estruturada</strong>, de <strong>script</strong> em alto nível com <strong>tipagem dinâmica fraca</strong> e multiparadigma. Juntamente com HTML e CSS, o JavaScript é <strong>uma das três principais tecnologias</strong> da World Wide Web.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/JavaScript" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_3: 3,
        title_3: 'Google Glass',
        attribute_3: 'src',
        address_3: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
        alt_3: 'Imagem ilustrativa logo IOT.',
        views_3: get_views_posts.iot.google_glass,
        text_3: `O <strong>Google Glass</strong> é um acessório em forma de óculos que <strong>possibilita a interação</strong> dos usuários com diversos conteúdos em <strong>realidade aumentada</strong>. Também chamado de Project Glass, o eletrônico é capaz de <strong>tirar fotos a partir de comandos de voz</strong>, enviar mensagens instantâneas e realizar <strong>vídeoconferências</strong>.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Project_Glass" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_4: 4,
        title_4: 'Hand Talk',
        attribute_4: 'src',
        address_4: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
        alt_4: 'Imagem ilustrativa logo IA.',
        views_4: get_views_posts.ia.hand_talk,
        text_4: `Por meio de inteligência artificial, o <strong>aplicativo HandTalk</strong> promove a inclusão de pessoas surdas. A plataforma traduz automaticamente textos e áudios em português para a <strong>Língua Brasileira de Sinais (Libras) e para a Língua Americana de Sinais (ASL)</strong>. A ferramenta usa um avatar digital, o personagem chamado Hugo, para <strong>desenvolver os gestos e facilitar a comunicação com pessoas surdas ou com dificuldade auditiva</strong>. Em 2015, foi eleito como o melhor aplicativo de acessibilidade da América Latina pela ONU.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Hand_Talk" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_5: 5,
        title_5: 'Python',
        attribute_5: 'src',
        address_5: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
        alt_5: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        views_5: get_views_posts.programming.python,
        text_5: `Python é uma <strong>linguagem de programação de alto nível</strong>, interpretada de script, imperativa, orientada a objetos, funcional,<strong> de tipagem dinâmica e forte</strong>. Foi lançada por Guido van Rossum em 1991.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_6: 6,
        title_6: 'Smartwatch',
        attribute_6: 'src',
        address_6: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
        alt_6: 'Imagem ilustrativa logo IOT.',
        views_6: get_views_posts.iot.smartwatch,
        text_6: `É um <strong>relógio de pulso computadorizado</strong> com funcionalidades que <strong>vão além de mostrar as horas</strong>, e é com frequência comparado aos assistentes digitais pessoais.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://en.wikipedia.org/wiki/Smartwatch" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_7: 7,
        title_7: 'PHP',
        attribute_7: 'src',
        address_7: 'https://cdn.pixabay.com/photo/2023/02/07/08/36/computer-language-7773520_640.jpg',
        alt_7: 'Imagem ilustrativa de exemplos de linguagens de programação.',
        views_7: get_views_posts.programming.php,
        text_7: `PHP é uma <strong>linguagem de programação interpretada livre</strong>, usada originalmente apenas para o <strong>desenvolvimento de aplicações</strong> presentes e atuantes<strong> no lado do servidor</strong>, capazes de gerar conteúdo dinâmico na World Wide Web.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/PHP" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_8: 8,
        title_8: 'Midjourney',
        attribute_8: 'src',
        address_8: 'https://media.istockphoto.com/id/1452604857/pt/foto/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=612x612&w=0&k=20&c=GfPfzOtvAxonlQP997qTJ50qnCaaSHLlYQz67iEUC98=',
        alt_8: 'Imagem ilustrativa logo IA.',
        views_8: get_views_posts.ia.midjourney,
        text_8: `<strong>Criado pela Midjourney Inc.</strong>, o programa é uma ferramenta que usa <strong>algoritmos avançados de aprendizado de máquina</strong> para gerar imagens a partir de texto. Alguns <strong>resultados são impressionantes</strong>, quase como retirados de artes conceituais para filmes, <strong>enquanto outros podem ser bizarramente</strong> engraçados.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Midjourney" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
    {
        indice_9: 9,
        title_9: 'Drone',
        attribute_9: 'src',
        address_9: 'https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg',
        alt_9: 'Imagem ilustrativa logo IOT.',
        views_9: get_views_posts.iot.drone,
        text_9: `<strong>Veículo aéreo não tripulado</strong>, também conhecido como drone, é todo
        e qualquer tipo de aeronave que pode ser <strong>controlada nos 3 eixos</strong> e
        que não necessite de <strong>pilotos embarcados</strong> para ser guiada.<br /><br />
        <strong><i class='bx bxs-hand-right bx-flashing'></i><a href="https://pt.wikipedia.org/wiki/Ve%C3%ADculo_a%C3%A9reo_n%C3%A3o_tripulado" target="_blank" rel="external"> Saiba mais.</a></strong>`,
    },
];