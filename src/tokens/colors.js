const rgbaColor = {
  black: (opacity = 1) => `rgba(38,38,38,${opacity})`,
  default: (opacity = 1) => `rgba(60,188,215,${opacity})`,
  gray: (opacity = 1) => `rgba(102,102,102,${opacity})`,
  orangeLighter: (opacity = 1) => `rgba(238,120,55,${opacity})`,
  purpleDark: (opacity = 1) => `rgba(71,37,131,${opacity})`,
  purpleLighter: (opacity = 1) => `rgba(130,53,139,${opacity})`,
};

const colors = {
  base: {
    white: '#FFF',
    black: rgbaColor.black(),
    default: rgbaColor.default(),
    gray: rgbaColor.gray(),
    orangeLighter: rgbaColor.orangeLighter(),
    purpleDark: rgbaColor.purpleDark(),
    purpleLighter: rgbaColor.purpleLighter(),
  },
  // text: {
  //   default: '#212121',
  //   inputs: '#555',
  //   secondary: '#757575',
  //   subtle: '#BDBDBD',
  //   error: '#FF0000'
  // },
  // form: {
  //   title: '#000',
  //   divider: 'rgba(151,151,151,0.29)',
  //   background: '#f9f9f9'
  // },
  input: {
    background: '#FFF',
    backgroundReadOnly: '#F3F4F4',
    border: '#D9D9D9',
    borderHover: '#B7B7B7',
    borderFocus: '#0a84ae',
    borderError: '#FF0000',
    icon: '#A2A2A2',
    text: '#333',
    placeholder: '#B2B2B2',
    placeholderDisabled: '#C1C1C1',
    placeholderReadOnly: '#333',
    label: '#333',
    labelDisabled: '#C6C6C6',
  },
  link: {
    default: '#0a84ae',
    defaultHover: '#053b4e',
    defaultFocus: '#053b4e',
    sidebar: '#333',
    sidebarHover: '#FF3E00',
    sidebarFocus: '#FF3E00',
  },
  tooltip: {
    background: '#1A1A1A',
    text: '#FFF',
  },
  tabs: {
    default: '#212121',
    defaultHover: '#0a84ae',
  },
  button: {
    default: {
      background: rgbaColor.default(),
      backgroundHover: rgbaColor.default(0.8),
      backgroundFocus: rgbaColor.default(),
      backgroundActive: rgbaColor.default(),
      text: '#FFF',
      icon: '#FFF',
      border: rgbaColor.default(),
      borderHover: rgbaColor.default(0.8),
      borderFocus: rgbaColor.default(),
      borderActive: rgbaColor.default(),
    },
    primary: {
      background: rgbaColor.default(),
      backgroundHover: rgbaColor.default(0.8),
      backgroundFocus: rgbaColor.default(),
      backgroundActive: rgbaColor.default(),
      text: '#FFF',
      icon: '#FFF',
      border: rgbaColor.default(),
      borderHover: rgbaColor.default(0.8),
      borderFocus: rgbaColor.default(),
      borderActive: rgbaColor.default(),
    },
    secondary: {
      background: 'transparent',
      backgroundHover: rgbaColor.default(),
      backgroundFocus: rgbaColor.default(),
      backgroundActive: rgbaColor.default(),
      text: rgbaColor.default(),
      textHover: '#FFF',
      icon: rgbaColor.default(),
      iconHover: '#FFF',
      border: '#D0D2D3',
      borderHover: rgbaColor.default(),
      borderFocus: rgbaColor.default(),
      borderActive: rgbaColor.default(),
    },
    tertiaryButton: {
      background: 'transparent',
      backgroundHover: rgbaColor.orangeLighter(),
      backgroundFocus: rgbaColor.orangeLighter(),
      backgroundActive: rgbaColor.orangeLighter(),
      text: rgbaColor.orangeLighter(),
      textHover: '#FFF',
      icon: rgbaColor.orangeLighter(),
      iconHover: '#FFF',
      border: rgbaColor.orangeLighter(),
      borderHover: rgbaColor.orangeLighter(),
      borderFocus: rgbaColor.orangeLighter(),
      borderActive: rgbaColor.orangeLighter(),
    },
    destructive: {
      background: '#FF0000',
      backgroundHover: '#E40002',
      backgroundFocus: '#E40002',
      backgroundActive: '#BE0001',
      text: '#FAFAFA',
      icon: 'white',
      border: '#FF0000',
      borderHover: '#E40002',
      borderFocus: '#E40002',
      borderActive: '#BE0001',
    },
    success: {
      background: '#4CD964',
      backgroundHover: '#4CD964',
      backgroundFocus: '#4CD964',
      text: '#FAFAFA',
      icon: 'white',
      border: '#4CD964',
      borderHover: '#4CD964',
      borderFocus: '#4CD964',
      borderActive: '#4CD964',
    },
    link: {
      text: '#0a84ae',
      icon: 'blue',
      hover: '#0a84ae',
      focus: '#0a84ae',
    },
  },
  icon: {
    default: '#333',
    light: '#A8A8A8',
    sidebar: 'default',
    sidebarHover: 'orangeDark',
    sidebarFocus: 'orangeDark',
  },
  // list: {
  //   backgroundHover: '#FAFAFA',
  //   borderColor: '#DDD'
  // },
  // alert: {
  //   default: {
  //     background: '#F0F0F0',
  //     text: '#333'
  //   },
  //   information: {
  //     background: '#DBF4FC',
  //     text: '#097093'
  //   },
  //   success: {
  //     background: '#E5F8D1',
  //     text: '#3F6910'
  //   },
  //   warning: {
  //     background: '#FFF6CB',
  //     text: '#786600'
  //   },
  //   danger: {
  //     background: '#FFD8CC',
  //     text: '#801F00'
  //   }
  // },
  // radio: {
  //   background: '#FFF',
  //   border: '#BEBEBE',
  //   backgroundSelected: '#3B99FC',
  //   borderSelected: '#2C90FC',
  //   backgroundDisabled: '#F6F6F6',
  //   borderDisabled: '#CCC',
  //   shadow: 'rgba(0,0,0,0.20)',
  //   shadowDisabled: 'rgba(0,0,0,0.10)'
  // },
  // status: {
  //   default: '#7D7D7D',
  //   information: '#3BC0F2',
  //   success: '#73CD1F',
  //   warning: '#F49C20',
  //   danger: '#D14B49'
  // },
  // tag: {
  //   background: '#DBF4FD',
  //   border: '#3BC0F2',
  //   text: '#3BC0F2'
  // }
};

module.exports = colors;
