import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E6F0FF",
      100: "#B8D5FF",
      200: "#8ABAFE",
      300: "#5D9FFE",
      400: "#2F84FE",
      500: "#0169FE",
      600: "#0154CB",
      700: "#013F98",
      800: "#002A66",
      900: "#001533",
    },
    darkBlue: {
      50: "#E9F3FB",
      100: "#C2DCF5",
      200: "#9AC6EF",
      300: "#72B0E8",
      400: "#4B99E2",
      500: "#2383DC",
      600: "#1C69B0",
      700: "#154F84",
      800: "#0E3458",
      900: "#071A2C",
    },
  },
  components: {
    Button: {
      baseStyle: {
        // py: "4",
        // px: "8",
      },
      variants: {
        light: {
          bg: "white",
          border: "1px solid",
          borderColor: "gray.300",
          fontSize: "sm",
          py: "6",
        },
        darkBlue: {
          bg: "darkBlue.900",
          color: "white",
          fontSize: "sm",
          py: "6",
        },
        blue: {
          bg: "brand.500",
          color: "white",
          rounded: "xl",
        },
      },
    },
  },
});

export default theme;
