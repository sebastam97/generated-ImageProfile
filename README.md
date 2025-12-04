# ProLink - Generador de Fotos Profesionales con IA

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_AI-2.5-4285F4?style=for-the-badge&logo=google&logoColor=white)

**Transforma tus selfies en fotos de perfil profesionales para LinkedIn usando inteligencia artificial.**

[Ver Demo](https://sebastam97.github.io/generated-ImageProfile) · [Reportar Bug](https://github.com/sebastam97/generated-ImageProfile/issues)

</div>

---

## ✨ Características

- 🖼️ **Múltiples Referencias** - Sube hasta 4 fotos para mejores resultados
- 🎨 **Iluminación Profesional** - Corrección automática con estilo Rembrandt
- 👔 **Vestimenta Profesional** - La IA ajusta tu atuendo a uno más formal
- 🏢 **Fondos Neutros** - Oficinas desenfocadas o gradientes profesionales
- 📱 **Diseño Responsivo** - Funciona en desktop y móvil
- 🔐 **API Key Segura** - Tu clave se guarda solo en tu navegador

## 🚀 Demo

👉 **[https://sebastam97.github.io/generated-ImageProfile](https://sebastam97.github.io/generated-ImageProfile)**

## 📋 Requisitos

Para generar imágenes necesitas:

1. Una **API Key de Gemini** con acceso al modelo `gemini-2.5-flash-image`
2. **Facturación habilitada** en Google Cloud (hay $300 USD de crédito gratis para nuevos usuarios)

## 🛠️ Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/sebastam97/generated-ImageProfile.git

# Entrar al directorio
cd generated-ImageProfile

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Styled Components** | Estilos CSS-in-JS |
| **Gemini AI** | Generación de imágenes |
| **Lucide React** | Iconos |

## 📁 Estructura del Proyecto

```
├── components/
│   ├── ApiKeyModal/      # Modal para ingresar API Key
│   ├── layout/           # Componentes de layout
│   └── ui/               # Componentes reutilizables
├── features/
│   └── generator/        # Lógica de generación de fotos
│       ├── api/          # Integración con Gemini
│       ├── components/   # Componentes del generador
│       └── hooks/        # Custom hooks
├── services/             # Servicios externos
└── styles/               # Estilos globales
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
