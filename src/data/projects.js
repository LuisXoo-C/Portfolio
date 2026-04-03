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
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Referencias</h4>
            <p class="text-gray-300">Lic. Fernando Gómez. +504 9514-7998</p>
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
    image: '/resources/Proyecto-sensores.png',
    isPrivate: false,
    stats: {
      value: 'Lakehouse',
      label: 'Arquitectura Híbrida',
      subtext: 'Cold (S3) & Hot (SQL) Storage'
    },
    detailsHTML: `
    <div class="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
      
      <div>
        <p>Llegué a la conclusión de que limpiar un archivo CSV estático es como llegar al cine cuando la película ya terminó y solo ves los créditos: te pierdes toda la acción. Inspirado por <em>"Fundamentals of Data Engineering"</em>, construí este proyecto para dejar de ser un espectador y convertirme en el director de la orquesta de datos.</p>
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

      <div>
        <h4 class="text-emerald-400 font-bold text-lg mb-2">The Reality Check (Post-Mortem)</h4>
        <p>El reto más grande no fue el código, sino la persistencia de datos. Al reiniciar mis contenedores, Metabase entraba en un bucle de la muerte. Descubrí que el script <code>init-metabase.sql</code> era ignorado por Postgres si el volumen (<code>pgdata</code>) ya existía (una medida de protección). Aprendí a golpes la diferencia entre <em>"Day 1 Ops"</em> (instalación) y <em>"Day 2 Ops"</em> (mantenimiento continuo).</p>
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
  }

  ];