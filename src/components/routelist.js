export const Routes = [
    {
      path: '/message',
      sidebarName: 'MessagefromCEO',
      sideContent: 'MessagefromCEO',
      icon: 'greet',
    },
    {
      path: '/history',
      sidebarName: 'History',
      sideContent: 'History',
      icon: 'his',
    },
    {
       path: '/location',
       sidebarName: 'Location',
       sideContent: 'Location',
       icon: 'loc',
    },
    {
        path: '/gases/Si₂H₆',
        sidebarName: 'Gases',
        sideContent: 'MessagefromCEO',
        icon: 'vector_1',
        submenu: [
         {
           id: "Si₂H₆",
           keyid: 4,
           path: "/gases/Si₂H₆",
           sidebarName: "Si₂H₆"
         },
         {
           id: "GeH₄",
           keyid: 5,
           path: "/gases/GeH₄",
           sidebarName: "GeH₄"
         },
         {
           id: "C₃H₆",
           keyid: 6,
           path: "/gases/C₃H₆",
           sidebarName: "C₃H₆"
         },
         {
           id: "C₄F₆",
           keyid: 7,
           path: "/gases/C₄F₆",
           sidebarName: "C₄F₆"
         },
         {
           id: "C₃F₈",
           keyid: 8,
           path: "/gases/C₃F₈",
           sidebarName: "C₃F₈"
         }
       ]
     },
     {
        path: '/chemical/H₃PO₄',
        sidebarName: 'Chemical',
        sideContent: 'MessagefromCEO',
        icon: 'vector_2',
        submenu: [
         {
           id: "H₃PO₄",
           keyid: 9,
           path: "/chemical/H₃PO₄",
           sidebarName: "H₃PO₄"
         },
         {
           id: "HF",
           keyid: 10,
           path: "/chemical/HF",
           sidebarName: "HF"
         },
         {
           id: "Anti-rust coating",
           keyid: 11,
           path: "/chemical/Anti-rust-coating",
           sidebarName: "Anti-rust coating"
         },
       ]
     },
     {
        path: '/gasket/Flex/DX/EX+Localized-Gasket-Parts',
        sidebarName: 'Gasket',
        sideContent: 'MessagefromCEO',
        icon: 'vector_3',
        submenu: [
         {
           id: "Flex/DX/EX+ Localized Gasket Parts",
           keyid: 12,
           path: "/gasket/Flex/DX/EX+Localized-Gasket-Parts",
           sidebarName: "Flex/DX/EX+ Localized Gasket Parts"
         },
         
       ]
     },
     {
        path: '/bead/RF-Series',
        sidebarName: 'Bead',
        sideContent: 'MessagefromCEO',
        icon: 'vector_4',
        submenu: [
         {
           id: "RF Series",
           keyid: 13,
           path: "/bead/RF-Series",
           sidebarName: "RF Series"
         },
         {
           id: "FEsphere P Series",
           keyid: 14,
           path: "/bead/FEsphere-P-Series",
           sidebarName: "FEsphere P Series"
         },
         {
           id: "FEsphere SS, SD Series",
           keyid: 15,
           path: "/bead/FEsphere-SS",
           sidebarName: "FEsphere SS, SD Series"
         },
         {
           id: "Pigment Powder",
           keyid: 16,
           path: "/bead/Pigment-Powder",
           sidebarName: "Pigment Powder"
         },
         {
           id: "Coated Powders",
           keyid:17,
           path: "/bead/Coated-Powders",
           sidebarName: "Coated Powders"
         }
       ]
     },
     {
        path: '/fdt/NOVEC-1230-Manual-fire-extinguisher',
        sidebarName: 'FDT',
        sideContent: 'MessagefromCEO',
        icon: 'vector_5',
        submenu: [
         {
           id: "NOVEC 1230 Manual fire extinguisher",
           keyid: 18,
           path: "/fdt/NOVEC-1230-Manual-fire-extinguisher",
           sidebarName: "NOVEC 1230 Manual fire extinguisher"
         },
         {
           id: "NOVEC 1230 Automatic fire extinguisher",
           keyid: 19,
           path: "/fdt/NOVEC-1230-Automatic-fire-extinguisher",
           sidebarName: "NOVEC 1230 Automatic fire extinguisher"
         },
       ]
     },
     {
        path: '/shuttervalve/AVS-50',
        sidebarName: 'ShutterValve',
        sideContent: 'MessagefromCEO',
        icon: 'vector_6',
        submenu: [
         {
           id: "AVS - 50",
           keyid: 20,
           path: "/shuttervalve/AVS-50",
           sidebarName: "AVS - 50"
         },
       ]
     },
     {
        path: '/employment',
        sidebarName: 'Employment',
        sideContent: 'MessagefromCEO',
        icon: 'recruitIcon',
     },
     {
        path: '/apply',
        sidebarName: 'Apply',
        sideContent: 'MessagefromCEO',
        icon: 'recruitIcon',
     },
     {
        path: '/notice',
        sidebarName: 'Notice',
        sideContent: 'MessagefromCEO',
        icon: 'notice',
     },
     {
        path: '/catalogue',
        sidebarName: 'Catalogue',
        sideContent: 'MessagefromCEO',
        icon: 'catalogue',
     },
     {
        path: '/msds',
        sidebarName: 'MSDS',
        sideContent: 'MessagefromCEO',
        icon: 'catalogue',
     },
     {
        path: '/promotioncenter',
        sidebarName: 'PromotionCenter',
        sideContent: 'MessagefromCEO',
        icon: 'prRoom',
     },
     {
        path: '/inquiry',
        sidebarName: 'Inquiry',
        sideContent: 'MessagefromCEO',
        icon: 'recruitIcon',
     },
  ];