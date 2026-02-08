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
      value: '400%',
      label: 'Incremento en capacidad operativa',
      subtext: 'Reducción de tiempos: 7h ➝ 45min'
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
            <p class="text-gray-300">• Incremento del 400% en capacidad operativa: Transformé un proceso manual en un ecosistema digital automatizado, permitiendo a la aseguradora procesar 4 veces más solicitudes con el mismo personal.</p>
            <p class="text-gray-300">• Reducción de latencia (90%): Optimicé el ciclo de vida del crédito, reduciendo el tiempo de 7 horas a 45 minutos por expediente mediante procesamiento asíncrono.</p>
            <p class="text-gray-300">• Cero margen de error legal: Automaticé la generación de contratos y pólizas, eliminando errores humanos en documentos regulatorios críticos.</p>
            <p class="text-gray-300">• Módulos parametrizados para la escalabilidad dinámica y asegurada del sistema.</p>
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
    title: 'Sistema IoT + Data Engineering',
    shortDescription: 'Monitoreo de sensores en tiempo real, abarca todo el ciclo de vida de los datos. (Desde la Generación hasta la Visualización de los datos.)',
    tags: ['Python', 'Docker','C++' , 'FastAPI', 'RedPanda', 'MinIO', 'Postgres DB', 'Metabase'],
    image: '/resources/Proyecto-sensores.png',
    isPrivate: false,
    stats: {
      value: 'Real-time',
      label: 'Latencia < 100ms',
      subtext: 'Transmisión de datos sensoriales'
    },
    detailsHTML: `
      <div class="space-y-6">
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">¿Cómo surgió la idea?</h4>
            <p class="text-gray-300">.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">El Desafío</h4>
            <p class="text-gray-300">Comprender en su mayoría el concepto de lo que hace y por qué un Ingeniero de Datos.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Logros</h4>
            <p class="text-gray-300">• Obtuve un acercamiento más allá de lo macro y me enfrenté a problemas de análisis.</p>
            <p class="text-gray-300">• Logré hacer y comprender el flujo de un sistema de datos y como está comprendido cada elemento para hacer que los datos raw al concluir tengan sentido para el usuario final.</p>
            <p class="text-gray-300">• Desacoplamiento del sistema completo, para que cuando se rompa algo no afecte a las demás partes del sistema.</p>
            <p class="text-gray-300">• Logré hacer un sistema de datos estandarizado y mantenible.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Arquitectura</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li><strong>:</strong> .</li>
                <li><strong>:</strong> .</li>
                <li><strong>:</strong> .</li>
            </ul>
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