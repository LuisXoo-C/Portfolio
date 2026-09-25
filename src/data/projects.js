export const projects = [
  // Proyecto para Crefisa
  {
    id: 'Crefisa', // ID único
    company: 'SEGUROS CREFISA - SEGUROS CREDIFISA',
    title: 'Sistema de Gestión Crediticia',
    shortDescription: 'Transformación digital completa: De procesos manuales a un ecosistema digital automatizado.',
    tags: ['PHP - Laravel', 'Node.js API', 'MySQL', 'On-Premise'],
    image: '/resources/Logo Crefisa.jpg',
    isPrivate: true, // Para mostrar el candado
    stats: {
      value: 'Reducción de tiempos por cliente.',
      label: 'Incremento en capacidad operativa',
      subtext: '6-7h ➝ 1h'
    },
    // Este HTML se inyectará en el modal
    detailsHTML: `
      <div class="space-y-6">
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Cliente: Seguros Crefisa / Seguros Credifisa</h4>
            <p class="text-gray-300">Es una compañía aseguradora de capital 100% hondureño, fundada en 1993 (tiene más de 30 años en el mercado). Está regulada y supervisada por la Comisión Nacional de Bancos y Seguros (CNBS).</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">El Desafío</h4>
            <p class="text-gray-300">La institución operaba con procesos manuales descentralizados, causando redundancia de datos y tiempos de espera de 7+ horas por cliente.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Responsabilidades</h4>
            <p class="text-gray-300">• Definí el stack tecnológico, los estándares de código y control de versiones para un equipo de 6 desarrolladores, gestionando desde la toma de requisitos hasta el despliegue final en producción.</p>
            <p class="text-gray-300">• Diseñé e implementé el nucleo del sistema capaz de soportar el incremento proyectado de transacciones sin degradación del servicio.</p>
            <p class="text-gray-300">• Modelé y normalicé el esquema en MySQL, optimizando índices para garantizar la integridad de datos y cálculos, bajo normativa CNBS.</p>
            <p class="text-gray-300">• Acondicionamiento del centro de cómputo para el deploy final en producción.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Logros</h4>
            <p class="text-gray-300">• Incremento en capacidad operativa: Pasando de 6h-7h por cliente pasando a 1h.</p>
            <p class="text-gray-300">• Optimicé el ciclo de vida del crédito, reduciendo tiempos por expediente mediante procesamiento asíncrono.</p>
            <p class="text-gray-300">• Cero margen de error legal: Automaticé la generación de contratos y pólizas, eliminando errores humanos en documentos regulatorios críticos.</p>
            <p class="text-gray-300">• Módulos parametrizados para la escalabilidad dinámica y asegurada del sistema.</p>
            <p class="text-gray-300">• Módulos de seguridad y gestión de usuarios.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Arquitectura (On-Premise)</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li><strong>Frontend:</strong> PHP Laravel (MVC) para gestión de sesiones seguras.</li>
                <li><strong>Middleware:</strong> API RESTful en Node.js como capa de abstracción y comunicación de datos.</li>
                <li><strong>Database:</strong> MySQL normalizado con enfoque en la optimización de tablas e índices para la integridad transaccional eficiente.</li>
            </ul>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Metodología</h4>
            <p class="text-gray-300">Por cuestiones de confidencialidad no es posible brindar detalles tan específicos.</p>
        </div>
      </div>
    `
  },
  // Proyecto de Sensores y Data Eng
  {
    id: 'iot-system',
    title: 'Sistema IoT & Data Engineering',
    shortDescription: 'Arquitectura de datos end-to-end. Desde que el sensor parpadea hasta el dashboard de Metabase, evitando Data Swamps en el camino.',
    tags: ['Python', 'FastAPI', 'RedPanda', 'MinIO', 'PostgreSQL', 'Metabase', 'Docker', 'IoT'],
    githubUrl: 'https://github.com/LuisXoo-C/Project-Data-Engineering.git',
    image: '/resources/Proyecto-sensores.png',
    isPrivate: false,
    stats: {
      value: 'Lakehouse',
      label: 'Arquitectura Híbrida & Medallion',
      subtext: 'Cold (S3) & Hot (SQL) Storage'
    },
    detailsHTML: `
    <div class="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
      
      <div>
        <p>Llegué a la conclusión de que limpiar un archivo CSV estático es como llegar al cine cuando la película ya terminó y solo ves los créditos: te pierdes toda la acción. Inspirado por <em>"Fundamentals of Data Engineering"</em>, utilizando arquitectura Medallion como base, construí este proyecto para dejar de ser un espectador y convertirme en el director de la orquesta de datos.</p>
      </div>

      <div>
        <h4 class="text-emerald-400 font-bold text-lg mb-2">The Journey (Buscando el Big Picture)</h4>
        <p>Quería entender de dónde vienen los datos y hacia dónde van realmente. Pasé de la teoría a la práctica construyendo un ciclo de vida completo: Generación -> Ingesta -> Almacenamiento -> Transformación -> Serving. Aprendí que la Ingeniería de Datos es mucho más que un simple script ETL; es garantizar que la historia del dato se cuente bien de principio a fin sin que el sistema colapse en el intento.</p>
      </div>

      <div>
        <h4 class="text-emerald-400 font-bold text-lg mb-2">Technical Stack (Decisiones de Diseño - ADRs)</h4>
        <ul class="space-y-2 mt-2">
            <li><strong class="text-white">Redpanda:</strong> Al principio pensé en el estándar de la industria (Apache Kafka). Pero levantar un clúster con Zookeeper para este volumen era, literalmente, usar una bazuca para matar un mosquito. Redpanda me dio la API de Kafka en C++ con cero estrés administrativo en Docker.</li>
            <li><strong class="text-white">FastAPI & Schema Registry:</strong> Implementé un "Shift-Left" en la calidad. Si un sensor envía una temperatura de 500°C (físicamente imposible), el contrato de datos rechaza el mensaje en la puerta. Adiós al temido <em>Data Swamp</em>.</li>
            <li><strong class="text-white">MinIO + PostgreSQL:</strong> Implementé un patrón Lakehouse híbrido. MinIO (S3) actúa como mi basurero glorificado para almacenar datos crudos de forma barata (Cold Data), y Postgres sirve solo los datos VIP ya procesados (Hot Data).</li>
            <li><strong class="text-white">Metabase:</strong> Porque necesitamos monitorear el desgaste de baterías y predecir mantenimientos en dashboards bonitos, y porque es open-source.</li>
        </ul>
      </div>
      
      <div class="pt-2">
      <h4 class="text-[var(--cp-primary-light)] font-bold text-lg mb-4">Arquitectura del Sistema</h4>
      
      <div class="w-full bg-[#050505] rounded-xl border border-neutral-800 overflow-hidden hover:border-[var(--cp-border-hover)] hover:shadow-lg hover:shadow-[var(--cp-glow)] transition-all duration-300 group p-2 md:p-4">
          <img 
              src="https://github.com/LuisXoo-C/Project-Data-Engineering/blob/main/Docs/Diagrama%20Arquitectura.png?raw=true" 
              alt="Diagrama de Arquitectura IoT y Data Engineering" 
              class="w-full h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
          >
      </div>
      <p class="text-xs text-neutral-500 text-center mt-3 italic">Flujo de datos desacoplado: Desde la generación (IoT) hasta la visualización (Metabase).</p>
    </div>

      <div>
        <h4 class="text-emerald-400 font-bold text-lg mb-2">The Reality Check (Post-Mortem)</h4>
        <p>El reto más grande no fue el código, sino la persistencia de datos. Al reiniciar mis contenedores, Metabase entraba en un bucle de la muerte. Descubrí que el script <code>init-metabase.sql</code> era ignorado por Postgres si el volumen (<code>pgdata</code>) ya existía (una medida de protección). Aprendí a golpes la diferencia entre <em>"Day 1 Ops"</em> (instalación) y <em>"Day 2 Ops"</em> (mantenimiento continuo).</p>
      </div>

    </div>
  `
  },
    // PROYECTO PARA DETECT FRAUD
  {
    id: 'Fraud-Detection',
    title: 'Pipeline de Detección de Fraude en Tiempo Real - FinTech',
    shortDescription: 'Arquitectura de datos de grado industrial que simula un ecosistema bancario para la detección de anomalías y patrones de fraude transaccional en sub-segundos.',
    tags: ['Python', 'Apache Kafka', 'Apache Spark', 'MinIO', 'ClickHouse', 'Docker', 'Stream Processing'],
    image: '/resources/Fraud-Detection/pantalla-1.png',
    isPrivate: false,
    githubUrl: 'https://github.com/LuisXoo-C/Fraud-Detection.git',
    stats: {
      value: '< 15ms',
      label: 'OLAP & Sub-sec Streaming',
      subtext: 'Kafka KRaft + PySpark + ClickHouse'
    },
    detailsHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
        <div>
          <p>Usando mi banca en línea me pregunté: <em>¿cómo detectan los bancos un fraude al vuelo antes de que el dinero salga, sin frenar al usuario legítimo?</em> Construir un pipeline básico no bastaba; quise diseñar una <strong>arquitectura FinTech de grado industrial</strong> con patrones Medallion (Bronze/Silver/Gold), procesamiento con estado en tiempo real y analítica OLAP de alto rendimiento.</p>
        </div>

        <div>
          <h4 class="text-emerald-400 font-bold text-lg mb-2">Decisiones de Arquitectura (¿Por qué cada pieza?)</h4>
          <ul class="space-y-3 mt-2">
            <li>
              <strong class="text-white">Kafka en KRaft (Particionado por account_id):</strong>
              Kafka solo asegura orden dentro de una misma partición. Si un retiro se procesa antes que su autorización por paralelismo desordenado, hay una falla crítica. Hashear por cuenta garantiza orden estricto de eventos y elimina la sobrecarga operativa de ZooKeeper.
            </li>
            <li>
              <strong class="text-white">PySpark Structured Streaming & Ventanas Deslizantes:</strong>
              Las transacciones no se evalúan aisladas. Usé ventanas deslizantes en memoria para detectar ataques de velocidad y la fórmula de <em>Haversine</em> (geo-velocidad imposible: > 800 km/h en traslados). Las ventanas fijas (tumbling) dejan puntos ciegos en los bordes; las deslizantes analizan el horizonte continuo.
            </li>
            <li>
              <strong class="text-white">MinIO (S3 Landing Zone - Bronze):</strong>
              El lago crudo inmutable. Si una regla de detección falla o cambia la regulación, tener los eventos brutos permite reconstruir y reentrenar modelos sin pérdida del histórico transaccional.
            </li>
            <li>
              <strong class="text-white">ClickHouse (Gold Layer OLAP):</strong>
              Un RDBMS tradicional colapsa al recibir ráfagas concurrentes de escritura mientras corre consultas analíticas pesadas. El motor columnar <code>MergeTree</code> de ClickHouse ofrece ingesta masiva y agregaciones en menos de 15 ms para alimentar tableros sin precalcular vistas rígidas.
            </li>
            <li>
              <strong class="text-white">Simulación Estadística Realista (No ruido blanco):</strong>
              Para validar el sistema no usé datos aleatorios planos. Modelé patrones circadianos (horas pico y valles de madrugada), estacionalidad de quincenas y compras cotidianas con distribución Log-Normal, inyectando anomalías de cola pesada en retiros fraudulentos.
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-emerald-400 font-bold text-lg mb-2">Aprendizajes Clave & Business Impact</h4>
          <ul class="space-y-2">
            <li>• <strong class="text-white">Exposición interceptada vs. Pérdida real:</strong> En streaming sub-segundo, el valor detectado representa <em>capital salvaguardado antes de liquidación</em>, protegiendo tanto la liquidez como el SLA del banco.</li>
            <li>• <strong class="text-white">Kimball Star Schema + VertiPaq:</strong> Modelar dimensiones conformadas (como <code>Dim_Calendar</code>) permite cross-filtering dinámico en 360° (ciudad, categoría de comercio, vector de ataque) sin quedar atrapado en silos aislados.</li>
            <li>• <strong class="text-white">Stateful CEP a escala:</strong> Manejo de watermarks y checkpoints para controlar el crecimiento de memoria distribuida sin perder transacciones fuera de tiempo.</li>
          </ul>
        </div>
        
        <div class="pt-2">
          <h4 class="text-[var(--cp-primary-light)] font-bold text-lg mb-4">Dashboard en Power BI</h4>
          <div class="space-y-4">
            <div class="w-full bg-[#050505] rounded-xl border border-neutral-800 overflow-hidden hover:border-[var(--cp-border-hover)] hover:shadow-lg hover:shadow-[var(--cp-glow)] transition-all duration-300 group p-2 md:p-4">
              <img 
                src="/resources/Fraud-Detection/pantalla-1.png" 
                alt="Página 1: Resumen Ejecutivo y Riesgo Estratégico" 
                class="w-full h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
              >
            </div>
            <p class="text-xs text-neutral-500 text-center italic">Página 1: Resumen Ejecutivo — KPIs clave con variación MoM.</p>

            <div class="w-full bg-[#050505] rounded-xl border border-neutral-800 overflow-hidden hover:border-[var(--cp-border-hover)] hover:shadow-lg hover:shadow-[var(--cp-glow)] transition-all duration-300 group p-2 md:p-4 mt-6">
              <img 
                src="/resources/Fraud-Detection/pantalla-2.png" 
                alt="Página 2: Operaciones de Fraude e Investigación de Alertas" 
                class="w-full h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
              >
            </div>
            <p class="text-xs text-neutral-500 text-center italic">Página 2: Triage y Operaciones de Fraude — Cola de incidentes críticos en tiempo real con auditoría de transacciones y score de riesgo.</p>
          </div>
        </div>

        <div class="pt-2">
          <h4 class="text-[var(--cp-primary-light)] font-bold text-lg mb-4">Arquitectura del Ecosistema</h4>
          <div class="w-full bg-[#050505] rounded-xl border border-neutral-800 overflow-hidden hover:border-[var(--cp-border-hover)] hover:shadow-lg hover:shadow-[var(--cp-glow)] transition-all duration-300 group p-2 md:p-4">
            <img 
              src="/resources/Fraud-Detection.png" 
              alt="Diagrama de Arquitectura - Detección de Fraude en Tiempo Real" 
              class="w-full h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
            >
          </div>
          <p class="text-xs text-neutral-500 text-center mt-3 italic">Pipeline Medallion: Desde la simulación y Kafka (KRaft), pasando por Spark y MinIO, hasta ClickHouse y Power BI.</p>
        </div>
      </div>
    `
  },
    // Sistema de los puertos de red.
  {
    id: 'Port-Reader',
    title: 'Sistema para administrar puertos de red',
    shortDescription: 'Sistema que monitorea el tráfico de puertos especificos de la red, con ello logrando conexión y comunicación con cada dispositivo conectado a dicho puerto.',
    tags: ['Python', 'Docker', 'Tkinter', 'Postgres DB', 'UDP/TCP'],
    image: '/resources/Port-Reader.png',
    isPrivate: false,
    stats: {
      value: 'Real-time',
      label: 'Latencia < 20ms',
      subtext: 'Comunicación de datos en tiempo real.'
    },
    detailsHTML: `
      <div class="space-y-6">
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">¿Cómo surgió?</h4>
            <p class="text-gray-300">Necesitaba poder comunicarme con unos microcontroladores mediante TCP y UDP y no encontré un sistema de código abierto que pueda satisfacer mis necesidades, entonces lo hice.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Logros</h4>
            <p class="text-gray-300">• Comunicación TCP Y UDP a dispositivos enlazados.</p>
            <p class="text-gray-300">• Logré comprender de la comunicación de datos redes.</p>
            <p class="text-gray-300">• Hacer que visualice la comunicación de muchos puertos a la vez.</p>
            <p class="text-gray-300">• Automatización de comandos según sea el dato que reciba.</p>
        </div>
      </div>
    `
  },
  {
    id: 'Port-Reader-V2',
    title: 'Sistema para administrar puertos de red V2',
    shortDescription: 'Modernizacion del Sistema que monitorea el tráfico de puertos especificos de la red, con ello logrando conexión y comunicación con cada dispositivo conectado a dicho puerto.',
    tags: ['Python', 'Angular', 'UDP/TCP'],
    image: '/resources/Port-v2.png',
    isPrivate: false,
    githubUrl: 'https://github.com/LuisXoo-C/Ports-Project-V2.git',
    stats: {
      value: 'Real-time',
      label: 'Latencia < 20ms',
      subtext: 'Comunicación de datos en tiempo real.'
    },
    detailsHTML: `
      <div class="space-y-6">
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">¿Cómo surgió?</h4>
            <p class="text-gray-300">Una tarde me dio por realizarle una pantalla más moderna a este proyecto, que en su tiempo me fue bastante útl.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Logros</h4>
            <p class="text-gray-300">• Ahora se puede cambiar entre TCP Y UDP a puertos especificos</p>
            <p class="text-gray-300">• Cuenta con tablas modernas con filtros</p>
            <p class="text-gray-300">• Logra hacer conexión a muchos.</p>
            <p class="text-gray-300">• Se puede realizar respuesta a dispositivos especificos.</p>
        </div>
        
        <div class="w-full bg-[#050505] rounded-xl border border-neutral-800 overflow-hidden hover:border-[var(--cp-border-hover)] hover:shadow-lg hover:shadow-[var(--cp-glow)] transition-all duration-300 group p-2 md:p-4">
              <img 
                  src="/resources/Port-v2-dashboard.png" 
                  alt="Dashboard del sistema." 
                  class="w-full h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
              >
          </div>
          <p class="text-xs text-neutral-500 text-center mt-3 italic">Dashboard moderno del sistema.</p>
        </div>
      </div>
    `
  }

  ];