import { theme } from "antd";

export const customTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Couleurs bleu de Radix UI
    colorPrimary: "#0090FF", // Bleu principal de Radix
    colorPrimaryHover: "#3BA1FF", // Variante claire pour hover
    colorPrimaryActive: "#0066CC", // Variante plus foncée pour état actif

    // Palette de bleus complémentaires de Radix
    colorInfo: "#0090FF",
    colorInfoHover: "#3BA1FF",
    colorInfoActive: "#0066CC",

    // Autres tokens
    borderRadius: 6,
    fontFamily: "Inter, system-ui, sans-serif",

    // Couleurs secondaires et de status
    colorSuccess: "#30A46C", // Vert de Radix
    colorWarning: "#FFB300", // Jaune
    colorError: "#E5484D", // Rouge
  },
  components: {
    Button: {
      colorPrimary: "#1890ff", // Couleur de base
      colorPrimaryHover: "#40a9ff", // Bleu plus clair au survol
      colorPrimaryActive: "#096dd9", // Bleu plus foncé au clic
      colorPrimaryBg: "#1890ff", // Couleur de fond par défaut
      colorPrimaryBgHover: "#40a9ff", // Couleur de fond au survol
      colorPrimaryText: "#ffffff", // Texte en blanc
      algorithm: true,
    },
    Input: {
      borderRadius: 6,
      colorPrimary: "#0090FF",
    },
    Select: {
      borderRadius: 6,
    },
    Typography: {
      fontFamily: "Inter, system-ui, sans-serif",
    },
  },
};
