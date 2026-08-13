(()=>{'use strict';
const D=window.APP_DATA;if(!D)throw new Error('Datos no cargados');

const LISBON_DETAIL=[
{time:'09:00–09:20',title:'Bolt hasta Senhora do Monte',image:'images/real-lisboa.jpg',route:'Lisboa Camping → Miradouro da Senhora do Monte',text:'Empezad arriba para que el resto del día sea casi todo de bajada. Al llegar, buscad de un vistazo el Castelo de São Jorge, Baixa, el Tajo y las colinas de Lisboa.',look:['Panorámica general de la ciudad','Primeros tranvías y tejados','Foto familiar de inicio']},
{time:'09:20–10:00',title:'Senhora do Monte y Graça',image:'images/real-lisboa.jpg',route:'Largo Monte → Rua da Senhora do Monte → Largo da Graça',text:'Disfrutad el mirador y bajad caminando hacia Graça. Entrad unos minutos en la Igreja da Graça si os apetece y fijaos en azulejos, ropa tendida, pequeñas tiendas y tranvías cruzando el barrio.',look:['Miradouro da Senhora do Monte','Largo da Graça','Igreja da Graça','Azulejos y vida de barrio']},
{time:'10:10–10:25',title:'Tranvía 28E',image:'images/real-lisboa-tram.jpg',route:'Graça → Portas do Sol',text:'Subid al 28E en Graça y haced solo este tramo corto. Es suficiente para vivir el tranvía clásico atravesando calles estrechas sin perder media mañana dentro del vagón.',look:['Curvas entre fachadas','Calçada de São Vicente','El sonido y traqueteo del 28E']},
{time:'10:25–10:45',title:'Portas do Sol',image:'images/real-lisboa.jpg',route:'Parada Portas do Sol → mirador',text:'Bajad del tranvía y asomaos al mirador. Es una de las imágenes más reconocibles de Alfama: tejados, iglesias y Tajo al fondo.',look:['Mirador','Tejados de Alfama','Tranvías pasando junto al balcón']},
{time:'10:45–11:00',title:'Túnel cómic · História de Lisboa',image:'images/real-lisboa.jpg',route:'Portas do Sol → Rua Norberto de Araújo',text:'Buscad el pequeño túnel junto a la escadaria de Rua Norberto de Araújo. El mural de Nuno Saraiva cuenta la historia de Lisboa como un cómic gigante.',look:['Terremoto de 1755','Navegantes','Revolución de los Claveles','Viñetas favoritas de las niñas']},
{time:'11:00–11:20',title:'Santa Luzia',image:'images/real-lisboa.jpg',route:'Rua Norberto de Araújo → Miradouro de Santa Luzia',text:'Está a pocos minutos. No miréis solo el paisaje: buscad los paneles de azulejos, las buganvillas, los bancos y las vistas sobre los tejados.',look:['Paneles de azulejos','Buganvillas','Mirador sobre Alfama']},
{time:'11:20–12:10',title:'Alfama por dentro',image:'images/real-lisboa-tram.jpg',route:'Beco de Santa Helena → Largo de São Miguel → Rua de São Miguel → Chafariz de Dentro',text:'Aquí merece la pena perderse un poco. Bajad por calles pequeñas en lugar de seguir siempre la vía principal y buscad los retratos del proyecto Alma de Alfama impresos sobre las paredes.',look:['Retratos de Alma de Alfama','Gatos','Puertas de colores','Ropa tendida','Pequeños altares y escaleras']},
{time:'12:10–13:20',title:'Castelo de São Jorge',image:'images/castelo.webp',route:'Alfama → Rua do Salvador → Santa Cruz do Castelo',text:'Subid al castillo y priorizad murallas, torres y vistas. Con una hora larga es suficiente para disfrutarlo sin sacrificar el resto del recorrido.',look:['Murallas','Torres','Pavos reales','Panorámica de Lisboa']},
{time:'13:20–13:45',title:'Bajada a la Sé',image:'images/real-lisboa-tram.jpg',route:'Santa Cruz do Castelo → Bartolomeu de Gusmão → Largo da Sé',text:'Bajad hacia la catedral. La mejor escena está muchas veces fuera: la fachada románica con el tranvía pasando justo delante.',look:['Fachada de la Sé','Rosetón','Tranvía frente a la catedral']},
{time:'14:00–15:00',title:'Comida · Sé / Baixa',image:'images/baixa.webp',route:'Entorno de Sé → Baixa',text:'Parad a comer sin alejaros demasiado del recorrido. Después seguid bajando hacia el río; a esta hora conviene reservar energía para la tarde y el eclipse.',look:['Tasca portuguesa sencilla','Sombra y descanso','Agua para toda la tarde']},
{time:'15:00–15:30',title:'Praça do Comércio',image:'images/baixa.webp',route:'Sé → Rua da Conceição → Arco da Rua Augusta → Praça do Comércio',text:'Salid de las calles estrechas hacia la gran plaza abierta al Tajo. Acercaos al arco y a las escaleras del río para notar el cambio total de escala de la ciudad.',look:['Arco da Rua Augusta','Estatua de José I','Escaleras junto al Tajo']},
{time:'15:30–16:00',title:'Rua Augusta y Rossio',image:'images/baixa.webp',route:'Praça do Comércio → Rua Augusta → Rossio',text:'Subid caminando por Rua Augusta. Mirad también al suelo: la calçada portuguesa forma parte del paisaje de Lisboa tanto como sus fachadas.',look:['Calçada portuguesa','Fachadas de Baixa','Praça do Rossio']},
{time:'16:00–16:20',title:'Fado Vadio',image:'images/real-lisboa.jpg',route:'Rossio → Escadinhas de São Cristóvão',text:'Haced un pequeño desvío hasta las Escadinhas de São Cristóvão para ver el mural Fado Vadio, lleno de personajes y símbolos de la cultura del fado.',look:['Personajes del mural','Pan, vino e instrumentos','Escalinata']},
{time:'16:20–16:40',title:'Beco das Farinhas · retratos',image:'images/real-lisboa.jpg',route:'São Cristóvão → Beco das Farinhas',text:'A pocos minutos encontraréis A Tribute, los retratos de vecinos mayores impresos directamente sobre las fachadas. Es una de esas pequeñas cosas que hacen que Lisboa se sienta vivida.',look:['Retratos en las paredes','Calles de Mouraria','Detalles cotidianos']},
{time:'16:40–17:15',title:'Chiado y Carmo',image:'images/chiado.webp',route:'Mouraria → Rua do Carmo → Largo do Carmo → Rua Garrett → Camões',text:'Terminad la ruta por Chiado: pasad junto a Santa Justa, entrad en Largo do Carmo y caminad por Rua Garrett hasta Praça Luís de Camões. Buen momento para helado o café.',look:['Elevador de Santa Justa por fuera','Convento do Carmo','Rua Garrett','Praça Luís de Camões']},
{time:'17:15–17:30',title:'Bica opcional',image:'images/chiado.webp',route:'Camões → Calhariz → Elevador da Bica',text:'Solo si vais con energía. Es corto y muy fotogénico. Si vais cansados, saltadlo sin dudar y pedid ya el Bolt al camping.',look:['Funicular amarillo','Rua da Bica de Duarte Belo','Foto desde la parte alta']},
{time:'17:30–18:10',title:'Regreso al camping',image:'images/photo-road.jpg',route:'Chiado / Bica → Lisboa Camping',text:'Pedid Bolt y volved con margen. Coged gafas homologadas, agua, algo de picar y descansad unos minutos antes de salir hacia el eclipse.',look:['Gafas ISO 12312-2','Agua','Batería del móvil','Algo de abrigo fino']},
{time:'18:15–20:29',title:'Eclipse · Moinho do Penedo',image:'images/real-lisboa.jpg',route:'Lisboa Camping → Miradouro do Moinho do Penedo',text:'Llegad con tiempo y buscad horizonte despejado hacia el oeste. 18:39 comienza, 19:36 es el máximo y 20:29 termina. Al ser parcial, las gafas deben mantenerse puestas siempre que miréis al Sol.',look:['Cambio de luz','Sombras más definidas','Máximo a las 19:36','Foto del ambiente, no del Sol sin filtro']}
];

const LISBON_D13_DETAIL=[
{time:'08:30–10:40',title:'Piscina, desayuno y recoger',image:'images/lisboa.webp',route:'Lisboa Camping',text:'Última mañana en el camping. Desayuno, piscina para las niñas, duchas y furgo completamente recogida. Preparad también el tupper, agua fría y pareo para el picnic.',look:['Bañadores y toallas secos','Tupper preparado','Agua fría','Furgo lista para salir']},
{time:'11:00–11:25',title:'Camping → Belém',image:'images/photo-road.jpg',route:'Lisboa Camping → Av. Brasília / Restelo',text:'Salid con la T5 hacia Belém. Intentad primero los aparcamientos de superficie de Av. Brasília / Restelo, al oeste de la Torre. Antes de dejarla, comprobad siempre la señalización: solo usad una plaza que no esté regulada ni prohibida para vuestra camper.',look:['Señalización vertical','Ausencia de parquímetro/EMEL','Guardar ubicación de la furgo','Nada visible dentro']},
{time:'11:25–12:05',title:'Jerónimos',image:'images/real-lisboa.jpg',route:'Parking Belém → Mosteiro dos Jerónimos',text:'Id andando hasta Jerónimos. Para ahorrar tiempo y dinero, podéis priorizar iglesia y exterior; el claustro es de pago. Fijaos en la arquitectura manuelina y en los motivos marinos tallados en piedra.',look:['Portada sur','Cuerdas de piedra','Motivos marinos','Tumba de Vasco da Gama en la iglesia']},
{time:'12:05–12:30',title:'Pastéis de Belém',image:'images/real-lisboa.jpg',route:'Jerónimos → Rua de Belém',text:'Parada corta para probar el pastel caliente. Canela y azúcar al gusto. Si hay mucha cola para mesa, comprad para llevar y continuad.',look:['Azulejos interiores','Obrador si es visible','Pastel caliente con canela']},
{time:'12:35–13:00',title:'Padrão dos Descobrimentos',image:'images/real-lisboa.jpg',route:'Praça do Império → paseo del Tajo → Padrão',text:'Bajad hacia el río. En la Rosa dos Ventos buscad países y antiguas rutas marítimas; es una parada más divertida si la convertís en misión.',look:['Rosa dos Ventos','Portugal, Brasil e India','Navegantes','Puente 25 de Abril']},
{time:'13:00–13:20',title:'Paseo hacia la Torre',image:'images/real-lisboa.jpg',route:'Padrão → paseo junto al Tajo → Torre de Belém',text:'Caminad junto al río hasta la Torre. Es un tramo agradable y completamente lineal.',look:['Tajo','Monumento a los Combatientes','Torre apareciendo al fondo']},
{time:'13:20–13:45',title:'Torre de Belém',image:'images/real-lisboa.jpg',route:'Jardim da Torre de Belém',text:'Yo no perdería tiempo haciendo cola para entrar. Rodeadla por fuera, acercaos al agua y buscad el pequeño rinoceronte esculpido.',look:['Rinoceronte de piedra','Garitas','Detalles manuelinos','Foto familiar junto al Tajo']},
{time:'13:45–14:05',title:'Volver a la furgo',image:'images/photo-road.jpg',route:'Torre → parking de Belém',text:'Regresad a la T5 y poned rumbo a Tapada das Necessidades. Así lleváis el tupper directamente y no dependéis de Bolt ni de cargar con él todo el día.',look:['Tupper','Agua','Pareo o manta','Gorras']},
{time:'14:15–15:15',title:'Picnic en Necessidades',image:'images/real-lisboa.jpg',route:'Belém → Tapada / Parque das Necessidades',text:'Buscad aparcamiento legal en las calles del perímetro y entrad al parque con el tupper. Elegid sombra o mesas de picnic y descansad de verdad durante la hora de más calor.',look:['Mesas de picnic','Árboles y sombra','Jardín histórico','Rincón favorito de Soraya']},
{time:'15:15–15:30',title:'Furgo → LX Factory',image:'images/photo-road.jpg',route:'Necessidades → Alcântara / LX Factory',text:'Volved a la T5 y conducid hasta LX. Probad primero el aparcamiento del recinto si admite vuestra camper y hay plaza; si no, buscad superficie legal en el entorno. Como plan B tenéis el parking EMEL de Alcântara.',look:['Altura de acceso','Señalización de estacionamiento','Nada visible en la furgo']},
{time:'15:30–15:45',title:'LX · encontrar la abeja',image:'images/real-lisboa.jpg',route:'Entrada LX Factory → calle principal',text:'Nada más entrar, misión para las niñas: encontrar la gran abeja de Bordalo II hecha con materiales de desecho. Después mirad paredes, puertas y escaleras.',look:['Abeja de Bordalo II','Murales','Grafitis','Restos industriales']},
{time:'15:45–16:15',title:'Ler Devagar',image:'images/real-lisboa.jpg',route:'Calle principal → Ler Devagar',text:'La parada imprescindible. Entrad, subid a la planta superior y contemplad la antigua imprenta y el enorme espacio de la librería.',look:['Bicicleta suspendida','Estanterías altísimas','Maquinaria de imprenta','Sección infantil','Vista desde arriba']},
{time:'16:15–16:45',title:'Tiendas y street art',image:'images/real-lisboa.jpg',route:'Ler Devagar → callejones de LX',text:'Elegid solo las tiendas que realmente os llamen: cerámica, ilustración, diseño o streetwear. Entre una y otra, buscad murales y detalles industriales.',look:['Cerâmica Factory','Ementa Store','Ilustración local','Mural favorito de Greta y Maria']},
{time:'16:45–17:15',title:'Rooftop y despedida',image:'images/real-lisboa.jpg',route:'LX Factory → terraza / rooftop',text:'Si os apetece, terminad Lisboa con cerveza o refresco y vistas hacia el Ponte 25 de Abril. Si vais retrasados, este es el tramo fácil de acortar.',look:['Ponte 25 de Abril','Tejados industriales','Foto final de Lisboa']},
{time:'17:15–18:25',title:'LX → Óbidos',image:'images/real-obidos.jpg',route:'LX Factory → A8 → Óbidos',text:'Coged la furgo y salid directamente hacia Óbidos. Intentad llegar con luz de tarde y aparcad fuera de la muralla, en una zona autorizada.',look:['Ruta A8','Agua para carretera','Llegar con algo de luz']},
{time:'18:30–20:30',title:'Óbidos al atardecer',image:'images/real-obidos.jpg',route:'Porta da Vila → Rua Direita → Santa Maria → castillo',text:'Recorred la villa cuando ya baja la afluencia. Entrad por Porta da Vila, mirad sus azulejos, pasead por Rua Direita y desviaos por callejones blancos. Llegad al castillo y probad una ginjinha en vasito de chocolate los adultos.',look:['Azulejos de Porta da Vila','Calles blancas y flores','Igreja de Santa Maria','Castillo','Ginjinha']},
{time:'20:30–21:10',title:'Óbidos → Nazaré',image:'images/real-nazare.jpg',route:'Óbidos → A8/Avenida do Município → Nazaré',text:'Terminada la visita, conducid unos 30–35 minutos hasta Nazaré. La prioridad ya es instalaros y descansar.',look:['Comprobar llegada antes de salir','Cena sencilla si hace falta','No desplegar elementos de camping fuera de zona habilitada']},
{time:'21:10 · noche',title:'Pernocta en Nazaré',image:'images/nazare-camper.webp',route:'Primera opción · Rua dos Galeões',text:'Probad primero la zona autorizada de Rua dos Galeões: práctica para llegar tarde y dormir, sin servicios. Si no os convence, usad como alternativas Rua Fernando Ybarra o la zona camper de Praia do Norte, siempre respetando la señalización vigente.',look:['Rua dos Galeões · primera opción','Rua Fernando Ybarra · plan B','Praia do Norte · alternativa','Permanencia y señalización municipal']}
];

const $=s=>document.querySelector(s),view=$('#view'),modal=$('#modal'),modalBody=$('#modalBody');
const store={get(k,d){try{return JSON.parse(localStorage.getItem('vw340_'+k))??d}catch{return d}},set(k,v){localStorage.setItem('vw340_'+k,JSON.stringify(v))}};
let route=location.hash.slice(1)||'cover',cityFilter='Todos';
let pendingJournalPhoto=null;
function uid(prefix='id'){return prefix+'_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7)}
function fileToPhoto(file,max=1400,quality=.78){return new Promise((resolve,reject)=>{if(!file)return resolve(null);const r=new FileReader();r.onerror=reject;r.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{let w=img.width,h=img.height;const scale=Math.min(1,max/Math.max(w,h));w=Math.round(w*scale);h=Math.round(h*scale);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);resolve(c.toDataURL('image/jpeg',quality))};img.src=r.result};r.readAsDataURL(file)})}
function missionLists(){let lists=store.get('missionLists',null);if(!lists){lists={Greta:(D.missions.Greta||[]).map((text,i)=>({id:'greta_'+i,text,photo:null})),Maria:(D.missions.Maria||[]).map((text,i)=>({id:'maria_'+i,text,photo:null})),Soraya:[
{id:'soraya_0',text:'Encontrar un rincón tranquilo que no aparezca en las guías y guardar su ubicación.',photo:null},
{id:'soraya_1',text:'Elegir el mejor vino o producto local del viaje para llevar a casa.',photo:null},
{id:'soraya_2',text:'Hacer una fotografía familiar espontánea en cada gran etapa.',photo:null},
{id:'soraya_3',text:'Descubrir una tienda, taller o mercado con algo realmente especial.',photo:null},
{id:'soraya_4',text:'Elegir una cena o aperitivo improvisado que termine siendo memorable.',photo:null},
{id:'soraya_5',text:'Reservarse veinte minutos de calma con una buena vista y sin mirar el móvil.',photo:null}
]};const old=store.get('missions',{}),next={};for(const [name,arr] of Object.entries(lists))arr.forEach((m,i)=>{if(old[name+'_'+i])next[m.id]=true});store.set('missions',next);store.set('missionLists',lists)}if(!lists.Soraya)lists.Soraya=[];return lists}
function saveMissionLists(lists){store.set('missionLists',lists)}
function ensureD13Missions(){if(store.get('d13MissionsAdded',false))return;const lists=missionLists(),add=(person,text)=>{if(!(lists[person]||[]).some(m=>m.text===text))(lists[person]||(lists[person]=[])).push({id:uid(person.toLowerCase()),text,photo:null})};add('Greta','Encontrar el rinoceronte escondido de la Torre de Belém.');add('Greta','Encontrar la abeja gigante de Bordalo II en LX Factory.');add('Greta','Localizar la bicicleta suspendida dentro de Ler Devagar.');add('Maria','Encontrar Brasil e India en la Rosa dos Ventos de Belém.');add('Maria','Elegir y fotografiar su mural favorito de LX Factory.');add('Maria','Encontrar el rincón más raro de Ler Devagar.');add('Soraya','Descubrir en LX Factory una tienda o pieza de diseño que realmente se llevaría a casa.');add('Soraya','Elegir el mejor rincón del picnic en Tapada das Necessidades.');add('Soraya','Hacer una foto espontánea de la familia despidiéndose de Lisboa.');saveMissionLists(lists);store.set('d13MissionsAdded',true)}
ensureD13Missions();
function ensureD13MissionsV2(){if(store.get('d13MissionsV2Added',false))return;const lists=missionLists(),add=(person,text)=>{if(!(lists[person]||[]).some(m=>m.text===text))(lists[person]||(lists[person]=[])).push({id:uid(person.toLowerCase()),text,photo:null})};add('Greta','Encontrar los azulejos de Porta da Vila en Óbidos.');add('Greta','Elegir la calle más bonita de Óbidos para una foto.');add('Maria','Encontrar el castillo de Óbidos antes que Greta.');add('Maria','Localizar una casa blanca con flores de colores en Óbidos.');add('Soraya','Elegir el rincón más bonito de Óbidos al atardecer.');add('Soraya','Hacer la foto que cierre definitivamente la etapa de Lisboa.');saveMissionLists(lists);store.set('d13MissionsV2Added',true)}
ensureD13MissionsV2();



const OVERNIGHTS={
  "D0": {
    "date": "11 agosto",
    "place": "Lisboa",
    "status": "Reserva confirmada",
    "recommended": {
      "name": "Lisboa Camping",
      "type": "Camping confirmado",
      "text": "Primera noche en Lisboa tras la salida desde Chiclana.",
      "image": "images/lisboa.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Lisboa+Camping"
    },
    "alternative": null
  },
  "D1": {
    "date": "12 agosto",
    "place": "Lisboa",
    "status": "Segunda noche confirmada",
    "recommended": {
      "name": "Lisboa Camping",
      "type": "Misma base",
      "text": "Día de centro histórico y eclipse. Lo más cómodo es regresar al camping al terminar.",
      "image": "images/lisboa.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Lisboa+Camping"
    },
    "alternative": null
  },
  "D2": {
    "date": "13 agosto",
    "place": "Nazaré",
    "status": "Pernocta prevista tras Óbidos",
    "recommended": {
      "name": "Rua dos Galeões · zona camper",
      "type": "Primera opción · sin servicios",
      "text": "Llegada prevista sobre las 21:10 tras visitar Óbidos al atardecer. Comprobad la señalización vigente al llegar y mantened comportamiento de estacionamiento, no de camping.",
      "image": "images/nazare-camper.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Rua+dos+Galeoes+Nazare+autocaravanas"
    },
    "alternative": {
      "name": "Rua Fernando Ybarra / Praia do Norte",
      "type": "Planes B en Nazaré",
      "text": "Si Galeões no os convence, probad una zona camper autorizada en Rua Fernando Ybarra o Praia do Norte, revisando siempre la señalización local.",
      "map": "https://www.google.com/maps/search/?api=1&query=Rua+Fernando+Ybarra+Nazare+camper"
    }
  },
  "D4": {
    "date": "14 agosto",
    "place": "Nazaré",
    "status": "Dos opciones",
    "recommended": {
      "name": "Área municipal de autocaravanas de Nazaré",
      "type": "Área municipal",
      "text": "La opción práctica para terminar el día junto al Atlántico.",
      "image": "images/nazare-camper.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=area+autocaravanas+municipal+Nazare"
    },
    "alternative": {
      "name": "Camper park de Nazaré",
      "type": "Camper park de pago",
      "text": "Más servicios y llegada más controlada en temporada alta.",
      "map": "https://www.google.com/maps/search/?api=1&query=camper+park+Nazare"
    }
  },
  "D5": {
    "date": "15 agosto",
    "place": "Aveiro",
    "status": "Dos opciones",
    "recommended": {
      "name": "Área municipal de autocaravanas de Aveiro",
      "type": "Área municipal",
      "text": "Base práctica para Aveiro y Costa Nova.",
      "image": "images/aveiro-camper.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=area+autocaravanas+Aveiro"
    },
    "alternative": {
      "name": "Camper park de Aveiro",
      "type": "Camper park de pago",
      "text": "Alternativa con más comodidad si necesitáis servicios completos.",
      "map": "https://www.google.com/maps/search/?api=1&query=camper+park+Aveiro"
    }
  },
  "D6": {
    "date": "16 agosto",
    "place": "Oporto",
    "status": "Base en Oporto",
    "recommended": {
      "name": "Porto Motorhome Park · Perafita",
      "type": "Camper park de pago",
      "text": "Base cómoda para dejar la camper quieta y entrar en Bolt o transporte a Ribeira y Gaia.",
      "image": "images/porto-camper.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Porto+Motorhome+Park+Perafita"
    },
    "alternative": {
      "name": "Parque Biológico de Gaia",
      "type": "Alternativa tranquila",
      "text": "Plan B más verde y algo más retirado del centro.",
      "map": "https://www.google.com/maps/search/?api=1&query=Parque+Biologico+de+Gaia+autocaravanas"
    }
  },
  "D7": {
    "date": "17 agosto",
    "place": "Valle del Duero",
    "status": "Reserva confirmada",
    "special": true,
    "recommended": {
      "name": "Quinta do Roncão",
      "type": "Pernocta entre viñedos",
      "text": "Reserva confirmada para la noche del 17 de agosto.",
      "image": "images/porto-gaia.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Quinta+do+Roncao+Vila+Seca+de+Poiares",
      "site": "https://www.quintadoroncao.com/en/"
    },
    "alternative": null
  },
  "D8": {
    "date": "18 agosto",
    "place": "Frías",
    "status": "Pernocta prevista",
    "recommended": {
      "name": "Área de autocaravanas de Frías",
      "type": "Área de etapa",
      "text": "Noche tras Tobera y la visita a Frías.",
      "image": "images/burgos-camper.webp",
      "map": "https://www.google.com/maps/search/?api=1&query=Area+de+autocaravanas+Frias+Calle+de+los+Molinos"
    },
    "alternative": {
      "name": "Camping Ciudad de Frías",
      "type": "Plan B",
      "text": "Alternativa con más servicios si el área está completa.",
      "map": "https://www.google.com/maps/search/?api=1&query=Camping+Ciudad+de+Frias"
    }
  },
  "D9": {
    "date": "19 agosto",
    "place": "Logroño",
    "status": "Última noche del viaje",
    "recommended": {
      "name": "Zona municipal de autocaravanas y campers",
      "type": "Área municipal · Calle Río Lomo",
      "text": "Última noche antes de volver a Sabadell.",
      "image": "images/photo-logrono.jpg",
      "map": "https://www.google.com/maps/search/?api=1&query=Area+autocaravanas+Calle+Rio+Lomo+Logrono"
    },
    "alternative": null
  },
  "D10": {
    "date": "20 agosto",
    "place": "Casa",
    "status": "Fin del viaje",
    "recommended": {
      "name": "Regreso a Sabadell",
      "type": "Sin pernocta",
      "text": "Última etapa del viaje.",
      "image": "images/photo-road.jpg"
    },
    "alternative": null
  }
}

const DAY_EXTRAS={
  "D0": {
    "focus": [
      {
        "title": "Primera noche en Lisboa",
        "text": "Con la furgo por fin en marcha, hoy el objetivo es sencillo: llegar, instalaros y empezar el viaje con buen pie.",
        "image": "images/familia-vw340.jpg",
        "tag": "Nuevo comienzo"
      }
    ],
    "tip": "No intentéis recuperar el tiempo perdido en la jornada de llegada.",
    "moment": "La primera cena sabiendo que el viaje ya ha arrancado.",
    "mission": "Elegid una palabra para inaugurar esta segunda oportunidad del viaje.",
    "photo": "Primera foto de la camper instalada en Lisboa Camping."
  },
  "D1": {
    "focus": [
      {
        "title": "El tranvía rozando los balcones",
        "text": "En Alfama, esperad una curva estrecha: el tranvía parece pasar a centímetros de las fachadas.",
        "image": "images/real-lisboa-tram.jpg",
        "tag": "Mejor foto"
      },
      {
        "title": "Santa Luzia y los miradores",
        "text": "No os quedéis solo con la vista: buganvillas, azulejos y tejados son parte del encanto.",
        "image": "images/real-lisboa.jpg",
        "tag": "Mira arriba"
      },
      {
        "title": "Eclipse desde el Moinho do Penedo",
        "text": "Al final del día, buscad horizonte despejado hacia el oeste y usad solo gafas homologadas.",
        "image": "images/real-lisboa.jpg",
        "tag": "12 AGOSTO · ECLIPSE"
      }
    ],
    "tip": "Regresad al entorno del camping con margen para no llegar justos al eclipse.",
    "moment": "19:36 · el máximo del eclipse parcial en Lisboa.",
    "mission": "Encontrad una puerta azul, un gato, un tranvía amarillo y la sombra más curiosa durante el eclipse.",
    "photo": "Nunca miréis el Sol sin protección homologada; para fotografiarlo hace falta filtro solar específico."
  },
  "D2": {
    "focus": [
      {
        "title": "El rinoceronte de Belém",
        "text": "Buscad la pequeña escultura del rinoceronte en la Torre de Belém.",
        "image": "images/real-lisboa.jpg",
        "tag": "Curiosidad histórica"
      },
      {
        "title": "La rosa de los vientos",
        "text": "Frente al Padrão, seguid con el dedo las rutas portuguesas en el gran mapa del suelo.",
        "image": "images/real-lisboa.jpg",
        "tag": "Para las niñas"
      },
      {
        "title": "Ler Devagar",
        "text": "En LX Factory, levantad la vista: una bicicleta parece volar sobre las estanterías.",
        "image": "images/lxfactory.webp",
        "tag": "Tienda original"
      }
    ],
    "tip": "Aprovechad la tarde para salir ya de Lisboa y acercaros a Óbidos.",
    "moment": "Pastéis de Belém todavía calientes, con canela y azúcar.",
    "mission": "¿Quién encuentra primero el rinoceronte y una librería que parezca de película?",
    "photo": "Desde el paseo del Tajo, encuadrad la Torre con mucho cielo y agua alrededor."
  },
  "D4": {
    "focus": [
      {
        "title": "La entrada de Óbidos",
        "text": "Al cruzar la Porta da Vila, mirad hacia arriba: el pequeño oratorio está cubierto de azulejos.",
        "image": "images/real-obidos.jpg",
        "tag": "Mira arriba"
      },
      {
        "title": "El océano de Nazaré",
        "text": "Desde Sítio se entiende la altura del acantilado y la fuerza del mar.",
        "image": "images/real-nazare.jpg",
        "tag": "Gran paisaje"
      }
    ],
    "tip": "En Óbidos, apartaos de la calle principal; en Nazaré, subid primero al Sítio y bajad después.",
    "moment": "Mirar el Atlántico desde el mirador de Suberco.",
    "mission": "Encontrad una puerta azul en Óbidos y una barca tradicional en Nazaré.",
    "photo": "Enmarcad una calle blanca de Óbidos con flores en primer plano."
  },
  "D5": {
    "focus": [
      {
        "title": "Los dibujos de los moliceiros",
        "text": "Muchos mezclan escenas populares, religiosas y humorísticas.",
        "image": "images/real-aveiro.jpg",
        "tag": "Curiosidad"
      },
      {
        "title": "Los palheiros",
        "text": "Las casas de rayas de Costa Nova nacieron como almacenes de pescadores.",
        "image": "images/costa-nova.webp",
        "tag": "Historia local"
      }
    ],
    "tip": "Reservad tiempo para pasear sin rumbo por Costa Nova.",
    "moment": "La luz suave sobre las fachadas de rayas.",
    "mission": "Encontrad una casa con rayas verdes y otra con rayas rojas.",
    "photo": "Esperad a que pase una bicicleta delante de una fachada de rayas."
  },
  "D6": {
    "focus": [
      {
        "title": "Las escaleras de Ribeira",
        "text": "Hay rincones y pasajes que parecen un decorado. Mirad abajo, arriba y al otro lado del río.",
        "image": "images/real-porto.jpg",
        "tag": "Rincón fotogénico"
      },
      {
        "title": "El puente desde Gaia",
        "text": "La vista del puente Dom Luís I desde la orilla de Gaia es de las más memorables del viaje.",
        "image": "images/porto-gaia.webp",
        "tag": "Atardecer"
      }
    ],
    "tip": "No intentéis verlo todo: Ribeira y Gaia ya llenan una gran jornada.",
    "moment": "Cruzar el puente con el río y las fachadas al fondo.",
    "mission": "Encontrad un barco rabelo y vuestro mirador favorito del Duero.",
    "photo": "Probablemente la mejor foto salga desde Gaia mirando a Oporto."
  },
  "D7": {
    "focus": [
      {
        "title": "La terraza de Graham’s",
        "text": "Antes o después de la visita, disfrutad las vistas sobre Oporto desde Gaia.",
        "image": "images/porto-gaia.webp",
        "tag": "Bodega"
      },
      {
        "title": "Camino al Douro",
        "text": "El trayecto hacia Quinta do Roncão ya forma parte del plan: menos ciudad y más paisaje.",
        "image": "images/photo-road.jpg",
        "tag": "Carretera"
      }
    ],
    "tip": "No alarguéis demasiado la comida para llegar a la quinta con luz agradable.",
    "moment": "La tarde tranquila entre viñedos cerrando Portugal.",
    "mission": "Elegid el mejor rincón de la quinta para la foto familiar del viaje.",
    "photo": "La hora dorada entre viñedos será difícil de superar."
  },
  "D8": {
    "focus": [
      {
        "title": "Las cascadas de Tobera",
        "text": "No son enormes, pero el conjunto de agua, piedra y puentes tiene mucho encanto.",
        "image": "images/photo-tobera.jpg",
        "tag": "Naturaleza"
      },
      {
        "title": "Frías desde fuera",
        "text": "Antes de entrar, buscad la silueta del pueblo y su castillo sobre la roca.",
        "image": "images/photo-frias.jpg",
        "tag": "Postal medieval"
      }
    ],
    "tip": "Es una jornada larga: salid pronto y simplificad las paradas.",
    "moment": "El contraste entre las cascadas y la silueta medieval de Frías.",
    "mission": "Buscad el mejor ángulo de las cascadas y contad los puentes del entorno.",
    "photo": "Una foto general desde el exterior de Frías vale mucho la pena antes de subir."
  },
  "D9": {
    "focus": [
      {
        "title": "La catedral de Burgos",
        "text": "Aunque la parada sea breve, acercaos lo suficiente para apreciar su fachada.",
        "image": "images/real-burgos.jpg",
        "tag": "Patrimonio"
      },
      {
        "title": "Laurel al atardecer",
        "text": "La tarde en Logroño pide pinchos, paseo y despedida tranquila del viaje.",
        "image": "images/photo-logrono.jpg",
        "tag": "Última noche"
      }
    ],
    "tip": "No exprimáis demasiado Burgos para llegar a Logroño con margen.",
    "moment": "El primer pincho de la última noche del viaje.",
    "mission": "Cada uno elige su pincho favorito y luego hacéis ranking familiar.",
    "photo": "Una imagen de la calle Laurel o del paseo nocturno será un gran cierre."
  },
  "D10": {
    "focus": [
      {
        "title": "Vuelta a casa",
        "text": "La etapa final también forma parte del recuerdo. Mejor ir sin prisas.",
        "image": "images/photo-road.jpg",
        "tag": "Último tramo"
      }
    ],
    "tip": "Parada breve, café, estirar y seguir.",
    "moment": "Llegar a Sabadell con la sensación de viaje redondo pese a los cambios.",
    "mission": "Pensad cada uno en vuestro recuerdo favorito antes de llegar.",
    "photo": "La última foto puede ser simplemente la llegada a casa."
  }
}

const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const fmtDate=s=>new Intl.DateTimeFormat('es-ES',{weekday:'short',day:'numeric',month:'short'}).format(new Date(s+'T12:00:00'));
function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;clearTimeout(window.__tt);window.__tt=setTimeout(()=>e.hidden=true,2200)}
function navActive(){document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('active',b.dataset.go===route))}

function cover(){return `<section class="intro-cover" aria-label="Portada del viaje"><img class="intro-photo" src="splash-vw340.jpg" alt="Lisboa al atardecer"><div class="intro-shade"></div><div class="intro-content"><img class="intro-logo" src="images/logo-vw340-cream.png" alt="VW340"><div class="intro-rule"></div><h1>PORTUGAL</h1><p class="intro-year">VERANO 2026</p><button class="intro-enter" data-go="home" aria-label="Entrar en la guía"><span>Comienza la aventura.</span><i aria-hidden="true">⌄</i></button></div></section>`}

function go(r){if(!modal.hidden)closeModal();route=r;location.hash=r;render();window.scrollTo({top:0,behavior:'smooth'})}
function hero(img,ey,title,text,buttons=''){return `<section class="hero"><img src="${img}" alt=""><div class="hero-copy"><div class="eyebrow pill">${ey}</div><h1>${title}</h1><p>${text}</p>${buttons?`<div class="actions">${buttons}</div>`:''}</div><div class="hero-dots"><i></i><i></i><i></i></div></section>`}
function placeCard(p){if(!p)return'';return `<article class="card"><button class="cover" data-place="${p.id}"><img src="${p.photo}" alt="${esc(p.name)}" loading="lazy"><div class="card-body"><span class="chip">${esc(p.city)} · ${esc(p.tag)}</span><h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p></div></button></article>`}
function dayRow(d){return `<article class="day"><img src="${d.photo}" alt=""><button data-day="${d.id}"><small>${fmtDate(d.date)} · ${esc(d.city)}</small><h3>${esc(d.title)}</h3><p>${esc(d.meta)}</p></button></article>`}
function showBeforeLeaving(){
 const now=new Date(),cutoff=new Date(2026,7,11,0,0,0);
 return now<cutoff;
}
function beforeLeavingSection(){return `<section class="section before-leaving"><div class="section-head"><div><small class="section-kicker">PREPARA LA CAMPER</small><h2>Antes de salir…</h2><p>Lo esencial para empezar el viaje sin dudas ni olvidos.</p></div></div><div class="before-grid"><article class="before-card checklist-card"><button data-tool="checklist"><span class="before-icon" aria-hidden="true">✓</span><div><small>LISTA PERSONAL</small><h3>Checklist camper</h3><p>Documentación, equipaje, camper y reservas.</p><b>Revisar lista ›</b></div></button></article><article class="before-card portugal-card"><button data-tool="portugalPrep"><span class="before-icon" aria-hidden="true">PT</span><div><small>EN 2 MINUTOS</small><h3>Antes de entrar en Portugal</h3><p>Combustible, peajes, roaming, camper y entradas.</p><b>Ver recomendaciones ›</b></div></button></article></div></section>`}
function home(){
 const done=store.get('doneDays',[]),today=D.trip[1]||D.trip[0],next=D.trip[3]||D.trip[1];
 return hero(today.photo,`Día 2 · ${fmtDate(today.date)}`,today.city,'Descubre el encanto de la capital portuguesa.',`<button class="btn secondary" data-day="${today.id}">Ver plan del día ›</button>`)+
 (showBeforeLeaving()?beforeLeavingSection():'')+
 `<section class="section"><div class="section-head"><div><h2>Resumen del viaje</h2></div></div><div class="travel-stats"><div class="travel-stat"><i><svg viewBox='0 0 24 24'><path d='M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z'/><circle cx='12' cy='10' r='2.2'/></svg></i><b>2.640 km</b><span>Recorrido</span></div><div class="travel-stat"><i><svg viewBox='0 0 24 24'><rect x='4' y='5.5' width='16' height='14' rx='2'/><path d='M8 3v5M16 3v5M4 10h16'/></svg></i><b>10 días</b><span>11–20 agosto</span></div><div class="travel-stat"><i><svg viewBox='0 0 24 24'><path d='M4 20V9l5 3V5l6 4v11M15 12l5-3v11M7 16h1M11 15h1M17 15h1'/></svg></i><b>8 ciudades</b><span>Por descubrir</span></div><div class="travel-stat"><i><svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='9'/><path d='m12 7 1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.7-3.1 1.7.6-3.5L7 10.5l3.5-.5z'/></svg></i><b>${Object.values(missionLists()).reduce((n,a)=>n+a.length,0)} misiones</b><span>Greta, Maria y Soraya</span></div></div></section>
 <section class="section"><div class="section-head"><div><h2>Próxima parada</h2></div></div><article class="next-card"><img src="${next.photo}" alt="${esc(next.city)}"><button data-day="${next.id}"><small>Mañana · ${fmtDate(next.date)}</small><h3>${esc(next.city)}</h3><p>${esc(next.title)}</p><span class="arrow">›</span></button></article></section>
 <section class="section"><div class="section-head"><div><h2>Tu viaje</h2><p>${done.length} de ${D.trip.length} jornadas completadas</p></div><button class="linkbtn" data-go="route">Ver ruta</button></div><div class="timeline">${D.trip.slice(0,3).map(dayRow).join('')}</div></section>
 <section class="section"><div class="section-head"><div><h2>Imprescindibles</h2><p>Historia, consejos, horarios y mapa.</p></div><button class="linkbtn" data-go="explore">Explorar</button></div><div class="grid">${['feira','pena','obidos-vila','nazare-sitio'].map(id=>placeCard(D.places.find(p=>p.id===id))).join('')}</div></section>`
}
function routePage(){return hero('images/familia-vw340.jpg','11–20 agosto','Portugal en familia','Una ruta en camper entre ciudades históricas, costa atlántica y recuerdos.',`<a class="btn secondary" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/Chiclana+de+la+Frontera/Lisboa/%C3%93bidos/Nazar%C3%A9/Aveiro/Porto/Tobera/Frias/Burgos/Logrono/Sabadell">Abrir ruta en Maps ›</a>`)+`<section class="section"><div class="section-head"><div><h2>Plan diario</h2><p>Pulsa cada jornada para abrir la agenda completa.</p></div></div><div class="timeline route-line">${D.trip.map(dayRow).join('')}</div></section><section class="section"><div class="section-head"><div><h2>Destinos</h2><p>Explora cada ciudad a través de sus lugares.</p></div></div><div class="city-grid">${D.cities.map(c=>`<article class="city-cover"><img src="${c.photo}" alt="${esc(c.name)}"><button data-city="${esc(c.name)}"><small>${c.count} lugares</small><h3>${esc(c.name)}</h3><p>${esc(c.subtitle)}</p></button></article>`).join('')}</div></section>`}
function explore(){const cities=['Todos',...new Set(D.places.map(p=>p.city))],q=store.get('search','');const ps=D.places.filter(p=>(cityFilter==='Todos'||p.city===cityFilter)&&(`${p.name} ${p.city} ${p.tag} ${p.summary}`.toLowerCase().includes(q.toLowerCase())));return `<section class="section"><div class="section-head"><div><h1 class="page-title">Explorar</h1><p>${D.places.length} lugares con información detallada.</p></div></div><div class="searchbox"><input id="searchInput" value="${esc(q)}" placeholder="Buscar lugar, barrio, mercado…" aria-label="Buscar"></div><div class="filters">${cities.map(c=>`<button data-filter="${esc(c)}" class="${cityFilter===c?'active':''}">${esc(c)}</button>`).join('')}</div><div class="grid" id="placeGrid">${ps.length?ps.map(placeCard).join(''):'<div class="empty">No hay resultados.</div>'}</div></section>`}
function girls(){const checks=store.get('missions',{}),lists=missionLists();const person=n=>{const arr=lists[n]||[],completed=arr.filter(m=>checks[m.id]).length,pct=arr.length?Math.round(completed/arr.length*100):0,initial=n[0];return `<section class="panel mission-person"><div class="passport-head"><div class="avatar">${initial}</div><div><h2>${n}</h2><p>${completed} de ${arr.length} misiones</p></div><b style="margin-left:auto">${pct}%</b></div><div class="progress"><span style="width:${pct}%"></span></div><div class="mission-list">${arr.map(m=>`<article class="mission-item">${m.photo?`<img class="mission-photo" src="${m.photo}" alt="Foto de la misión">`:''}<label class="mission"><input type="checkbox" data-mission="${m.id}" ${checks[m.id]?'checked':''}><span>${esc(m.text)}</span></label><div class="mission-actions"><button class="mini-action" data-edit-mission="${m.id}" data-person="${n}">Editar</button><button class="mini-action" data-photo-mission="${m.id}" data-person="${n}">${m.photo?'Cambiar foto':'Añadir foto'}</button><button class="mini-action danger" data-delete-mission="${m.id}" data-person="${n}">Eliminar</button></div></article>`).join('')||'<p class="empty">Todavía no hay misiones.</p>'}</div><button class="btn ghost add-mission" data-add-mission="${n}">+ Añadir misión</button></section>`};return hero('images/real-lisboa.jpg','Retos para toda la familia','Misiones','Cada destino puede convertirse en un pequeño reto y en un recuerdo con foto.',`<button class="btn secondary" data-go="explore">Descubrir lugares ›</button>`)+person('Greta')+person('Maria')+person('Soraya')}
function journalPage(){const journal=store.get('journal',{});return hero('images/porto.webp','Diario familiar','Nuestra bitácora','Guarda lo que no quieres olvidar: momentos, sensaciones, fotografías y pequeñas historias.',`<button class="btn secondary" data-tool="journal">Escribir hoy ›</button>`)+`<section class="section"><div class="section-head"><div><h2>Recuerdos del viaje</h2><p>Pulsa un día para escribir, añadir una foto o editar.</p></div></div><div class="journal-grid">${D.trip.map(d=>{const j=journal[d.id],img=j?.photo||d.photo;return `<article class="journal-card"><img src="${img}" alt=""><button data-journal-day="${d.id}"><small>${fmtDate(d.date)} · ${esc(d.city)}</small><h3>${esc(d.title)}</h3>${j?`<span class="stars">${'★'.repeat(Number(j.rating||0))}${j.photo?' · Foto añadida':''}</span>`:'<span class="stars">Añadir recuerdo</span>'}</button></article>`}).join('')}</div></section>`}
function more(){return `<section class="section"><div class="section-head"><div><h1 class="page-title">Más</h1><p>Herramientas para organizar y conservar el viaje.</p></div></div><div class="grid"><article class="card"><button class="cover" data-go="explore"><img src="images/lisboa.webp" alt=""><div class="card-body"><h3>Guía completa</h3><p>Los 23 lugares del viaje.</p></div></button></article><article class="card"><button class="cover" data-tool="portugalPrep"><img src="images/real-lisboa.jpg" alt=""><div class="card-body"><h3>Antes de salir</h3><p>Peajes, combustible, camper y reservas.</p></div></button></article><article class="card"><button class="cover" data-tool="overnights"><img src="images/porto-camper.webp" alt=""><div class="card-body"><h3>Pernoctas</h3><p>Opciones organizadas por día.</p></div></button></article><article class="card"><button class="cover" data-tool="expenses"><img src="images/restaurantes.webp" alt=""><div class="card-body"><h3>Gastos</h3><p>Control por categorías.</p></div></button></article><article class="card"><button class="cover" data-tool="checklist"><img src="images/nazare-camper.webp" alt=""><div class="card-body"><h3>Checklist camper</h3><p>Todo listo antes de salir.</p></div></button></article><article class="card"><button class="cover" data-tool="backup"><img src="images/regreso.webp" alt=""><div class="card-body"><h3>Copia de seguridad</h3><p>Exporta o restaura tus datos.</p></div></button></article></div></section><section class="panel"><h3>Instalar en el iPhone</h3><p>En Safari pulsa Compartir y después <b>Añadir a pantalla de inicio</b>. La guía y las imágenes principales quedan disponibles sin conexión después de la primera carga.</p></section><section class="panel"><h3>Privacidad</h3><p>La bitácora, las fotografías, las misiones y los gastos se guardan únicamente en este dispositivo.</p></section>`}
function render(){document.body.classList.toggle('cover-mode',route==='cover');navActive();if(route==='cover')view.innerHTML=cover();else if(route==='home')view.innerHTML=home();else if(route==='route')view.innerHTML=routePage();else if(route==='explore')view.innerHTML=explore();else if(route==='girls')view.innerHTML=girls();else if(route==='journal')view.innerHTML=journalPage();else view.innerHTML=more();view.focus({preventScroll:true})}
function openModal(html){modalBody.innerHTML=html;modal.hidden=false;document.body.style.overflow='hidden'}
function closeModal(){modal.hidden=true;document.body.style.overflow='';modalBody.innerHTML=''}
function openPlace(id){const p=D.places.find(x=>x.id===id);if(!p)return;openModal(`<div class="detail-hero"><img src="${p.photo}" alt="${esc(p.name)}"><div class="detail-title"><div class="eyebrow">${esc(p.city)} · ${esc(p.tag)}</div><h1>${esc(p.name)}</h1></div></div><div class="detail-content"><p>${esc(p.summary)}</p><div class="place-meta"><span>◷ ${esc(p.duration)}</span><span>€ ${esc(p.price)}</span><span>☀ ${esc(p.best)}</span></div><div class="actions"><a class="btn" href="${p.map}" target="_blank" rel="noopener">Cómo llegar</a><a class="btn ghost" href="${p.official}" target="_blank" rel="noopener">Web oficial</a></div><h3>Por qué merece la pena</h3><p>${esc(p.history)}</p><h3>Horario orientativo</h3><p>${esc(p.time)}</p><h3>Consejos prácticos</h3><ul>${p.tips.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="panel"><h3>Reto para las niñas</h3><p>${esc(p.kids)}</p></div><h3>Qué comer cerca</h3><p>${esc(p.food)}</p><p><small>Horarios y precios pueden cambiar. Comprueba la web oficial antes de ir.</small></p></div>`)}
function transportCard(t){if(!t)return'';return `<section class="transport-card"><div class="transport-top"><span class="transport-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 17h14M7 17l-1 3M17 17l1 3M6 13h12M7 5h10l2 8H5l2-8Z"/><circle cx="8" cy="16" r="1.3"/><circle cx="16" cy="16" r="1.3"/></svg></span><div><small>TRANSPORTE RECOMENDADO</small><h3>${esc(t.title)}</h3></div><span class="transport-mode">${esc(t.mode)}</span></div><p class="transport-rec">${esc(t.recommendation)}</p><div class="transport-detail">${esc(t.detail)}</div>${t.note?`<p class="transport-note">${esc(t.note)}</p>`:''}${t.boltUrl?`<a class="btn bolt-btn" href="${t.boltUrl}" target="_blank" rel="noopener">${esc(t.boltLabel||'Abrir Bolt')}</a>`:''}</section>`}
function diningCard(d){if(!d)return'';const r=d.restaurant||{},a=d.alternative||{},t=d.takeaway||{},w=d.sweet||{};const mapBtn=x=>x.map?`<a class="mini-link" href="${x.map}" target="_blank" rel="noopener">Abrir en Maps ›</a>`:'';return `<section class="dining-section"><div class="dining-heading"><small>COMER DURANTE LA JORNADA</small><h3>${esc(d.title||'Dónde comer hoy')}</h3><p>${esc(d.intro||'')}</p></div>${r.name?`<article class="restaurant-feature"><img src="${r.image||'images/restaurantes.webp'}" alt="${esc(r.name)}"><div class="restaurant-copy"><span>${esc(r.time||'Recomendación')}</span><h4>${esc(r.name)}</h4><p class="restaurant-type">${esc(r.type||'')} ${r.price?`· ${esc(r.price)}`:''}</p><p>${esc(r.why||'')}</p>${r.dish?`<p class="dish"><b>Qué pedir:</b> ${esc(r.dish)}</p>`:''}${mapBtn(r)}</div></article>`:''}${a.name?`<div class="alternative-card"><div><small>ALTERNATIVA</small><h4>${esc(a.name)}</h4><p>${esc(a.text||'')}</p></div>${mapBtn(a)}</div>`:''}<div class="food-mini-grid">${t.name?`<article class="food-mini"><img src="${t.image||'images/restaurantes.webp'}" alt="${esc(t.name)}"><div><small>${esc(t.label||'Para llevar')}</small><h4>${esc(t.name)}</h4><p>${esc(t.text||'')}</p>${t.price?`<span class="food-price">${esc(t.price)}</span>`:''}${mapBtn(t)}</div></article>`:''}${w.name?`<article class="food-mini"><img src="${w.image||'images/restaurantes.webp'}" alt="${esc(w.name)}"><div><small>${esc(w.label||'Parada dulce')}</small><h4>${esc(w.name)}</h4><p>${esc(w.text||'')}</p>${w.price?`<span class="food-price">${esc(w.price)}</span>`:''}${mapBtn(w)}</div></article>`:''}</div></section>`}

function extrasCard(x){if(!x)return'';const cards=(x.focus||[]).map(i=>`<article class="focus-card"><img src="${i.image}" alt="${esc(i.title)}"><div><small>${esc(i.tag||'Fíjate en esto')}</small><h4>${esc(i.title)}</h4><p>${esc(i.text)}</p></div></article>`).join('');return `<section class="extras-section"><div class="dining-heading"><small>NO PASES DE LARGO</small><h3>Fíjate en esto</h3><p>Pequeños detalles para disfrutar mejor de la zona.</p></div><div class="focus-grid">${cards}</div><article class="story-note tip-note"><small>CONSEJO VW340</small><h4>${esc(x.tip)}</h4></article><article class="story-note moment-note"><small>EL MOMENTO DEL DÍA</small><h4>${esc(x.moment)}</h4></article><div class="challenge-grid"><article class="story-note"><small>MISIÓN SORPRESA</small><h4>${esc(x.mission)}</h4></article><article class="story-note photo-note"><small>FOTO DEL DÍA</small><h4>${esc(x.photo)}</h4></article></div></section>`}


const RONCAO_EMAIL=`Dear Quinta do Roncão Team,

I hope you are doing well.

My name is Raúl, and we are a family from Barcelona (Spain) travelling around Portugal this summer in our Volkswagen T5 campervan.

We are planning our route and came across your winery. It immediately caught our attention because we are looking for a special place to spend our last night in Portugal before returning home.

We would like to ask if you have availability for one campervan on the night of 17 August 2026.

We are 2 adults and 2 children, travelling in a Volkswagen T5 California campervan.

If possible, we would also love to enjoy your welcome package and a wine tasting during our stay.

Could you please let us know:

- If you have availability for the night of 17 August 2026.
- The total price for one campervan.
- What is included in the overnight stay.
- Whether electricity, fresh water and waste disposal are available.
- If advance booking is required.
- What time check-in and check-out are.
- Whether children are welcome to walk around the vineyard and enjoy the experience with us.

We are not simply looking for a place to park our camper. We are looking for a memorable experience to end our Portugal road trip, and your winery looks like the perfect place for that.

Thank you very much for your time. We look forward to hearing from you.

Kind regards,

Raúl Estudillo
Barcelona, Spain
Volkswagen T5 California Campervan`;
function roncaoContact(){const status=store.get('roncaoStatus','pending');const label={pending:'Pendiente de confirmar',confirmed:'Reserva confirmada',unavailable:'No disponible'}[status]||'Pendiente de confirmar';return `<div class="roncao-contact"><div class="roncao-quote">“No queríamos que el último recuerdo de Portugal fuera un aparcamiento.”</div><div class="booking-status status-${status}"><small>ESTADO DE LA RESERVA</small><b>${label}</b></div><h4>Contactar con la bodega</h4><p>El correo ya está preparado en inglés para consultar la noche del 17 de agosto de 2026.</p><div class="contact-meta"><span>✉️ quintadoroncao@sapo.pt</span><span>📱 +351 926 632 509</span></div><div class="contact-actions"><a class="btn" href="mailto:quintadoroncao@sapo.pt?subject=Overnight%20stay%20request%20%E2%80%93%2017%20August%202026&body=Dear%20Quinta%20do%20Ronc%C3%A3o%20Team%2C%0A%0AI%20hope%20you%20are%20doing%20well.%0A%0AMy%20name%20is%20Ra%C3%BAl%2C%20and%20we%20are%20a%20family%20from%20Barcelona%20%28Spain%29%20travelling%20around%20Portugal%20this%20summer%20in%20our%20Volkswagen%20T5%20campervan.%0A%0AWe%20are%20planning%20our%20route%20and%20came%20across%20your%20winery.%20It%20immediately%20caught%20our%20attention%20because%20we%20are%20looking%20for%20a%20special%20place%20to%20spend%20our%20last%20night%20in%20Portugal%20before%20returning%20home.%0A%0AWe%20would%20like%20to%20ask%20if%20you%20have%20availability%20for%20one%20campervan%20on%20the%20night%20of%2017%20August%202026.%0A%0AWe%20are%202%20adults%20and%202%20children%2C%20travelling%20in%20a%20Volkswagen%20T5%20California%20campervan.%0A%0AIf%20possible%2C%20we%20would%20also%20love%20to%20enjoy%20your%20welcome%20package%20and%20a%20wine%20tasting%20during%20our%20stay.%0A%0ACould%20you%20please%20let%20us%20know%3A%0A%0A-%20If%20you%20have%20availability%20for%20the%20night%20of%2017%20August%202026.%0A-%20The%20total%20price%20for%20one%20campervan.%0A-%20What%20is%20included%20in%20the%20overnight%20stay.%0A-%20Whether%20electricity%2C%20fresh%20water%20and%20waste%20disposal%20are%20available.%0A-%20If%20advance%20booking%20is%20required.%0A-%20What%20time%20check-in%20and%20check-out%20are.%0A-%20Whether%20children%20are%20welcome%20to%20walk%20around%20the%20vineyard%20and%20enjoy%20the%20experience%20with%20us.%0A%0AWe%20are%20not%20simply%20looking%20for%20a%20place%20to%20park%20our%20camper.%20We%20are%20looking%20for%20a%20memorable%20experience%20to%20end%20our%20Portugal%20road%20trip%2C%20and%20your%20winery%20looks%20like%20the%20perfect%20place%20for%20that.%0A%0AThank%20you%20very%20much%20for%20your%20time.%20We%20look%20forward%20to%20hearing%20from%20you.%0A%0AKind%20regards%2C%0A%0ARa%C3%BAl%20Estudillo%0ABarcelona%2C%20Spain%0AVolkswagen%20T5%20California%20Campervan">Abrir correo</a><button class="btn ghost" data-copy-roncao>Copiar mensaje</button></div><div class="status-actions"><button data-roncao-status="pending">Pendiente</button><button data-roncao-status="confirmed">Confirmada</button><button data-roncao-status="unavailable">No disponible</button></div></div>`}
function overnightCard(o){if(!o)return'';const option=x=>x?`<article class="overnight-option">${x.image?`<img class="overnight-photo" src="${x.image}" alt="${esc(x.name)}">`:''}<div class="overnight-type">${esc(x.type)}</div><h4>${esc(x.name)}</h4><p>${esc(x.text)}</p><div class="overnight-links">${x.map?`<a class="mini-link" target="_blank" rel="noopener" href="${x.map}">Abrir en Maps ›</a>`:''}${x.site?`<a class="mini-link" target="_blank" rel="noopener" href="${x.site}">Web oficial ›</a>`:''}</div></article>`:'';return `<section class="overnight-card ${o.special?'overnight-special':''}"><div class="overnight-head"><span>${o.special?'🍷':'🌙'}</span><div><small>Pernocta · ${esc(o.date)}</small><h3>${esc(o.place)}</h3><p>${esc(o.status)}</p></div></div><div class="overnight-grid">${option(o.recommended)}${option(o.alternative)}</div>${o.special?roncaoContact():''}</section>`}
function overnights(){openModal(`<div class="detail-content"><div class="prep-hero overnight-hero"><small>VW340 · RUTA CAMPER</small><h1>Pernoctas por días</h1><p>Área municipal cuando compensa; camper park de pago cuando aporta tranquilidad o servicios.</p></div><div class="overnights-list">${D.trip.map(d=>overnightCard(OVERNIGHTS[d.id])).join('')}</div><p class="prep-foot">Las ubicaciones marcadas como recomendación deben revisarse de nuevo unos días antes por posibles cambios de acceso, aforo o normativa local.</p></div>`)}


function detailedDayCard(id){if(!['D1','D2'].includes(id))return '';const txt=id==='D1'?'Recorre Lisboa tramo a tramo, con calles, curiosidades y navegación entre cada parada.':'Belém, picnic, LX Factory, Óbidos al atardecer y pernocta en Nazaré, paso a paso.';return `<section class="detail-day-entry"><div><small>RUTA PASO A PASO</small><h3>Día al detalle</h3><p>${txt}</p></div><button class="btn detail-day-open" data-detail-day="${id}" data-detail-step="0">Abrir recorrido ›</button></section>`}
function openDetailedDay(index=0,dayId='D1'){const steps=dayId==='D2'?LISBON_D13_DETAIL:LISBON_DETAIL,i=Math.max(0,Math.min(Number(index)||0,steps.length-1)),st=steps[i],prev=steps[i-1],next=steps[i+1],label=dayId==='D2'?'DÍA 13':'DÍA 12';openModal(`<div class="detail-step-hero"><img src="${st.image}" alt="${esc(st.title)}"><div class="detail-step-overlay"><small>${label} · ${i+1} DE ${steps.length}</small><div class="detail-step-time">${esc(st.time)}</div><h1>${esc(st.title)}</h1></div></div><div class="detail-content detailed-day"><div class="detail-progress"><span style="width:${((i+1)/steps.length)*100}%"></span></div><div class="detail-route"><small>POR DÓNDE IR</small><b>${esc(st.route)}</b></div><p class="detail-step-copy">${esc(st.text)}</p><h3>Fijaos en esto</h3><div class="detail-look-list">${st.look.map(x=>`<span>✓ ${esc(x)}</span>`).join('')}</div><nav class="detail-step-nav">${prev?`<button data-detail-day="${dayId}" data-detail-step="${i-1}" class="detail-step-btn prev"><small>‹ ANTERIOR</small><b>${esc(prev.time)}</b><span>${esc(prev.title)}</span></button>`:'<span></span>'}${next?`<button data-detail-day="${dayId}" data-detail-step="${i+1}" class="detail-step-btn next"><small>SIGUIENTE ›</small><b>${esc(next.time)}</b><span>${esc(next.title)}</span></button>`:`<button data-day="${dayId}" class="detail-step-btn next"><small>FIN DEL RECORRIDO</small><b>Volver al día</b><span>Ver agenda completa</span></button>`}</nav><button class="btn ghost detail-back-day" data-day="${dayId}">← Volver a la jornada</button></div>`)}
function openDay(id){const d=D.trip.find(x=>x.id===id),done=store.get('doneDays',[]),journal=store.get('journal',{});if(!d)return;const idx=D.trip.findIndex(x=>x.id===id),prev=D.trip[idx-1],next=D.trip[idx+1];const dayNav=`<nav class="day-nav" aria-label="Navegación entre jornadas">${prev?`<button class="day-nav-btn prev" data-day="${prev.id}"><small>‹ DÍA ANTERIOR</small><b>${esc(prev.city)}</b></button>`:'<span></span>'}${next?`<button class="day-nav-btn next" data-day="${next.id}"><small>SIGUIENTE DÍA ›</small><b>${esc(next.city)}</b></button>`:'<span></span>'}</nav>`;openModal(`<div class="detail-hero"><img src="${d.photo}" alt=""><div class="detail-title"><div class="eyebrow">${fmtDate(d.date)} · ${esc(d.city)}</div><h1>${esc(d.title)}</h1></div></div><div class="detail-content">${dayNav}<p>${esc(d.meta)}</p><h3>Agenda</h3><div class="panel agenda-panel">${d.items.map(x=>`<p>${esc(x)}</p>`).join('')}</div>${detailedDayCard(d.id)}${transportCard(d.transport)}${overnightCard(OVERNIGHTS[d.id])}${diningCard(d.dining)}${extrasCard(DAY_EXTRAS[d.id])}${d.places.length?`<h3>Lugares del día</h3><div class="grid">${d.places.map(id=>placeCard(D.places.find(p=>p.id===id))).join('')}</div>`:''}<div class="actions"><button class="btn" data-toggle-day="${d.id}">${done.includes(d.id)?'Marcar como pendiente':'Completar jornada'}</button><button class="btn ghost" data-journal-day="${d.id}">Escribir recuerdo</button></div>${journal[d.id]?`<div class="panel">${journal[d.id].photo?`<img class="memory-photo" src="${journal[d.id].photo}" alt="Foto del recuerdo">`:''}<b>Tu recuerdo</b><p>${esc(journal[d.id].text)}</p><p>${'★'.repeat(Number(journal[d.id].rating||0))}</p></div>`:''}${dayNav}</div>`) }
function journal(dayId){const all=store.get('journal',{}),d=D.trip.find(x=>x.id===dayId)||D.trip[0],j=all[d.id]||{};pendingJournalPhoto=j.photo||null;openModal(`<div class="detail-content"><h1>Bitácora</h1><label>Día</label><select id="jday">${D.trip.map(x=>`<option value="${x.id}" ${x.id===d.id?'selected':''}>${fmtDate(x.date)} · ${esc(x.title)}</option>`).join('')}</select><div class="panel"><label>¿Qué recordaremos?</label><textarea id="jtext" placeholder="Escribe aquí…">${esc(j.text||'')}</textarea><label>Fotografía del recuerdo</label><div id="journalPhotoPreview" class="photo-preview">${j.photo?`<img src="${j.photo}" alt="Foto del recuerdo"><button class="mini-action danger" data-remove-journal-photo>Quitar foto</button>`:'<span>Añade una fotografía de este día</span>'}</div><button class="btn ghost photo-picker" type="button" data-journal-photo-picker>Elegir foto</button><label>Valoración</label><select id="jrating">${[1,2,3,4,5].map(n=>`<option ${Number(j.rating)===n?'selected':''} value="${n}">${'★'.repeat(n)}</option>`).join('')}</select><div class="actions"><button class="btn" data-save-journal>Guardar recuerdo</button></div></div></div>`)}
function missionEditor(person,id){const lists=missionLists(),m=id?(lists[person]||[]).find(x=>x.id===id):null;openModal(`<div class="detail-content"><small>${esc(person)}</small><h1>${m?'Editar misión':'Nueva misión'}</h1><div class="panel"><label>Descripción de la misión</label><textarea id="missionText" placeholder="Escribe el reto…">${esc(m?.text||'')}</textarea>${m?.photo?`<div class="photo-preview"><img src="${m.photo}" alt="Foto de la misión"></div>`:''}<div class="actions"><button class="btn" data-save-mission="${id||''}" data-person="${person}">Guardar misión</button></div></div></div>`)}
function openPhotoPicker(onPhoto){openModal(`<div class="detail-content photo-source-sheet"><small>Fotografía</small><h1>¿Cómo quieres añadirla?</h1><p class="page-intro">Elige una imagen de la fototeca o haz una foto ahora.</p><div class="photo-source-grid"><label class="photo-source-card"><span class="photo-source-icon">▧</span><b>Fototeca</b><small>Elegir una imagen guardada</small><input class="photo-source-input" type="file" accept="image/*" hidden></label><label class="photo-source-card"><span class="photo-source-icon">◎</span><b>Cámara</b><small>Hacer una foto ahora</small><input class="photo-source-input" type="file" accept="image/*" capture="environment" hidden></label></div></div>`);document.querySelectorAll('.photo-source-input').forEach(input=>{input.onchange=async()=>{const file=input.files?.[0];if(!file)return;toast('Preparando fotografía…');try{const photo=await fileToPhoto(file);closeModal();await onPhoto(photo)}catch{toast('No se pudo guardar la foto')}}})}
function chooseMissionPhoto(person,id){openPhotoPicker(async photo=>{const lists=missionLists(),m=(lists[person]||[]).find(x=>x.id===id);if(m){m.photo=photo;saveMissionLists(lists);render();toast('Fotografía añadida')}})}
function expenses(){const a=store.get('expenses',[]),total=a.reduce((s,x)=>s+Number(x.amount),0);openModal(`<div class="detail-content"><h1>Gastos</h1><div class="stat"><b>${total.toLocaleString('es-ES',{style:'currency',currency:'EUR'})}</b><span>total registrado</span></div><div class="panel"><label>Concepto</label><input id="exName" placeholder="Camping, gasolina, comida…"><label>Categoría</label><select id="exCat"><option>Transporte</option><option>Alojamiento</option><option>Comida</option><option>Entradas</option><option>Otros</option></select><label>Importe (€)</label><input id="exAmount" type="number" step="0.01"><div class="actions"><button class="btn" data-add-expense>Añadir</button></div></div><div>${a.map((x,i)=>`<div class="expense"><span><b>${esc(x.name)}</b><small> · ${esc(x.cat)}</small></span><b>${Number(x.amount).toLocaleString('es-ES',{style:'currency',currency:'EUR'})}</b><button class="linkbtn danger" data-del-expense="${i}">Eliminar</button></div>`).join('')||'<p class="empty">Todavía no hay gastos.</p>'}</div></div>`)}
const checklistDefault=['DNI y tarjetas sanitarias','Documentación y seguro de la camper','Permiso de circulación e ITV','Cargadores y baterías externas','Botiquín y medicación','Calzos, cable eléctrico y adaptadores','Agua, gas y nivel de combustible','Ropa de baño y calzado cómodo','Entradas reservadas','Descargar mapas sin conexión'];
function checklist(){const c=store.get('checklist',{});openModal(`<div class="detail-content"><h1>Checklist camper</h1><div class="panel">${checklistDefault.map((x,i)=>`<label class="mission"><input type="checkbox" data-check="${i}" ${c[i]?'checked':''}><span>${esc(x)}</span></label>`).join('')}</div></div>`)}
function portugalPrep(){const prep=store.get('prep',{});const item=(id,title,text)=>`<label class="prep-check"><input type="checkbox" data-prep="${id}" ${prep[id]?'checked':''}><span><b>${title}</b><small>${text}</small></span></label>`;openModal(`<div class="detail-content prep-detail"><div class="prep-hero"><small>VW340 · GUÍA PRÁCTICA</small><h1>Antes de entrar en Portugal</h1><p>Una revisión rápida para salir tranquilos y evitar improvisaciones.</p></div><section class="prep-block"><span class="prep-number">01</span><div><h3>Combustible</h3><p><b>Sal con el depósito lleno desde España.</b> No fijamos una diferencia de precio porque cambia cada semana; revisa GasAll o Google Maps 24–48 horas antes. Así evitas repostar nada más cruzar y eliges con calma.</p></div></section><section class="prep-block"><span class="prep-number">02</span><div><h3>Peajes portugueses</h3><p>Portugal combina cabinas tradicionales y autopistas de cobro exclusivamente electrónico. La opción más cómoda para no pensar en cada tramo es contratar <b>Via Verde Visitors</b> antes de salir. Si no la usáis, pagad con tarjeta en las cabinas normales y registrad la matrícula para los tramos electrónicos.</p><div class="prep-links"><a class="mini-link" target="_blank" rel="noopener" href="https://visitors.viaverde.pt/">Via Verde Visitors ›</a><a class="mini-link" target="_blank" rel="noopener" href="https://www.portugaltolls.com/">Portugal Tolls ›</a></div><div class="prep-alert"><b>Importante:</b> no entres por un carril Via Verde sin dispositivo o registro asociado.</div></div></section><section class="prep-block"><span class="prep-number">03</span><div><h3>Móvil y pagos</h3><p>En Portugal podéis usar llamadas, SMS y datos con las condiciones de vuestra tarifa española, sujeto al uso razonable. La tarjeta funciona en casi todas partes, pero conviene llevar <b>30–50 € en efectivo</b> para mercados, áreas camper o pequeños comercios.</p></div></section><section class="prep-block"><span class="prep-number">04</span><div><h3>Camper</h3><p>Para pernoctar, priorizad áreas autorizadas y comprobad siempre la señalización municipal. Fuera de espacios protegidos y salvo normas locales, la referencia general es un máximo de 48 horas en el mismo municipio. No despleguéis toldo, mesas o calzos fuera de zonas habilitadas.</p></div></section><section class="prep-block reservations"><span class="prep-number">05</span><div><h3>Reservas antes de salir</h3><p>Marca cada punto cuando esté resuelto. Los horarios y la disponibilidad pueden cambiar.</p>${item('lello','Livraria Lello','Comprar ticket con hora antes de llegar a Oporto.')}${item('grahams','Graham’s 1890 Lodge','Confirmar visita familiar y horario de la cata.')}${item('eclipse','Gafas para el eclipse','Llevar cuatro gafas homologadas ISO 12312-2 para el 12 de agosto.')}${item('maps','Mapas sin conexión','Descargar Lisboa, Óbidos, Nazaré, Aveiro, Oporto y Burgos.')}${item('documents','Documentación','DNI de los cuatro, tarjetas sanitarias y papeles de la camper.')}</div></section><section class="prep-block"><span class="prep-number">06</span><div><h3>Apps útiles</h3><div class="app-chips"><span>Bolt</span><span>Park4Night</span><span>Google Maps</span><span>Via Verde</span><span>Windy</span><span>GasAll</span></div></div></section><p class="prep-foot">Revisado para el viaje de agosto de 2026. Confirma peajes, reservas y normativa local en las webs oficiales antes de salir.</p></div>`)}
function backup(){openModal(`<div class="detail-content"><h1>Copia de seguridad</h1><div class="panel"><p>Descarga un archivo con la bitácora, gastos, misiones y checklist.</p><div class="actions"><button class="btn" data-export>Exportar datos</button><label class="btn ghost">Importar archivo<input id="importFile" type="file" accept="application/json" hidden></label><button class="btn ghost danger" data-reset>Reiniciar app</button></div></div></div>`)}
document.addEventListener('click',e=>{const b=e.target.closest('button,a');if(!b)return;if(b.dataset.go)go(b.dataset.go);if(b.dataset.place)openPlace(b.dataset.place);if(b.dataset.day)openDay(b.dataset.day);if(b.dataset.detailStep!==undefined)openDetailedDay(b.dataset.detailStep,b.dataset.detailDay||'D1');if(b.dataset.city){cityFilter=b.dataset.city;go('explore')}if(b.dataset.filter){cityFilter=b.dataset.filter;render()}if(b.dataset.close!==undefined)closeModal();if(b.dataset.tool==='journal')journal();if(b.dataset.tool==='expenses')expenses();if(b.dataset.tool==='checklist')checklist();if(b.dataset.tool==='portugalPrep')portugalPrep();if(b.dataset.tool==='overnights')overnights();if(b.dataset.copyRoncao!==undefined){navigator.clipboard?.writeText(RONCAO_EMAIL).then(()=>toast('Mensaje copiado')).catch(()=>toast('No se pudo copiar'));}if(b.dataset.roncaoStatus){store.set('roncaoStatus',b.dataset.roncaoStatus);overnights();toast('Estado actualizado');}if(b.dataset.tool==='backup')backup();if(b.dataset.toggleDay){let a=store.get('doneDays',[]);a=a.includes(b.dataset.toggleDay)?a.filter(x=>x!==b.dataset.toggleDay):[...a,b.dataset.toggleDay];store.set('doneDays',a);toast('Jornada actualizada');openDay(b.dataset.toggleDay)}if(b.dataset.journalDay)journal(b.dataset.journalDay);if(b.dataset.journalPhotoPicker!==undefined){openPhotoPicker(async photo=>{pendingJournalPhoto=photo;const p=$('#journalPhotoPreview');if(p)p.innerHTML=`<img src="${pendingJournalPhoto}" alt="Foto del recuerdo"><button class="mini-action danger" data-remove-journal-photo>Quitar foto</button>`;toast('Fotografía lista')})}if(b.dataset.removeJournalPhoto!==undefined){pendingJournalPhoto=null;const p=$('#journalPhotoPreview');if(p)p.innerHTML='<span>Añade una fotografía de este día</span>'}if(b.dataset.saveJournal!==undefined){const all=store.get('journal',{}),id=$('#jday').value;all[id]={text:$('#jtext').value,rating:$('#jrating').value,photo:pendingJournalPhoto};store.set('journal',all);toast('Recuerdo guardado');closeModal();if(route==='journal')render()}if(b.dataset.addMission){missionEditor(b.dataset.addMission)}if(b.dataset.editMission){missionEditor(b.dataset.person,b.dataset.editMission)}if(b.dataset.photoMission){chooseMissionPhoto(b.dataset.person,b.dataset.photoMission)}if(b.dataset.deleteMission){if(confirm('¿Eliminar esta misión?')){const lists=missionLists();lists[b.dataset.person]=(lists[b.dataset.person]||[]).filter(m=>m.id!==b.dataset.deleteMission);saveMissionLists(lists);const checks=store.get('missions',{});delete checks[b.dataset.deleteMission];store.set('missions',checks);render();toast('Misión eliminada')}}if(b.dataset.saveMission!==undefined){const text=$('#missionText').value.trim();if(!text)return toast('Escribe la misión');const lists=missionLists(),person=b.dataset.person,id=b.dataset.saveMission;if(id){const m=(lists[person]||[]).find(x=>x.id===id);if(m)m.text=text}else{(lists[person]||(lists[person]=[])).push({id:uid(person.toLowerCase()),text,photo:null})}saveMissionLists(lists);closeModal();render();toast('Misión guardada')}if(b.dataset.addExpense!==undefined){const name=$('#exName').value.trim(),amount=parseFloat($('#exAmount').value);if(!name||!amount)return toast('Completa concepto e importe');const a=store.get('expenses',[]);a.push({name,cat:$('#exCat').value,amount});store.set('expenses',a);expenses()}if(b.dataset.delExpense!==undefined){const a=store.get('expenses',[]);a.splice(Number(b.dataset.delExpense),1);store.set('expenses',a);expenses()}if(b.dataset.export!==undefined){const payload={version:3,exported:new Date().toISOString()};for(const k of ['doneDays','journal','missions','missionLists','expenses','checklist','prep','roncaoStatus'])payload[k]=store.get(k,k==='expenses'||k==='doneDays'?[]:{});const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='VW340-portugal-datos.json';a.click();URL.revokeObjectURL(u)}if(b.dataset.reset!==undefined&&confirm('¿Borrar todos los datos guardados?')){Object.keys(localStorage).filter(k=>k.startsWith('vw340_')).forEach(k=>localStorage.removeItem(k));closeModal();render();toast('Datos reiniciados')}});
document.addEventListener('input',e=>{if(e.target.id==='searchInput'){const q=e.target.value;store.set('search',q);const ps=D.places.filter(p=>(cityFilter==='Todos'||p.city===cityFilter)&&(`${p.name} ${p.city} ${p.tag} ${p.summary}`.toLowerCase().includes(q.toLowerCase())));const g=$('#placeGrid');if(g)g.innerHTML=ps.length?ps.map(placeCard).join(''):'<div class="empty">No hay resultados.</div>'}});
document.addEventListener('change',async e=>{if(e.target.dataset.mission){const x=store.get('missions',{});x[e.target.dataset.mission]=e.target.checked;store.set('missions',x);render();toast('Misión actualizada')}if(e.target.dataset.check!==undefined){const x=store.get('checklist',{});x[e.target.dataset.check]=e.target.checked;store.set('checklist',x)}if(e.target.dataset.prep!==undefined){const x=store.get('prep',{});x[e.target.dataset.prep]=e.target.checked;store.set('prep',x)}if(e.target.id==='jday')journal(e.target.value);if(e.target.id==='importFile'){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);for(const k of ['doneDays','journal','missions','missionLists','expenses','checklist','prep','roncaoStatus'])if(x[k]!==undefined)store.set(k,x[k]);closeModal();render();toast('Datos restaurados')}catch{toast('Archivo no válido')}};r.readAsText(f)}});
$('#searchBtn').addEventListener('click',()=>go('explore'));window.addEventListener('hashchange',()=>{route=location.hash.slice(1)||'cover';render()});modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
render();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));
})()
