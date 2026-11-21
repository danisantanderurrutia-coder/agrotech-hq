/**
 * Chile AgroTech / AgriTwin — Executive Boardroom & Advisory War Room
 * LEGO EDICIÓN ALTA LUMINOSIDAD & REALISMO PLÁSTICO
 * Piso 25, Nueva Las Condes / Isidora Goyenechea, Santiago de Chile
 * Totalmente ambientado en estilo LEGO: Minifiguras, Bricks con Studs,
 * Mesa de piezas encajables, Skyline de Santiago y Cordillera Andina de bloques.
 */

// Datos Maestros de los 8 Asesores del Directorio
const BOARD_ADVISORS = [
  {
    id: 1,
    name: "Estratega VC & Cap Table",
    benchmark: "Ex-Partner Y Combinator / AgFunder",
    committee: "Comité I: Capital & Financiamiento",
    color: "#f59e0b",
    legoColor: 0xf59e0b,
    suitColor: 0x1e3a8a, // Traje azul ejecutivo
    hairColor: 0x451a03,
    hairStyle: "slick",
    seatAngle: 2.65,
    deskProduct: {
      name: "El Ledger de Capital & Vesting 4y/1y",
      type: "Estructura Societaria & Cap Table Sanity",
      status: "Crítico • Pre-Seed",
      statusColor: "text-amber-800 font-bold bg-amber-500/10 border-amber-500/20",
      description: "Modelo matemático de dilución y cronograma de vesting a 4 años con 1 año de cliff para fundadores y equipo clave (Cantuarias). Evita el 'dead equity' si alguien abandona el proyecto antes de los 12 meses.",
      specs: [
        "Daniel Santander: 40% equity matriz + derecho a veto en transferencia de IP",
        "Vesting standard: 25% liberado al mes 12 (cliff), 1/36 mensual subsiguiente",
        "Reserva Stock Option Pool (ESOP): 10% para talento clave (Catalina, Ivanna)",
        "Valuación Pre-Seed recomendada: $1.8M - $2.5M USD post-pilotos pagados"
      ],
      redAlert: "ALERTA VC: No entregues participación de capital a Cantuarias ni a asesores comerciales sin un contrato de Vesting estricto con cliff de 12 meses. Si alguien renuncia al mes 4 con el 10% de la empresa en el bolsillo, tu cap table queda inutilizado para fondos de capital de riesgo internacionales."
    }
  },
  {
    id: 2,
    name: "Directora de Subvenciones & Fondos Públicos",
    benchmark: "Ex-Evaluadora Senior CORFO / Consultora BID Lab",
    committee: "Comité I: Capital & Financiamiento",
    color: "#10b981",
    legoColor: 0x10b981,
    suitColor: 0x065f46, // Blazer verde oscuro
    hairColor: 0x78350f,
    hairStyle: "bun",
    seatAngle: 3.11,
    deskProduct: {
      name: "Dossier CORFO Crea y Valida I+D ($220M)",
      type: "Subvención No Dilutiva ($220.000.000 CLP)",
      status: "Fase de Formulación Técnica",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Formulario estructurado para el fondo de I+D empresarial de CORFO, enfocado en la validación biofísica del Gemelo Digital en el Valle Central y resiliencia ante sequía extrema.",
      specs: [
        "Subsidio CORFO: hasta $220M CLP (hasta 80% cofinanciamiento según tramo)",
        "Aporte Pecuniario y Valorizado: infraestructura Living Lab de Parral computable",
        "Componente de I+D: modelación acoplada Sentinel-2 + balance FAO-56 suelo-planta",
        "Pipeline complementario: Start-Up Chile Ignite ($30M) + FIA Innovación Agraria"
      ],
      redAlert: "ALERTA CORFO: Los evaluadores castigan severamente proyectos que parecen 'software genérico' o visualizadores GIS convencionales. Debemos enfatizar el 'Desafío Tecnológico No Resuelto': la incertidumbre biológica de estimar evapotranspiración real bajo estrés hídrico severo sin sensores en cada hectárea."
    }
  },
  {
    id: 3,
    name: "General Counsel Tech & IP",
    benchmark: "Socio Senior Tech Chile / Especialista Ley 17.336",
    committee: "Comité II: Legal, Gobernanza & Asuntos Públicos",
    color: "#38bdf8",
    legoColor: 0x38bdf8,
    suitColor: 0x0f172a, // Traje carbón oscuro
    hairColor: 0x1c1917,
    hairStyle: "side",
    seatAngle: -2.72,
    deskProduct: {
      name: "Contrato de Cesión de IP (Front-End & UX Gamificada)",
      type: "Blindaje de Propiedad Intelectual",
      status: "Urgente • Pendiente de Firma Notarial",
      statusColor: "text-rose-700 bg-rose-500/10 border-rose-500/20",
      description: "Instrumento legal irrevocable de cesión total de derechos patrimoniales de autor sobre todo el código 3D, shaders, interfaz visual y componentes de software desarrollados por Cantuarias en favor de la matriz de Daniel Santander.",
      specs: [
        "Cesión universal, exclusiva e irrevocable (Art. 16 y sgtes. Ley 17.336 de Propiedad Intelectual)",
        "Separación estricta: IP matriz pertenece a persona natural Daniel; SpA tiene licencia de explotación",
        "Contratos civiles de prestación de servicios para Rudi Kaatz y Luis González (Lápiz) en Parral",
        "Cláusula de Secreto Comercial y No Concurrencia de 24 meses"
      ],
      redAlert: "ALERTA LEGAL: Si Cantuarias comitea código o diseña el frontend 3D sin haber firmado previamente la Cesión de Propiedad Intelectual con firma electrónica avanzada o ante notario, él retiene la titularidad legal del diseño. Un inversionista institucional o CORFO te exigirá este documento firmado antes de transferir fondos."
    }
  },
  {
    id: 4,
    name: "Director de Asuntos Corporativos & PR",
    benchmark: "Ex-Gerente de Comunicaciones SNA / Silvoagropecuario",
    committee: "Comité II: Legal, Gobernanza & Asuntos Públicos",
    color: "#6366f1",
    legoColor: 0x6366f1,
    suitColor: 0x374151, // Traje gris institucional
    hairColor: 0x9ca3af, // Cabello canoso distinguido
    hairStyle: "parted",
    seatAngle: -2.26,
    deskProduct: {
      name: "Acuerdo Marco Gremios (SNA / Fedefruta) & Prensa",
      type: "Legitimidad Institucional & Alianzas de Cuenca",
      status: "En Mapeo de Redes",
      statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      description: "Estrategia de legitimación con las Juntas de Vigilancia de los Ríos Longaví, Achibueno y Maule, articulando una tribuna en 'Revista del Campo' (El Mercurio) y 'Diario Financiero' sobre el primer Gemelo Digital de Cuenca en Chile.",
      specs: [
        "Alianza con Junta de Vigilancia del Río Longaví (JVRL) para telemetría de caudales",
        "Apalancamiento de redes de Catalina Espinoza con familias agrícolas medianas de Curicó/Talca",
        "Presentación en Congreso Frutícola Fedefruta / Enagro SNA",
        "Reportaje sobre soberanía hídrica y digitalización rural en Parral"
      ],
      redAlert: "ALERTA CORPORATIVA: El agro chileno es un ecosistema conservador y desconfiado de la tecnología foránea. Si llegas con discurso de 'Silicon Valley', te cerrarán la puerta. El mensaje debe hablar en el lenguaje del agricultor: 'seguridad de riego en enero', 'menos gasto en diesel de bombeo' y 'defensa ante la DGA'."
    }
  },
  {
    id: 5,
    name: "Directora de Teledetección & Validación GIS",
    benchmark: "Ex-Científica Senior Copernicus / Planet Labs",
    committee: "Comité III: Ciencia, Teledetección & Agronomía",
    color: "#06b6d4",
    legoColor: 0x06b6d4,
    suitColor: 0x0284c7, // Guardapolvo técnico azul celeste
    hairColor: 0xd97706, // Cabello castaño claro / pelirrojo
    hairStyle: "ponytail",
    seatAngle: -1.80,
    deskProduct: {
      name: "Pipeline Multiespectral Sentinel-2 & DEM ALOS",
      type: "Motor Satelital & Algoritmos de Corrección",
      status: "Operativo • Calibrado Maule Sur",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Pipeline automatizado de descarga de reflectancia de fondo de atmósfera (L2A), aplicación de máscaras de nubes SCL de 20m, índices de vegetación (NDVI, NDRE clorofila, NDWI estrés de canopia) y topografía de alta resolución ALOS PALSAR 12.5m.",
      specs: [
        "Frecuencia temporal: 5 días de revisita con constelación Sentinel-2A / Sentinel-2B",
        "Resolución espacial: 10m en bandas visibles y NIR; 20m en Red-Edge y SWIR",
        "Cálculo de pendiente y sombras orográficas con ALOS PALSAR DEM 12.5m",
        "Disclaimers legales cartográficos incorporados para evitar responsabilidad civil en límites prediales"
      ],
      redAlert: "ALERTA GIS: Jamás vendas tus capas satelitales como 'planimetría legal de deslindes'. El DEM de 12.5m y Sentinel de 10m son herramientas de análisis agronómico y territorial, no de mensura pericial. Todo informe B2C o B2B debe llevar la cláusula de descargo de responsabilidad cartográfica."
    }
  },
  {
    id: 6,
    name: "Director Agronómico de Precisión & Fisiología Frutal",
    benchmark: "Investigador Senior INIA / UC Davis Chile",
    committee: "Comité III: Ciencia, Teledetección & Agronomía",
    color: "#22c55e",
    legoColor: 0x22c55e,
    suitColor: 0x15803d, // Camisa a cuadros verde y botas de campo
    hairColor: 0x292524,
    hairStyle: "short",
    seatAngle: -1.34,
    deskProduct: {
      name: "Matriz Biofísica FAO-56 & Alerta de Heladas Radiativas",
      type: "Fisiología Vegetal & Eficiencia Eléctrica",
      status: "Validación de Campo Living Lab",
      statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
      description: "Algoritmo acoplado de balance hídrico suelo-planta (FAO-56 dual con Kc basal) para cerezos, avellanos europeos y vides viníferas. Integra modelación microclimática de heladas radiativas e inversión térmica con AGROMET/DGA.",
      specs: [
        "Ahorro cuantificado: 18% a 24% de volumen de agua respecto a calendario fijo",
        "Optimización de bombeo en tarifa valle eléctrica (23:00 - 08:00 hrs): ahorro de hasta 35% en kWh",
        "Curva de susceptibilidad fenológica a heladas críticas (-1.5°C en caída de pétalos)",
        "Protocolo de correlación con calicatas y sensores de suelo de Parral"
      ],
      redAlert: "ALERTA AGRONÓMICA: Los administradores de campo no creen en satélites si no los correlacionas con lo que ellos ven en su calicata. Nuestro modelo debe calibrarse con la textura de suelo real de Parral (franco-arcilloso) para que el balance FAO-56 no sobreestime la capacidad de retención de humedad."
    }
  },
  {
    id: 7,
    name: "VP Comercial B2B Agroindustrial",
    benchmark: "Ex-Director Comercial Climate FieldView / Trimble Ag",
    committee: "Comité IV: Comercial & Crecimiento",
    color: "#f97316",
    legoColor: 0xf97316,
    suitColor: 0x9a3412, // Blazer terracota
    hairColor: 0x57534e,
    hairStyle: "slick",
    seatAngle: -0.88,
    deskProduct: {
      name: "Playbook de Ventas B2B & Contrato Piloto Pagado",
      type: "Go-to-Market Agrícolas Medianas & Viñas",
      status: "Pipeline Activo (Pancho & Nene)",
      statusColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
      description: "Metodología de prospección comercial para Wladimir Gutiérrez (Nene) y Francisco Ipinza (Pancho). Diseño de contratos de Pilotos Pagados de 60 días con Setup Fee inicial ($1.5M - $2.5M CLP) más cuota mensual de monitoreo recurrente.",
      specs: [
        "Segmento objetivo: Agrícolas de 50 a 300 ha de cerezos, arándanos y viñedos en Maule y Ñuble",
        "Estructura comercial: Setup Fee de calibración de cuenca + suscripción mensual por hectárea",
        "Comisiones de venta: 15% sobre Setup Fee + 5% sobre contratos anuales cobrados (no facturados)",
        "Manejo de objeción principal: 'Ya tengo fotos de drones' -> Contraargumento: frecuencia semanal automática"
      ],
      redAlert: "ALERTA COMERCIAL: Prohibido hacer pilotos gratuitos de más de 14 días. Las agrícolas medianas usan los pilotos gratis para sacar mapas durante la cosecha y luego no pagan. El Setup Fee es el filtro definitivo para saber si el gerente agrícola tiene presupuesto real."
    }
  },
  {
    id: 8,
    name: "Head of Growth B2C & PropTech",
    benchmark: "Ex-Growth Lead Marketplaces Inmobiliarios",
    committee: "Comité IV: Comercial & Crecimiento",
    color: "#ec4899",
    legoColor: 0xec4899,
    suitColor: 0xbe185d, // Sudadera tecnológica fucsia
    hairColor: 0x172554, // Pelo azul oscuro / moderno
    hairStyle: "cap",
    seatAngle: -0.43,
    deskProduct: {
      name: "Embudo Digital de $0 Inventario (Informes de Parcelas)",
      type: "Generación de Caja Inmediata B2C (Mes 1)",
      status: "Listo para Lanzamiento",
      statusColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      description: "Funnel digital automatizado de venta de 'Informes Satelitales de Factibilidad y Riesgo Territorial' para compradores de parcelas de agrado en el Maule/Ñuble. Campañas segmentadas de Meta Ads conducen directo a WhatsApp para cierre en 15 minutos.",
      specs: [
        "Precio unitario: $29.990 CLP por informe express (entrega PDF en 2 horas)",
        "Costo de Adquisición (CAC) estimado: $4.200 - $6.500 CLP vía Meta Ads segmentado",
        "Margen bruto: >85% (costo de cómputo satelital y generación de PDF marginal)",
        "Up-sell: Visita técnica en terreno y prueba de pozo coordinada con Rudi Kaatz en Parral"
      ],
      redAlert: "ALERTA GROWTH: Este producto B2C es nuestro salvavidas de flujo de caja inmediato para financiar el runway mientras maduran las ventas B2B. Pero debemos automatizar el WhatsApp con un guión impecable; si el comprador espera más de 30 minutos la respuesta, la tasa de conversión cae un 70%."
    }
  },
  {
    id: 9,
    name: "Directora de Marca & Dirección Creativa",
    benchmark: "Ex-Brand Lead Linear / Nothing / Pentagram",
    committee: "Comité V: Marca, Diseño & Experiencia",
    color: "#8b5cf6",
    legoColor: 0x8b5cf6,
    suitColor: 0x581c87, // Blazer púrpura / alta dirección estética
    hairColor: 0x0f172a, // Cabello negro / corte bob moderno
    hairStyle: "bun",
    seatAngle: 0.03,
    deskProduct: {
      name: "Brand Book de Lujo & Guía Editorial AgroTech",
      type: "Manual de Normas Gráficas & Papelería Impresa",
      status: "En Definición Estética",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Sistema integral de identidad visual corporativa: paletas cromáticas biofísicas (Obsidiana Andina, Azul Sentinel, Verde Clorofila, Ocre Mauline), tipografía institucional (display suizo + monospace de telemetría) y especificaciones para imprenta (dossiers en papel cuché 300g, laminado soft-touch y barniz UV).",
      specs: [
        "Paleta cromática: #03070d (Obsidiana), #38bdf8 (Sentinel), #10b981 (Clorofila), #f59e0b (Ámbar)",
        "Tipografía: Plus Jakarta Sans / Inter para directores, JetBrains Mono para telemetría",
        "Especificación de imprenta: Dossiers ejecutivos 16 páginas, 300g soft-touch con hot-stamping cobrizo",
        "Supervisión directa sobre Susana Muñoz (Marketing) para campañas visuales y copies"
      ],
      redAlert: "ALERTA BRAND: Si nos presentamos ante las viñas o CORFO con folletos en Word o estética de 'agronomía genérica verde', seremos percibidos como un proveedor artesanal de insumos. AgroTech debe proyectar la precisión de un laboratorio aeroespacial suizo combinada con el señorío sobrio del campo chileno."
    }
  },
  {
    id: 10,
    name: "Director de Producto (UI/UX) & Packaging",
    benchmark: "Ex-VP of Design Palantir / Trimble Ag / Teenage Engineering",
    committee: "Comité V: Marca, Diseño & Experiencia",
    color: "#14b8a6",
    legoColor: 0x14b8a6,
    suitColor: 0x0f766e, // Ropa técnica de diseño industrial
    hairColor: 0x78350f, // Cabello castaño
    hairStyle: "short",
    seatAngle: 0.49,
    deskProduct: {
      name: "Prototipo Packaging de Campo & Design System UI",
      type: "Diseño Industrial, Ergonomía & Unboxing de Kits",
      status: "Auditoría de Usabilidad Activa",
      statusColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
      description: "Auditoría de interfaz 3D y reglas de diseño para el código de Cantuarias (evitando sobrecargas de videojuego). Diseño industrial de la caja, espuma troquelada, rotulado de cables y manuales de terreno plastificados para los kits off-grid que Rudi Kaatz y Luis González ensamblan en Parral.",
      specs: [
        "Design System UI: tokens de diseño, contrastes WCAG AAA para lectura bajo sol directo en terreno",
        "Gobernanza de Cantuarias: limitar efectos Three.js para garantizar carga fluida en tablets rurales",
        "Packaging kits Parral: caja de cartón kraft reforzado con espuma troquelada e infografía de instalación rápida",
        "Fichas plastificadas de terreno: material resistente al agua, barro y diesel de maquinaria agrícola"
      ],
      redAlert: "ALERTA PRODUCTO: Cantuarias tiene gran habilidad técnica en 3D, pero su instinto es de gamer. Si un administrador de campo de 60 años en Curicó no puede interpretar el estado del tranque o el riego en 3 segundos bajo el reflejo del sol maulino, la plataforma fracasará en terreno. La ergonomía de última milla manda sobre el efecto visual."
    }
  }
];

// Estado del Runtime 3D
let penthouseScene, penthouseCamera, penthouseRenderer, penthouseControls;
let isPenthouseInitialized = false;
let advisorObjects = [];
let deskProductMeshes = [];
let currentFocusedIndex = null;
let isLerping = false;
let targetCameraPos = new THREE.Vector3();
let targetControlsLookAt = new THREE.Vector3();
let animationFrameId = null;

// Materiales LEGO Reutilizables (Plástico Brillante con Especular Limpio)
const legoMaterials = {
  yellowHead: new THREE.MeshStandardMaterial({ color: 0xffd800, roughness: 0.12, metalness: 0.05 }),
  whitePlastic: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.15, metalness: 0.08 }),
  blackPlastic: new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.15, metalness: 0.08 }),
  redPlastic: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.15, metalness: 0.08 }),
  bluePlastic: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.15, metalness: 0.08 }),
  greenPlastic: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.15, metalness: 0.08 }),
  goldPlastic: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.75 }),
  silverPlastic: new THREE.MeshStandardMaterial({ color: 0xd4d4d8, roughness: 0.2, metalness: 0.8 }),
  tableGrey: new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.18, metalness: 0.1 }),
  windowGlass: new THREE.MeshStandardMaterial({ color: 0xc7d2fe, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.1 })
};

// Geometría base de Stud de Lego
const studGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16);

// Inicialización de la Escena 3D LEGO
function initPenthouse3D() {
  const container = document.getElementById('penthouseCanvasContainer');
  const canvas = document.getElementById('penthouseCanvas');
  if (!container || !canvas) return;

  if (isPenthouseInitialized) {
    onPenthouseWindowResize();
    return;
  }

  const width = container.clientWidth || 1000;
  const height = container.clientHeight || 640;

  // 1. Escena
  penthouseScene = new THREE.Scene();
  // Cielo luminoso y limpio de día
  penthouseScene.background = new THREE.Color(0x93c5fd);
  penthouseScene.fog = new THREE.Fog(0x93c5fd, 30, 95);

  // 2. Cámara (Dentro de la sala, con límites estrictos)
  penthouseCamera = new THREE.PerspectiveCamera(46, width / height, 0.1, 200);
  penthouseCamera.position.set(0, 6.2, 8.8);

  // 3. Renderer con Alta Luminosidad y Colores Vivos
  penthouseRenderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance"
  });
  penthouseRenderer.setSize(width, height);
  penthouseRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  penthouseRenderer.shadowMap.enabled = true;
  penthouseRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
  penthouseRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  // Exposición luminosa (cero oscuridad)
  penthouseRenderer.toneMappingExposure = 1.38;

  // 4. Controles Orbitales (Bloqueados para no salir de la sala)
  penthouseControls = new THREE.OrbitControls(penthouseCamera, penthouseRenderer.domElement);
  penthouseControls.enableDamping = true;
  penthouseControls.dampingFactor = 0.08;
  penthouseControls.maxPolarAngle = Math.PI / 2 - 0.05; // No atravesar suelo
  penthouseControls.minDistance = 1.8;
  penthouseControls.maxDistance = 13.5; // IMPEDIR SALIR A MIRAR AFUERA
  penthouseControls.target.set(0, 1.25, 0);

  // 5. Construcción del Salón LEGO y Escenario Exterior
  buildLegoPenthouseRoom();
  buildLegoOutsideWorld();

  // 6. Mesa Ovalada LEGO y Minifiguras
  buildLegoBoardroomTable();
  buildLegoChairmanMinifigure();
  buildLegoAdvisors();

  // 7. Iluminación Brillante de Día
  setupBrightLegoLighting();

  // 8. Eventos de Selección / Raycasting
  setupInteractionEvents(canvas);

  // 9. Resize Observer
  window.addEventListener('resize', onPenthouseWindowResize);
  const resizeObserver = new ResizeObserver(() => onPenthouseWindowResize());
  resizeObserver.observe(container);

  // 10. Loop de Animación
  isPenthouseInitialized = true;
  animatePenthouse();

  // Enfocar inicialmente en vista de presentación
  resetCameraView();
}

// Construcción del Salón Penthouse en Estilo LEGO
function buildLegoPenthouseRoom() {
  const roomGroup = new THREE.Group();

  // Suelo: Plancha Base LEGO Gris Suave con Studs
  const floorPlateMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.18,
    metalness: 0.08
  });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(22, 0.3, 20), floorPlateMat);
  floor.position.y = -0.15;
  floor.receiveShadow = true;
  roomGroup.add(floor);

  // Alfombra central de piezas Lego Rojas/Azules bajo la mesa
  const rugMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.25 });
  const rug = new THREE.Mesh(new THREE.BoxGeometry(11, 0.05, 8), rugMat);
  rug.position.set(0, 0.025, 0);
  rug.receiveShadow = true;
  roomGroup.add(rug);

  // Studs en la alfombra central (Patrón de piezas LEGO)
  const studInstanced = new THREE.InstancedMesh(studGeo, rugMat, 120);
  let studIdx = 0;
  const dummy = new THREE.Object3D();
  for (let x = -5.0; x <= 5.0; x += 1.0) {
    for (let z = -3.5; z <= 3.5; z += 0.8) {
      if (studIdx < 120) {
        dummy.position.set(x, 0.06, z);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        studInstanced.setMatrixAt(studIdx++, dummy.matrix);
      }
    }
  }
  studInstanced.receiveShadow = true;
  roomGroup.add(studInstanced);

  // Pared Trasera (Sur) de Bloques LEGO Blancos con Logo
  const backWallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.2 });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(22, 6.5, 0.5), backWallMat);
  backWall.position.set(0, 3.25, 10);
  backWall.receiveShadow = true;
  roomGroup.add(backWall);

  // Pared Izquierda (Oeste) con la Gran Pantalla Proyectora LEGO
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 6.5, 20), backWallMat);
  leftWall.position.set(-11, 3.25, 0);
  leftWall.receiveShadow = true;
  roomGroup.add(leftWall);

  // Gran Pantalla LEGO en la Pared Oeste
  const screenTexture = createLegoScreenTexture();
  const screenGeo = new THREE.PlaneGeometry(7.2, 4.2);
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
  const grandScreen = new THREE.Mesh(screenGeo, screenMat);
  grandScreen.position.set(-10.74, 3.3, 0);
  grandScreen.rotation.y = Math.PI / 2;
  roomGroup.add(grandScreen);

  // Marco de piezas LEGO Amarillas alrededor de la pantalla
  const frameMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.1 });
  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 7.5), frameMat);
  frameTop.position.set(-10.7, 5.5, 0);
  roomGroup.add(frameTop);
  const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 7.5), frameMat);
  frameBottom.position.set(-10.7, 1.1, 0);
  roomGroup.add(frameBottom);

  // Techo LEGO con Vigas y Lámparas de Techo
  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });
  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(22, 0.4, 20), ceilingMat);
  ceiling.position.set(0, 6.5, 0);
  roomGroup.add(ceiling);

  // Lámparas colgantes LEGO de alta potencia sobre la mesa
  for (let x = -2.5; x <= 2.5; x += 5.0) {
    const lampCord = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.6, 8), legoMaterials.blackPlastic);
    lampCord.position.set(x, 5.5, 0);
    roomGroup.add(lampCord);

    const lampShade = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.4, 16, 1, true), legoMaterials.whitePlastic);
    lampShade.position.set(x, 4.7, 0);
    roomGroup.add(lampShade);

    const lampBulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    lampBulb.position.set(x, 4.6, 0);
    roomGroup.add(lampBulb);
  }

  // VENTANALES PANORÁMICOS LEGO (Norte y Este)
  // Ventanal Norte (Frente a la mesa, hacia la Cordillera)
  const windowFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.1 });

  // Columnas verticales de la ventana
  for (let x = -10; x <= 10; x += 3.33) {
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.2, 6.5, 0.25), windowFrameMat);
    col.position.set(x, 3.25, -10);
    roomGroup.add(col);
  }
  // Viga horizontal de la ventana
  const rowBeam = new THREE.Mesh(new THREE.BoxGeometry(22, 0.2, 0.25), windowFrameMat);
  rowBeam.position.set(0, 3.25, -10);
  roomGroup.add(rowBeam);

  // Vidrio Transparente Brillante Norte
  const glassNorth = new THREE.Mesh(new THREE.PlaneGeometry(21.8, 6.4), legoMaterials.windowGlass);
  glassNorth.position.set(0, 3.25, -9.95);
  roomGroup.add(glassNorth);

  // Ventanal Este (Lado derecho de la sala)
  for (let z = -10; z <= 10; z += 3.33) {
    const colE = new THREE.Mesh(new THREE.BoxGeometry(0.25, 6.5, 0.2), windowFrameMat);
    colE.position.set(11, 3.25, z);
    roomGroup.add(colE);
  }
  const glassEast = new THREE.Mesh(new THREE.PlaneGeometry(19.8, 6.4), legoMaterials.windowGlass);
  glassEast.rotation.y = -Math.PI / 2;
  glassEast.position.set(10.95, 3.25, 0);
  roomGroup.add(glassEast);

  penthouseScene.add(roomGroup);
}

// Construcción del Mundo Exterior en Estilo LEGO (Santiago y Cordillera de los Andes)
function buildLegoOutsideWorld() {
  const worldGroup = new THREE.Group();

  // 1. Suelo Exterior de la Ciudad (Plancha Lego Gris Oscura)
  const cityGround = new THREE.Mesh(
    new THREE.PlaneGeometry(250, 250),
    new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5 })
  );
  cityGround.rotation.x = -Math.PI / 2;
  cityGround.position.set(0, -20, -50);
  worldGroup.add(cityGround);

  // 2. Edificios de LEGO en Santiago (Torres de Bloques de Colores)
  const legoColors = [0x0284c7, 0x059669, 0xd97706, 0xdc2626, 0x475569, 0xf8fafc, 0x64748b];
  for (let i = 0; i < 35; i++) {
    const bx = -45 + (i % 7) * 15 + (Math.random() * 6 - 3);
    const bz = -25 - Math.floor(i / 7) * 16 + (Math.random() * 8 - 4);
    const bWidth = 4 + Math.random() * 4;
    const bDepth = 4 + Math.random() * 4;
    const bHeight = 12 + Math.random() * 26;

    const bMat = new THREE.MeshStandardMaterial({
      color: legoColors[i % legoColors.length],
      roughness: 0.2
    });
    const bMesh = new THREE.Mesh(new THREE.BoxGeometry(bWidth, bHeight, bDepth), bMat);
    bMesh.position.set(bx, bHeight / 2 - 20, bz);
    worldGroup.add(bMesh);

    // Ventanas tipo Lego en los edificios
    const winGeo = new THREE.BoxGeometry(bWidth * 0.9, bHeight * 0.85, bDepth + 0.1);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xbfdbfe });
    const winMesh = new THREE.Mesh(winGeo, winMat);
    winMesh.position.set(bx, bHeight / 2 - 20, bz);
    worldGroup.add(winMesh);

    // Antenas / Agujas en los rascacielos
    if (Math.random() > 0.5) {
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, 6, 8), legoMaterials.silverPlastic);
      spire.position.set(bx, bHeight - 20 + 3, bz);
      worldGroup.add(spire);
    }
  }

  // 3. Gran Torre Costanera Center estilo LEGO
  const costanera = new THREE.Group();
  costanera.position.set(22, 0, -45);
  const costaneraBase = new THREE.Mesh(new THREE.BoxGeometry(10, 42, 10), new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1 }));
  costaneraBase.position.y = 1;
  costanera.add(costaneraBase);
  const costaneraTop = new THREE.Mesh(new THREE.ConeGeometry(5.2, 8, 4), new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1 }));
  costaneraTop.rotation.y = Math.PI / 4;
  costaneraTop.position.y = 25;
  costanera.add(costaneraTop);
  worldGroup.add(costanera);

  // 4. Cordillera de los Andes de Bloques Escalonados LEGO (Con Nieve en la Cima)
  const mountainGroup = new THREE.Group();
  mountainGroup.position.set(0, -10, -90);

  for (let mx = -90; mx <= 90; mx += 18) {
    const mHeight = 45 + Math.sin(mx * 0.05) * 15 + Math.random() * 8;
    const mGroup = new THREE.Group();
    mGroup.position.set(mx, 0, 0);

    // Niveles escalonados de roca andina LEGO
    for (let h = 0; h < mHeight; h += 6) {
      const stepWidth = 24 * (1 - h / mHeight) + 4;
      const isSnow = h > mHeight * 0.65;
      const stepMat = new THREE.MeshStandardMaterial({
        color: isSnow ? 0xffffff : 0x475569,
        roughness: isSnow ? 0.15 : 0.4
      });
      const step = new THREE.Mesh(new THREE.BoxGeometry(stepWidth, 6, stepWidth), stepMat);
      step.position.y = h + 3;
      mGroup.add(step);
    }
    mountainGroup.add(mGroup);
  }
  worldGroup.add(mountainGroup);

  penthouseScene.add(worldGroup);
}

// Pintura Procedural de la Gran Pantalla Proyectora LEGO
function createLegoScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 900;
  const ctx = canvas.getContext('2d');

  // Fondo azul brillante tipo Lego
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Cuadrícula estilo bloques Lego
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 30);
  ctx.lineTo(canvas.width / 2, canvas.height - 30);
  ctx.moveTo(30, canvas.height / 2);
  ctx.lineTo(canvas.width - 30, canvas.height / 2);
  ctx.stroke();

  ctx.font = 'bold 28px "JetBrains Mono", monospace';

  // Cuadrante 1: Pipeline Satelital
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('Q1: PIPELINE SATELITAL & MOTOR BIOFÍSICO', 60, 85);
  ctx.font = '20px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('• Sentinel-2 L2A: NDVI / NDRE / NDWI Calibrados', 60, 130);
  ctx.fillText('• ALOS PALSAR 12.5m DEM: Sombras & Pendientes', 60, 170);
  ctx.fillText('• DGA Longaví: Caudal 4.82 m³/s (Estable)', 60, 210);
  ctx.fillText('• Latencia OGC STAC/COG API: 42ms (Óptimo)', 60, 250);

  // Cuadrante 2: Living Lab Parral
  ctx.font = 'bold 28px "JetBrains Mono", monospace';
  ctx.fillStyle = '#4ade80';
  ctx.fillText('Q2: RED TERRITORIAL LIVING LAB PARRAL', canvas.width / 2 + 40, 85);
  ctx.font = '20px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('• Fundo Meniel (Retiro): 24.8 ha • Rol 142-88', canvas.width / 2 + 40, 130);
  ctx.fillText('• Rudi Kaatz & Lápiz: Batería Reciclada 88% SoC', canvas.width / 2 + 40, 170);
  ctx.fillText('• Tranque Meniel: 18.500 m³ (78% Capacidad)', canvas.width / 2 + 40, 210);
  ctx.fillText('• Red 5 APRs Cuenca Longaví: Pozos Protegidos', canvas.width / 2 + 40, 250);

  // Cuadrante 3: Capital & Subvenciones
  ctx.font = 'bold 28px "JetBrains Mono", monospace';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('Q3: CAPITAL, SUBVENCIONES & CAP TABLE', 60, canvas.height / 2 + 70);
  ctx.font = '20px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('• CORFO Crea y Valida I+D: $220M CLP (Fase Técnica)', 60, canvas.height / 2 + 115);
  ctx.fillText('• Semilla Expande: $45M CLP (Convocatoria Abierta)', 60, canvas.height / 2 + 155);
  ctx.fillText('• Cap Table Sanity: Vesting 4y/1y Cliff en Redacción', 60, canvas.height / 2 + 195);
  ctx.fillText('• Runway Proyectado: 14 meses (Modo $0 Inventario)', 60, canvas.height / 2 + 235);

  // Cuadrante 4: Tracción Comercial
  ctx.font = 'bold 28px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f472b6';
  ctx.fillText('Q4: TRACCIÓN COMERCIAL & WAR ROOM B2B/B2C', canvas.width / 2 + 40, canvas.height / 2 + 70);
  ctx.font = '20px "JetBrains Mono", monospace';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('• B2C PropTech ($0 Inventario): 14 Informes Mes 1', canvas.width / 2 + 40, canvas.height / 2 + 115);
  ctx.fillText('• Ticket Promedio: $29.990 CLP (Meta Ads -> WhatsApp)', canvas.width / 2 + 40, canvas.height / 2 + 155);
  ctx.fillText('• Pipeline B2B Pancho & Nene: 3 Viñas Calificadas', canvas.width / 2 + 40, canvas.height / 2 + 195);
  ctx.fillText('• Setup Fee Piloto Pagado: $2.0M CLP por Agrícola', canvas.width / 2 + 40, canvas.height / 2 + 235);

  return new THREE.CanvasTexture(canvas);
}

// Construcción de la Mesa Ovalada de Bloques LEGO
function buildLegoBoardroomTable() {
  const tableGroup = new THREE.Group();

  // Tablero Ovalado de Bloques LEGO Negros Brillantes
  const tableShape = new THREE.Shape();
  const rx = 3.6;
  const rz = 1.9;
  tableShape.absellipse(0, 0, rx, rz, 0, Math.PI * 2, false);

  const extrudeSettings = {
    steps: 1,
    depth: 0.16,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelSegments: 4
  };
  const tableGeo = new THREE.ExtrudeGeometry(tableShape, extrudeSettings);
  const tableMesh = new THREE.Mesh(tableGeo, legoMaterials.tableGrey);
  tableMesh.rotation.x = Math.PI / 2;
  tableMesh.position.y = 1.15;
  tableMesh.receiveShadow = true;
  tableMesh.castShadow = true;
  tableGroup.add(tableMesh);

  // Ribete de Bloques LEGO Amarillos alrededor de la mesa
  const trimGeo = new THREE.CylinderGeometry(rx + 0.06, rx + 0.06, 0.06, 48, 1, true);
  trimGeo.scale(1, 1, rz / rx);
  const trimMesh = new THREE.Mesh(trimGeo, legoMaterials.goldPlastic);
  trimMesh.position.y = 1.12;
  tableGroup.add(trimMesh);

  // Columnas de soporte LEGO (Pilas de Bloques Cilíndricos)
  const legGeo = new THREE.CylinderGeometry(0.55, 0.65, 1.05, 24);
  const leg1 = new THREE.Mesh(legGeo, legoMaterials.blackPlastic);
  leg1.position.set(-1.8, 0.525, 0);
  leg1.castShadow = true;
  tableGroup.add(leg1);

  const leg2 = new THREE.Mesh(legGeo, legoMaterials.blackPlastic);
  leg2.position.set(1.8, 0.525, 0);
  leg2.castShadow = true;
  tableGroup.add(leg2);

  // Studs característicos de LEGO en la superficie de la mesa
  const tableStuds = new THREE.InstancedMesh(studGeo, legoMaterials.tableGrey, 160);
  let sCount = 0;
  const dummy = new THREE.Object3D();
  for (let angle = 0; angle < Math.PI * 2; angle += 0.12) {
    for (let r = 0.8; r <= 3.2; r += 0.8) {
      if (sCount < 160) {
        const sx = Math.cos(angle) * r;
        const sz = Math.sin(angle) * (r * (rz / rx));
        dummy.position.set(sx, 1.25, sz);
        dummy.updateMatrix();
        tableStuds.setMatrixAt(sCount++, dummy.matrix);
      }
    }
  }
  tableStuds.receiveShadow = true;
  tableStuds.castShadow = true;
  tableGroup.add(tableStuds);

  // Centro de la mesa: Taza de Café LEGO y Micrófono de Conferencia
  const micBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.08, 16), legoMaterials.silverPlastic);
  micBase.position.set(0, 1.25, 0);
  tableGroup.add(micBase);

  const micStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), legoMaterials.blackPlastic);
  micStem.position.set(0, 1.42, 0);
  tableGroup.add(micStem);

  const micHead = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), legoMaterials.silverPlastic);
  micHead.position.set(0, 1.6, 0);
  tableGroup.add(micHead);

  penthouseScene.add(tableGroup);
}

// Generador de Minifiguras LEGO
function createLegoMinifigure(name, torsoColor, legColor, hairColor, hairStyle, isChairman) {
  const minifig = new THREE.Group();

  // 1. Caderas y Piernas Sentadas (Dobladas hacia adelante 90°)
  const hip = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.24), new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.15 }));
  hip.position.set(0, 0.58, 0);
  minifig.add(hip);

  // Piernas horizontales hacia adelante (posición sentada)
  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.42), new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.15 }));
  leftLeg.position.set(-0.11, 0.57, 0.22);
  minifig.add(leftLeg);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.42), new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.15 }));
  rightLeg.position.set(0.11, 0.57, 0.22);
  minifig.add(rightLeg);

  // Pies tipo Lego (Huecos frontales)
  const footL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.1), new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.15 }));
  footL.position.set(-0.11, 0.71, 0.38);
  minifig.add(footL);
  const footR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.1), new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.15 }));
  footR.position.set(0.11, 0.71, 0.38);
  minifig.add(footR);

  // 2. Torso Trapezoidal Característico de LEGO
  const torsoShape = new THREE.Shape();
  torsoShape.moveTo(-0.21, 0);
  torsoShape.lineTo(0.21, 0);
  torsoShape.lineTo(0.17, 0.48);
  torsoShape.lineTo(-0.17, 0.48);
  torsoShape.closePath();

  const torsoExtrude = { steps: 1, depth: 0.26, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02 };
  const torsoGeo = new THREE.ExtrudeGeometry(torsoShape, torsoExtrude);
  const torsoMat = new THREE.MeshStandardMaterial({ color: torsoColor, roughness: 0.15 });
  const torso = new THREE.Mesh(torsoGeo, torsoMat);
  torso.position.set(0, 0.65, -0.13);
  torso.castShadow = true;
  minifig.add(torso);

  // Corbata / Detalle estampado en el torso
  const tieGeo = new THREE.BoxGeometry(0.08, 0.32, 0.02);
  const tieMat = new THREE.MeshBasicMaterial({ color: isChairman ? 0x10b981 : 0xfbbf24 });
  const tie = new THREE.Mesh(tieGeo, tieMat);
  tie.position.set(0, 0.88, 0.14);
  minifig.add(tie);

  // 3. Brazos y Manos Cóncavas Amarillas
  const armMat = new THREE.MeshStandardMaterial({ color: torsoColor, roughness: 0.15 });
  const handMat = legoMaterials.yellowHead;

  // Brazo Izquierdo apoyado en la mesa
  const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.38, 12), armMat);
  armL.rotation.z = Math.PI / 5;
  armL.rotation.x = -Math.PI / 4;
  armL.position.set(-0.24, 0.86, 0.12);
  minifig.add(armL);

  const handL = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.025, 8, 16, Math.PI * 1.5), handMat);
  handL.rotation.x = Math.PI / 2;
  handL.position.set(-0.31, 0.74, 0.24);
  minifig.add(handL);

  // Brazo Derecho apoyado en la mesa
  const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.38, 12), armMat);
  armR.rotation.z = -Math.PI / 5;
  armR.rotation.x = -Math.PI / 4;
  armR.position.set(0.24, 0.86, 0.12);
  minifig.add(armR);

  const handR = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.025, 8, 16, Math.PI * 1.5), handMat);
  handR.rotation.x = Math.PI / 2;
  handR.position.set(0.31, 0.74, 0.24);
  minifig.add(handR);

  // 4. Cuello y Cabeza Cilíndrica Amarilla LEGO
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16), handMat);
  neck.position.set(0, 1.17, 0);
  minifig.add(neck);

  const headGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.26, 20);
  const head = new THREE.Mesh(headGeo, handMat);
  head.position.set(0, 1.34, 0);
  head.castShadow = true;
  minifig.add(head);

  // Ojos y Sonrisa Clásica LEGO (Pintados con esferas diminutas)
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), eyeMat);
  eyeL.position.set(-0.06, 1.37, 0.145);
  minifig.add(eyeL);

  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), eyeMat);
  eyeR.position.set(0.06, 1.37, 0.145);
  minifig.add(eyeR);

  const smileGeo = new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI);
  const smile = new THREE.Mesh(smileGeo, eyeMat);
  smile.rotation.z = Math.PI;
  smile.position.set(0, 1.3, 0.145);
  minifig.add(smile);

  // Stud Superior en la Cabeza (Donde se enganchan sombreros y pelo)
  const headStud = new THREE.Mesh(studGeo, handMat);
  headStud.position.set(0, 1.485, 0);
  minifig.add(headStud);

  // 5. Cabello o Sombrero LEGO
  const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.2 });
  if (hairStyle === "slick" || hairStyle === "parted") {
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7), hairMat);
    hair.position.set(0, 1.41, -0.01);
    minifig.add(hair);
  } else if (hairStyle === "bun") {
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7), hairMat);
    hair.position.set(0, 1.41, -0.01);
    minifig.add(hair);
    const bun = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), hairMat);
    bun.position.set(0, 1.52, -0.12);
    minifig.add(bun);
  } else {
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.14, 0.33), hairMat);
    hair.position.set(0, 1.48, -0.01);
    minifig.add(hair);
  }

  return minifig;
}

// Silla Roja Clásica de LEGO
function createLegoChair(colorHex) {
  const chairGroup = new THREE.Group();
  const chairMat = new THREE.MeshStandardMaterial({ color: colorHex || 0xdc2626, roughness: 0.15 });

  // Base del asiento
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.12, 0.65), chairMat);
  seat.position.y = 0.5;
  seat.castShadow = true;
  chairGroup.add(seat);

  // Respaldo de la silla
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.8, 0.1), chairMat);
  back.position.set(0, 0.95, -0.28);
  back.castShadow = true;
  chairGroup.add(back);

  // Pata central cilíndrica Lego
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.45, 16), legoMaterials.blackPlastic);
  post.position.y = 0.225;
  chairGroup.add(post);

  return chairGroup;
}

// Laptop LEGO (Pieza base con pantalla inclinada)
function createLegoLaptop(screenColor) {
  const laptop = new THREE.Group();

  // Teclado plano
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.03, 0.28), legoMaterials.silverPlastic);
  laptop.add(base);

  // Pantalla inclinada 110 grados
  const screenGroup = new THREE.Group();
  screenGroup.position.set(0, 0.02, -0.14);

  const screenBack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.025), legoMaterials.silverPlastic);
  screenBack.position.set(0, 0.14, 0);
  screenGroup.add(screenBack);

  const screenDisp = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.24), new THREE.MeshBasicMaterial({ color: screenColor || 0x38bdf8 }));
  screenDisp.position.set(0, 0.14, 0.014);
  screenGroup.add(screenDisp);

  screenGroup.rotation.x = -Math.PI / 8;
  laptop.add(screenGroup);

  return laptop;
}

// Sillón y Minifigura de Daniel Santander (Presidente)
function buildLegoChairmanMinifigure() {
  const seatGroup = new THREE.Group();
  const seatX = 0;
  const seatZ = 2.5;

  // Silla LEGO Azul de Presidencia
  const chair = createLegoChair(0x1d4ed8);
  chair.position.set(seatX, 0, seatZ);
  chair.rotation.y = Math.PI;
  seatGroup.add(chair);

  // Minifigura de Daniel Santander (Fundador / Presidente)
  const daniel = createLegoMinifigure("Daniel Santander", 0x111827, 0x1f2937, 0x1c1917, "slick", true);
  daniel.position.set(seatX, 0, seatZ);
  daniel.rotation.y = Math.PI;
  seatGroup.add(daniel);

  // Laptop de Daniel en la mesa
  const laptop = createLegoLaptop(0x10b981);
  laptop.position.set(seatX, 1.25, 1.4);
  laptop.rotation.y = 0;
  seatGroup.add(laptop);

  // Taza de Café Roja de LEGO junto al laptop
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12), legoMaterials.redPlastic);
  cup.position.set(seatX + 0.35, 1.3, 1.4);
  seatGroup.add(cup);

  // Placa LEGO de Daniel
  const badgeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.6, 0.32),
    createTextBadgeMaterial("DANIEL SANTANDER | PRESIDENTE & FUNDADOR", "#10b981")
  );
  badgeMesh.position.set(seatX, 2.05, seatZ);
  badgeMesh.rotation.y = Math.PI;
  seatGroup.add(badgeMesh);

  penthouseScene.add(seatGroup);
}

// Construcción de los 8 Asesores LEGO Alrededor de la Mesa
function buildLegoAdvisors() {
  advisorObjects = [];
  deskProductMeshes = [];

  BOARD_ADVISORS.forEach((advisor, index) => {
    const stationGroup = new THREE.Group();
    stationGroup.userData = { advisorIndex: index, advisorId: advisor.id };

    const angle = advisor.seatAngle;
    const aX = Math.cos(angle) * 4.2;
    const aZ = Math.sin(angle) * 2.4;

    const tableX = Math.cos(angle) * 2.65;
    const tableZ = Math.sin(angle) * 1.35;

    // Silla LEGO Roja
    const chair = createLegoChair(0xdc2626);
    chair.position.set(aX, 0, aZ);
    chair.lookAt(0, 0, 0);
    stationGroup.add(chair);

    // Minifigura del Asesor
    const minifig = createLegoMinifigure(
      advisor.name,
      advisor.suitColor,
      0x1e293b,
      advisor.hairColor,
      advisor.hairStyle,
      false
    );
    minifig.position.set(aX, 0, aZ);
    minifig.lookAt(0, 0, 0);
    stationGroup.add(minifig);

    // Laptop LEGO sobre la mesa
    const laptop = createLegoLaptop(advisor.legoColor);
    laptop.position.set(tableX, 1.25, tableZ);
    laptop.lookAt(aX, 1.25, aZ);
    stationGroup.add(laptop);

    // PRODUCTO LEGO ESPECÍFICO EN EL ESCRITORIO
    const productMesh = buildLegoDeskProduct(advisor, tableX, tableZ);
    productMesh.userData = { isDeskProduct: true, advisorIndex: index };
    stationGroup.add(productMesh);
    deskProductMeshes.push(productMesh);

    // Placa Holográfica / LEGO Flotante
    const badgeMat = createTextBadgeMaterial(`[${advisor.id}] ${advisor.name}`, advisor.color);
    const badgeMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.3), badgeMat);
    badgeMesh.position.set(aX, 1.95, aZ);
    badgeMesh.lookAt(0, 1.95, 0);
    badgeMesh.rotation.y += Math.PI;
    stationGroup.add(badgeMesh);

    // Luz de Foco individual para cuando se selecciona el asesor
    const deskSpot = new THREE.SpotLight(0xffffff, 2.5, 7, Math.PI / 5, 0.4, 1.2);
    deskSpot.position.set(tableX, 4.2, tableZ);
    deskSpot.target.position.set(tableX, 1.2, tableZ);
    deskSpot.castShadow = true;
    penthouseScene.add(deskSpot);
    penthouseScene.add(deskSpot.target);

    stationGroup.userData.spotLight = deskSpot;
    penthouseScene.add(stationGroup);
    advisorObjects.push(stationGroup);
  });
}

// Construye el Producto en Estilo LEGO para cada Asesor
function buildLegoDeskProduct(advisor, tx, tz) {
  const group = new THREE.Group();
  group.position.set(tx, 1.27, tz);

  switch (advisor.id) {
    case 1: // VC: Pila de Monedas LEGO Doradas y Lingotes
      for (let i = 0; i < 4; i++) {
        const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 16), legoMaterials.goldPlastic);
        coin.position.set(0.2, i * 0.035, 0);
        group.add(coin);
      }
      const ingot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.09), legoMaterials.goldPlastic);
      ingot.position.set(-0.15, 0.03, 0);
      group.add(ingot);
      break;

    case 2: // Subvenciones: Cheque / Dossier Verde CORFO de piezas LEGO
      const checkTile = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.02, 0.18), legoMaterials.greenPlastic);
      checkTile.position.set(0.18, 0.01, 0);
      group.add(checkTile);
      const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), legoMaterials.goldPlastic);
      seal.position.set(0.26, 0.025, 0.04);
      group.add(seal);
      break;

    case 3: // Legal: Pergamino y Candado de Seguridad LEGO
      const scroll = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.28, 12), legoMaterials.whitePlastic);
      scroll.rotation.z = Math.PI / 2;
      scroll.position.set(0.18, 0.03, 0);
      group.add(scroll);
      const lockBody = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), legoMaterials.bluePlastic);
      lockBody.position.set(0.18, 0.08, 0);
      group.add(lockBody);
      break;

    case 4: // Asuntos Públicos: Periódico LEGO Diario Financiero y Micrófono
      const newsTile = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.02, 0.32), legoMaterials.whitePlastic);
      newsTile.position.set(0.18, 0.01, 0);
      group.add(newsTile);
      break;

    case 5: // Teledetección: Micro Satélite LEGO con Paneles Solares
      const satBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), legoMaterials.silverPlastic);
      satBody.position.set(0.2, 0.1, 0);
      group.add(satBody);
      const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.1), legoMaterials.bluePlastic);
      wingL.position.set(0.04, 0.1, 0);
      group.add(wingL);
      const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.1), legoMaterials.bluePlastic);
      wingR.position.set(0.36, 0.1, 0);
      group.add(wingR);
      break;

    case 6: // Agronomía: Planta / Brote Verde LEGO con Sonda
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.18, 8), legoMaterials.greenPlastic);
      stem.position.set(0.2, 0.09, 0);
      group.add(stem);
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), legoMaterials.greenPlastic);
      leaf.position.set(0.2, 0.2, 0);
      group.add(leaf);
      break;

    case 7: // Comercial B2B: Maletín Ejecutivo Marrón LEGO
      const briefcase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.08), new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.2 }));
      briefcase.position.set(0.2, 0.08, 0);
      group.add(briefcase);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.015, 6, 12, Math.PI), legoMaterials.blackPlastic);
      handle.position.set(0.2, 0.17, 0);
      group.add(handle);
      break;

    case 8: // Growth B2C: Smartphone LEGO con Notificaciones
      const phone = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.22), legoMaterials.blackPlastic);
      phone.position.set(0.2, 0.01, 0);
      group.add(phone);
      const notifStud = new THREE.Mesh(studGeo, legoMaterials.greenPlastic);
      notifStud.position.set(0.2, 0.03, 0);
      group.add(notifStud);
      break;

    case 9: // Marca & CMO: Abanico de Muestras Pantone y Brand Book LEGO
      const brandBook = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.04, 0.3), new THREE.MeshStandardMaterial({ color: 0x581c87, roughness: 0.15 }));
      brandBook.position.set(0.18, 0.02, 0);
      group.add(brandBook);
      const sw1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.18), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
      sw1.rotation.y = 0.2;
      sw1.position.set(0.26, 0.05, -0.04);
      group.add(sw1);
      const sw2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.18), new THREE.MeshStandardMaterial({ color: 0x10b981 }));
      sw2.rotation.y = 0.45;
      sw2.position.set(0.29, 0.06, 0.02);
      group.add(sw2);
      break;

    case 10: // Producto & Packaging CDO: Caja de Kit de Campo & Sensor LEGO
      const kitBox = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.22), new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.25 }));
      kitBox.position.set(0.18, 0.06, 0);
      group.add(kitBox);
      const sensorPart = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 12), legoMaterials.silverPlastic);
      sensorPart.position.set(0.18, 0.14, 0);
      group.add(sensorPart);
      break;
  }

  return group;
}

// Genera un Material de Canvas para Texto de las Placas Holográficas
function createTextBadgeMaterial(text, borderColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = borderColor || '#38bdf8';
  ctx.lineWidth = 6;
  ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);

  ctx.font = 'bold 24px "JetBrains Mono", monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  return new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
}

// Configuración de Iluminación Luminosa (Día Brillante)
function setupBrightLegoLighting() {
  // Luz Ambiental Cálida y Luminosa (Elimina cualquier sombra negra)
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xcce0ff, 2.0);
  penthouseScene.add(hemiLight);

  // Sol Matinal Brillante desde los Ventanales Norte/Este
  const sunLight = new THREE.DirectionalLight(0xfff7e6, 3.2);
  sunLight.position.set(15, 18, -12);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.bias = -0.0004;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 50;
  sunLight.shadow.camera.left = -16;
  sunLight.shadow.camera.right = 16;
  sunLight.shadow.camera.top = 16;
  sunLight.shadow.camera.bottom = -16;
  penthouseScene.add(sunLight);

  // Luz de Relleno Interior Cenital para resaltar el plástico LEGO
  const ceilingFill = new THREE.PointLight(0xfffaed, 1.8, 14);
  ceilingFill.position.set(0, 4.8, 0);
  penthouseScene.add(ceilingFill);
}

// Raycasting e Interacción
function setupInteractionEvents(canvas) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, penthouseCamera);
    const intersects = raycaster.intersectObjects(penthouseScene.children, true);

    let hoveredStation = null;
    for (const hit of intersects) {
      let current = hit.object;
      while (current) {
        if (current.userData && current.userData.advisorIndex !== undefined) {
          hoveredStation = current.userData.advisorIndex;
          break;
        }
        current = current.parent;
      }
      if (hoveredStation !== null) break;
    }

    canvas.style.cursor = (hoveredStation !== null) ? 'pointer' : 'grab';
  }

  function onPointerDown() {
    canvas.style.cursor = 'grabbing';
  }

  function onPointerUp(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, penthouseCamera);
    const intersects = raycaster.intersectObjects(penthouseScene.children, true);

    let clickedAdvisorIndex = null;
    for (const hit of intersects) {
      let current = hit.object;
      while (current) {
        if (current.userData && current.userData.advisorIndex !== undefined) {
          clickedAdvisorIndex = current.userData.advisorIndex;
          break;
        }
        current = current.parent;
      }
      if (clickedAdvisorIndex !== null) break;
    }

    if (clickedAdvisorIndex !== null) {
      focusAdvisorDesk(clickedAdvisorIndex);
    }
  }

  canvas.addEventListener('mousemove', onPointerMove);
  canvas.addEventListener('mousedown', onPointerDown);
  canvas.addEventListener('mouseup', onPointerUp);
}

// Vuelo de Cámara hacia el Escritorio del Asesor
function focusAdvisorDesk(index) {
  if (index < 0 || index >= BOARD_ADVISORS.length) return;
  currentFocusedIndex = index;
  const advisor = BOARD_ADVISORS[index];

  const angle = advisor.seatAngle;
  const tableX = Math.cos(angle) * 2.65;
  const tableZ = Math.sin(angle) * 1.35;

  const camDist = 2.2;
  const camX = tableX + Math.sin(angle) * camDist * 0.5 - Math.cos(angle) * camDist * 0.4;
  const camZ = tableZ - Math.cos(angle) * camDist * 0.5 - Math.sin(angle) * camDist * 0.4;
  const camY = 2.1;

  targetCameraPos.set(camX, camY, camZ);
  targetControlsLookAt.set(tableX, 1.35, tableZ);
  isLerping = true;

  // Iluminar con foco individual
  advisorObjects.forEach((obj, idx) => {
    if (obj.userData.spotLight) {
      obj.userData.spotLight.intensity = (idx === index) ? 4.5 : 0.8;
    }
  });

  renderAdvisorInspectionHUD(advisor, index);
}

// Vista General de la Sala (360° Overview Luminosa)
function resetCameraView() {
  currentFocusedIndex = null;
  targetCameraPos.set(0, 6.2, 8.8);
  targetControlsLookAt.set(0, 1.25, 0);
  isLerping = true;

  advisorObjects.forEach(obj => {
    if (obj.userData.spotLight) obj.userData.spotLight.intensity = 1.8;
  });

  const hud = document.getElementById('boardroomInspectorHud');
  if (hud) hud.classList.add('hidden');
}

// Vista de la Cabecera (Sillón de Daniel)
function focusChairmanView() {
  currentFocusedIndex = null;
  targetCameraPos.set(0, 2.2, 3.4);
  targetControlsLookAt.set(0, 1.3, -1.8);
  isLerping = true;

  advisorObjects.forEach(obj => {
    if (obj.userData.spotLight) obj.userData.spotLight.intensity = 1.8;
  });

  const hud = document.getElementById('boardroomInspectorHud');
  if (hud) hud.classList.add('hidden');
}

// Navegación Secuencial
function nextAdvisorDesk() {
  let nextIdx = (currentFocusedIndex === null) ? 0 : (currentFocusedIndex + 1) % BOARD_ADVISORS.length;
  focusAdvisorDesk(nextIdx);
}

function prevAdvisorDesk() {
  let prevIdx = (currentFocusedIndex === null) ? BOARD_ADVISORS.length - 1 : (currentFocusedIndex - 1 + BOARD_ADVISORS.length) % BOARD_ADVISORS.length;
  focusAdvisorDesk(prevIdx);
}

// Despliegue del HUD de Inspección de Producto
function renderAdvisorInspectionHUD(advisor, index) {
  const hud = document.getElementById('boardroomInspectorHud');
  if (!hud) return;

  hud.classList.remove('hidden');

  const p = advisor.deskProduct;
  hud.innerHTML = `
    <div class="p-5 space-y-4 max-h-[85vh] overflow-y-auto font-sans text-slate-800">
      <div class="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background-color: ${advisor.color}"></span>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">Puesto ${advisor.id} • ${advisor.committee}</span>
          </div>
          <h3 class="text-base font-bold text-slate-900 tracking-tight mt-0.5">${advisor.name}</h3>
          <p class="text-[11px] font-mono text-slate-500">Benchmark: <strong class="text-slate-800">${advisor.benchmark}</strong></p>
        </div>
        <button onclick="resetCameraView()" class="text-slate-500 hover:text-slate-900 p-1 rounded-md hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-slate-500 uppercase tracking-wider">Activo en Mesa:</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${p.statusColor}">${p.status}</span>
        </div>
        <div class="text-sm font-bold text-slate-900">${p.name}</div>
        <div class="text-[11px] font-mono text-slate-500">${p.type}</div>
        <p class="text-xs text-slate-700 leading-relaxed pt-1">${p.description}</p>
      </div>

      <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs leading-relaxed space-y-1.5">
        <div class="font-bold flex items-center gap-1.5 text-rose-700 font-mono text-[11px] uppercase tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full bg-rose-600"></span> Dictamen Crítico del Asesor
        </div>
        <p>${p.redAlert}</p>
      </div>

      <div class="space-y-2">
        <span class="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">Especificaciones Clave:</span>
        <ul class="space-y-1.5 text-xs text-slate-700">
          ${p.specs.map(s => `<li class="flex items-start gap-2"><span class="text-emerald-700 font-bold">•</span><span>${s}</span></li>`).join('')}
        </ul>
      </div>

      <div class="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
        <button onclick="prevAdvisorDesk()" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1 transition-colors">
          <span>◀ Anterior</span>
        </button>
        <div class="flex items-center gap-2">
          <button onclick="triggerAdvisorModal('dossier', ${index})" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold hover:bg-emerald-100 transition-colors">
            Minuta
          </button>
          <button onclick="triggerAdvisorModal('ensayo', ${index})" class="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-mono font-semibold hover:bg-sky-100 transition-colors">
            Ensayo de Rol
          </button>
        </div>
        <button onclick="nextAdvisorDesk()" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1 transition-colors">
          <span>Siguiente ▶</span>
        </button>
      </div>
    </div>
  `;
}

// Modales Ejecutivos
function triggerAdvisorModal(type, advisorIndex) {
  const advisor = BOARD_ADVISORS[advisorIndex];
  if (!advisor) return;

  const modal = document.getElementById('boardroomActionModal');
  const title = document.getElementById('boardroomModalTitle');
  const body = document.getElementById('boardroomModalBody');
  if (!modal || !title || !body) return;

  modal.classList.remove('hidden');

  if (type === 'dossier') {
    title.innerHTML = `Dossier Ejecutivo: ${advisor.deskProduct.name}`;
    body.innerHTML = `
      <div class="space-y-4 text-xs font-mono leading-relaxed">
        <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
          <strong>EMISOR:</strong> ${advisor.name} (${advisor.committee})<br>
          <strong>DESTINATARIO:</strong> Daniel Santander (Presidente & Arquitecto Técnico)<br>
          <strong>FECHA:</strong> ${new Date().toLocaleDateString('es-CL')}<br>
          <strong>ASUNTO:</strong> ${advisor.deskProduct.type} — Protocolo de Aprobación
        </div>
        <div class="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
          <p class="font-bold mb-2">RESOLUCIÓN RECOMENDADA POR EL ASESOR:</p>
          <p>${advisor.deskProduct.redAlert}</p>
        </div>
        <div>
          <h4 class="font-bold text-slate-900 mb-2 uppercase">Plan de Ejecución Inmediato:</h4>
          <ol class="list-decimal pl-4 space-y-1 text-slate-700">
            ${advisor.deskProduct.specs.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
        <div class="pt-3 border-t border-slate-200 flex justify-end gap-2">
          <button onclick="copyDossierToClipboard(${advisorIndex})" class="px-4 py-2 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
            Copiar Minuta al Portapapeles
          </button>
        </div>
      </div>
    `;
  } else if (type === 'ensayo') {
    title.innerHTML = `Modo Ensayo: Simulacro con ${advisor.name}`;
    body.innerHTML = `
      <div class="space-y-4 text-xs font-mono leading-relaxed">
        <div class="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
          <strong>SIMULADOR DE PRESIÓN EJECUTIVA:</strong><br>
          El asesor adopta el rol de contraparte hostil o evaluador implacable (${advisor.benchmark}).
        </div>
        <div class="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 space-y-2">
          <p class="font-bold text-amber-800 font-bold">PREGUNTA INCÓMODA DE APERTURA:</p>
          <p class="italic text-sm">"Señor Santander, hemos revisado su propuesta sobre <strong>${advisor.deskProduct.name}</strong>. ¿Cómo me demuestra que su modelo no es solo un mapa bonito de Sentinel-2 y que realmente justifica la inversión o la subvención frente a la incertidumbre del agricultor?"</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-100/80 border border-slate-200 text-slate-700">
          <strong>Directriz de Respuesta del Directorio:</strong><br>
          • Argumente con el balance biofísico acoplado FAO-56.<br>
          • Cite los datos reales del Living Lab de Parral (Fundo Meniel, 24.8 ha, tranque 18.500 m³).<br>
          • Demuestre el ahorro real en tarifa valle eléctrica ($/kWh).
        </div>
      </div>
    `;
  }
}

function closeBoardroomModal() {
  const modal = document.getElementById('boardroomActionModal');
  if (modal) modal.classList.add('hidden');
}

function copyDossierToClipboard(advisorIndex) {
  const advisor = BOARD_ADVISORS[advisorIndex];
  if (!advisor) return;
  const p = advisor.deskProduct;
  const text = `DOSSIER EJECUTIVO • CHILE AGROTECH / AGRITWIN
Puesto: ${advisor.id} — ${advisor.name} (${advisor.committee})
Producto: ${p.name} (${p.type})
Estado: ${p.status}

DICTAMEN DEL ASESOR:
${p.redAlert}

ESPECIFICACIONES:
${p.specs.join('\n')}

Generado en el Penthouse Ejecutivo LEGO • Piso 25, Nueva Las Condes.`;

  navigator.clipboard.writeText(text).then(() => {
    alert('Minuta ejecutiva copiada al portapapeles con éxito.');
  });
}

// Redimensionamiento Responsivo
function onPenthouseWindowResize() {
  const container = document.getElementById('penthouseCanvasContainer');
  if (!container || !penthouseCamera || !penthouseRenderer) return;

  const w = container.clientWidth;
  const h = container.clientHeight || 640;

  penthouseCamera.aspect = w / h;
  penthouseCamera.updateProjectionMatrix();
  penthouseRenderer.setSize(w, h);
}

// Loop de Animación y Renderizado
function animatePenthouse() {
  animationFrameId = requestAnimationFrame(animatePenthouse);

  // Animación suave de cámara (Traveling)
  if (isLerping) {
    penthouseCamera.position.lerp(targetCameraPos, 0.055);
    penthouseControls.target.lerp(targetControlsLookAt, 0.055);

    if (penthouseCamera.position.distanceTo(targetCameraPos) < 0.04 &&
        penthouseControls.target.distanceTo(targetControlsLookAt) < 0.04) {
      isLerping = false;
    }
  }

  // Rotación suave de los productos en la mesa
  deskProductMeshes.forEach(mesh => {
    if (mesh && mesh.children) {
      mesh.children.forEach(child => {
        if (child.isMesh && (child.geometry.type === 'CylinderGeometry' || child.geometry.type === 'BoxGeometry')) {
          child.rotation.y += 0.008;
        }
      });
    }
  });

  penthouseControls.update();
  penthouseRenderer.render(penthouseScene, penthouseCamera);
}

// Exponer funciones globales
window.initPenthouse3D = initPenthouse3D;
window.resetCameraView = resetCameraView;
window.focusChairmanView = focusChairmanView;
window.focusAdvisorDesk = focusAdvisorDesk;
window.nextAdvisorDesk = nextAdvisorDesk;
window.prevAdvisorDesk = prevAdvisorDesk;
window.triggerAdvisorModal = triggerAdvisorModal;
window.closeBoardroomModal = closeBoardroomModal;
window.copyDossierToClipboard = copyDossierToClipboard;
window.BOARD_ADVISORS = BOARD_ADVISORS;
