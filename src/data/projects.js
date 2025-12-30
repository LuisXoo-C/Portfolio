export const projects = [
  {
    id: 'credifisa', // ID único
    company: 'SEGUROS CREFISA - SEGUROS CREDIFISA',
    title: 'Sistema de Gestión Crediticia',
    shortDescription: 'Transformación digital completa: De procesos manuales a un ecosistema digital automatizado.',
    tags: ['Laravel', 'Node.js API', 'MySQL', 'On-Premise'],
    image: 'https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/08/Seguros-Crefisa-aniversario-27.jpg',
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
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Seguros Crefisa / Seguros Credifisa</h4>
            <p class="text-gray-300">Es una compañía aseguradora de capital 100% hondureño, fundada en 1993 (tiene más de 30 años en el mercado). Está regulada y supervisada por la Comisión Nacional de Bancos y Seguros (CNBS).</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">El Desafío</h4>
            <p class="text-gray-300">La institución operaba con procesos manuales descentralizados, causando redundancia de datos y tiempos de espera de 7+ horas por cliente.</p>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Arquitectura (On-Premise)</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li><strong>Frontend:</strong> PHP Laravel (MVC) para gestión de sesiones seguras.</li>
                <li><strong>Middleware:</strong> API RESTful en Node.js como capa de abstracción.</li>
                <li><strong>Database:</strong> MySQL normalizado con enfoque en la optimización de tablas e índices para la integridad transaccional eficiente.</li>
            </ul>
        </div>
        <div>
            <h4 class="text-emerald-400 font-bold text-lg mb-2">Metodología</h4>
            <p class="text-gray-300">Se aplicó análisis de sistemas <strong>Kendall & Kendall</strong> para modelado de flujos y normalización de documentos.</p>
        </div>
      </div>
    `
  },
  {
    id: 'iot-system',
    title: 'Sistema IoT + Data Engineering',
    shortDescription: 'Monitoreo en tiempo real con ESP32 y orquestación de datos.',
    tags: ['C++', 'MQTT', 'Airflow', 'MinIO'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    isPrivate: false,
    stats: {
      value: 'Real-time',
      label: 'Latencia < 100ms',
      subtext: 'Transmisión de datos sensoriales'
    },
    detailsHTML: `
      <p class="text-gray-300">Aquí irían los detalles técnicos de tu sistema IoT, cómo usaste los sockets, MQTT, etc...</p>
    `
  }
];