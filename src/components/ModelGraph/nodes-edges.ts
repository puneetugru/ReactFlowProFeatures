/*eslint no-undef: "error"*/

const position = { x: 0, y: 0 };

export const intermediateData = {
   "element": {
      "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1": {
         "name": "driveWheels",
         "typeId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-2e20767a-ddb6-4032-bf21-60ac526b84a0": {
         "name": "transmission",
         "typeId": "type-56004b5c-6a64-4b9c-a4d2-eb6ab41e9189",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5": {
         "name": "driveshaft",
         "typeId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-628975f9-18b2-45d7-843e-13ddb8bf7c07": {
         "name": "rearDifferential",
         "typeId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
         "componentOf": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-5fdcf358-4ffb-499a-b910-a74360e2a244": {
         "name": "engine",
         "typeId": "type-13d3f49a-8f52-4d7d-8bb7-49695ca2e00f",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-519b58b5-5406-47be-8ea4-38e6f6585712": {
         "name": "drivetrain",
         "typeId": "type-96773373-515e-4e2a-8a05-c036c401f36e",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-ab836a4c-ee61-4032-8b9a-dba873ce7350": {
         "name": "driver",
         "typeId": "type-9ffa6b70-08af-428d-9060-50916d64a013",
         "componentOf": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "element-0a0beae8-8310-46c3-a45d-719581e7faa3": {
         "name": "myFooVehicle",
         "typeId": "type-076b1ab2-a18d-4827-bb10-517d26e654da",
         "componentOf": "WORLD",
         "assign": {},
         "symptom": {},
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      }
   },
   "elementType": {
      "type-9ffa6b70-08af-428d-9060-50916d64a013": {
         "name": "Driver",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772": {
               "name": "noGo",
               "when": [],
               "implies": []
            },
            "symptom-b0878406-79a9-477c-a57d-7fcc5b049703": {
               "name": "engineNoTorque",
               "when": [],
               "implies": []
            },
            "symptom-0b2bb986-3773-42b2-819d-d666d3d210c2": {
               "name": "engineRpmNonzero",
               "when": [],
               "implies": []
            },
            "symptom-d163b781-90a5-4351-bae1-1992fa561a44": {
               "name": "noThrottle",
               "when": [],
               "implies": []
            },
            "symptom-120b1d95-c696-4a3a-9222-e9692d811ef7": {
               "name": "nonzeroThrottle",
               "when": [],
               "implies": []
            },
            "symptom-ab13edc1-9cc0-4110-96c9-e37a20fec620": {
               "name": "driveTrainFailure",
               "when": [],
               "implies": []
            },
            "symptom-2b9d2e5f-ff88-4ff6-b4d8-e4208e586425": {
               "name": "parkingBrakeOff",
               "when": [],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-13d3f49a-8f52-4d7d-8bb7-49695ca2e00f": {
         "name": "Engine",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-daf49bf0-8237-4e84-a620-f8ccc109365e": {
               "name": "failure",
               "when": [],
               "implies": [],
               "rootCauseName": "failure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-56004b5c-6a64-4b9c-a4d2-eb6ab41e9189": {
         "name": "Transmission",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-580c313c-c319-4f28-8bc4-6ede297ac790": {
               "name": "ds",
               "typeId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-0f31466d-eb4a-454b-ad94-7523b3b90a55": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
                     "symptomId": "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270"
                  }
               ]
            },
            "symptom-bc5c3a05-88e8-41c2-b7a9-0f292eade997": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799",
                     "symptomId": "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270"
                  }
               ],
               "rootCauseName": "transmissionFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-1a56cc7b-f300-4b59-b3e6-36efef5f7799": {
         "name": "Driveshaft",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-e8624abd-00c7-4ede-9227-8026b631a992": {
               "name": "rd",
               "typeId": "type-64d6b067-7246-49fb-a081-05c52eadafd8"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-909ffe95-17a3-482d-bd70-2a7a8623e270": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
                     "symptomId": "symptom-19dc43d0-507e-4610-9295-3a352488b862"
                  }
               ]
            },
            "symptom-d4c37989-bda2-40ac-befe-d3c20b8c0391": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-64d6b067-7246-49fb-a081-05c52eadafd8",
                     "symptomId": "symptom-19dc43d0-507e-4610-9295-3a352488b862"
                  }
               ],
               "rootCauseName": "driveshaftFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-64d6b067-7246-49fb-a081-05c52eadafd8": {
         "name": "RearDifferential",
         "baseTypeId": "",
         "component": [],
         "elementReference": {
            "ref-e6242469-1bb7-4cfc-befc-84a7acb6b711": {
               "name": "dw",
               "typeId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33"
            }
         },
         "assign": {},
         "symptom": {
            "symptom-19dc43d0-507e-4610-9295-3a352488b862": {
               "name": "noTorque",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
                     "symptomId": "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20"
                  }
               ]
            },
            "symptom-3951b9cb-b44f-43c7-9b68-e44e8305f8b7": {
               "name": "failure",
               "when": [],
               "implies": [
                  {
                     "targetId": "type-eb04ca9a-96b3-4712-b73d-f76e642acd33",
                     "symptomId": "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20"
                  }
               ],
               "rootCauseName": "rearDifferentialFailure",
               "probability": 0.9
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-eb04ca9a-96b3-4712-b73d-f76e642acd33": {
         "name": "DriveWheels",
         "baseTypeId": "",
         "component": [],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-568d1dc8-49a0-4775-a31f-9df32bbb1c20": {
               "name": "noTorque",
               "when": [],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-96773373-515e-4e2a-8a05-c036c401f36e": {
         "name": "Drivetrain",
         "baseTypeId": "",
         "component": [
            "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1",
            "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
            "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
            "element-628975f9-18b2-45d7-843e-13ddb8bf7c07"
         ],
         "elementReference": {},
         "assign": {
            "assign-59999034-0131-4b68-a0c4-b1454a5cf353": {
               "sourceElementId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
               "sourceReferenceId": "ref-e8624abd-00c7-4ede-9227-8026b631a992",
               "targetElementId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07"
            },
            "assign-96dedc95-83e9-471c-bf2d-6385fb89b8c7": {
               "sourceElementId": "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
               "sourceReferenceId": "ref-580c313c-c319-4f28-8bc4-6ede297ac790",
               "targetElementId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5"
            },
            "assign-e536750e-7c7c-44fb-8327-9c2a1bd4c2d2": {
               "sourceElementId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07",
               "sourceReferenceId": "ref-e6242469-1bb7-4cfc-befc-84a7acb6b711",
               "targetElementId": "element-c0ee619d-dfe8-40ac-85e9-e93986fe1bd1"
            }
         },
         "symptom": {
            "symptom-0c067a41-41cd-4b1f-87b1-9ceb34e0455f": {
               "name": "transmissionFailure",
               "when": [
                  {
                     "targetId": "element-2e20767a-ddb6-4032-bf21-60ac526b84a0",
                     "symptomId": "symptom-bc5c3a05-88e8-41c2-b7a9-0f292eade997"
                  }
               ],
               "implies": []
            },
            "symptom-614bbe5f-694f-439c-be3b-c89dd402dc91": {
               "name": "driveShaftFailure",
               "when": [
                  {
                     "targetId": "element-08520fb9-74fe-451e-aa2b-367f9f8e90a5",
                     "symptomId": "symptom-d4c37989-bda2-40ac-befe-d3c20b8c0391"
                  }
               ],
               "implies": []
            },
            "symptom-8afe0fd2-3605-4f2a-97e9-93ba79367ac8": {
               "name": "rearDifferentialFailure",
               "when": [
                  {
                     "targetId": "element-628975f9-18b2-45d7-843e-13ddb8bf7c07",
                     "symptomId": "symptom-3951b9cb-b44f-43c7-9b68-e44e8305f8b7"
                  }
               ],
               "implies": []
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      },
      "type-076b1ab2-a18d-4827-bb10-517d26e654da": {
         "name": "FooVehicle",
         "baseTypeId": "",
         "component": [
            "element-5fdcf358-4ffb-499a-b910-a74360e2a244",
            "element-519b58b5-5406-47be-8ea4-38e6f6585712",
            "element-ab836a4c-ee61-4032-8b9a-dba873ce7350"
         ],
         "elementReference": {},
         "assign": {},
         "symptom": {
            "symptom-e0458361-5598-4c9f-921c-9c125625d2ef": {
               "name": "engineFailure",
               "when": [
                  {
                     "targetId": "element-5fdcf358-4ffb-499a-b910-a74360e2a244",
                     "symptomId": "symptom-daf49bf0-8237-4e84-a620-f8ccc109365e"
                  }
               ],
               "implies": [
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b0878406-79a9-477c-a57d-7fcc5b049703"
                  }
               ]
            },
            "symptom-be55e01a-23b0-47d7-b40c-9af67759322e": {
               "name": "drivetrainFailure",
               "when": [
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-0c067a41-41cd-4b1f-87b1-9ceb34e0455f"
                  },
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-614bbe5f-694f-439c-be3b-c89dd402dc91"
                  },
                  {
                     "targetId": "element-519b58b5-5406-47be-8ea4-38e6f6585712",
                     "symptomId": "symptom-8afe0fd2-3605-4f2a-97e9-93ba79367ac8"
                  }
               ],
               "implies": [
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b45ccfbe-c9f9-48ff-8827-b622d8e48772"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-b0878406-79a9-477c-a57d-7fcc5b049703"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-2b9d2e5f-ff88-4ff6-b4d8-e4208e586425"
                  },
                  {
                     "targetId": "element-ab836a4c-ee61-4032-8b9a-dba873ce7350",
                     "symptomId": "symptom-120b1d95-c696-4a3a-9222-e9692d811ef7"
                  }
               ]
            }
         },
         "namespace": "WORLD",
         "modelFileLocation": {
            "fileType": "elementtype"
         }
      }
   }
};

// export const initialNodes = [
//    {
//       id: '1',
//       type: 'input',
//       data: { label: 'input' },
//       position,
//    },
//    {
//       id: '2',
//       data: { label: 'node 2' },
//       position,
//    },
//    {
//       id: '2a',
//       data: { label: 'node 2a' },
//       position,
//    },
//    {
//       id: '2b',
//       data: { label: 'node 2b' },
//       position,
//    },
//    {
//       id: '2c',
//       data: { label: 'node 2c' },
//       position,
//    },
//    {
//       id: '2d',
//       data: { label: 'node 2d' },
//       position,
//    },
//    {
//       id: '3',
//       data: { label: 'node 3' },
//       position,
//    },
//    {
//       id: '4',
//       data: { label: 'node 4' },
//       position,
//    },
//    {
//       id: '5',
//       data: { label: 'node 5' },
//       position,
//    },
//    {
//       id: '6',
//       type: 'output',
//       data: { label: 'output' },
//       position,
//    },
//    { id: '7', type: 'output', data: { label: 'output' }, position },
// ];

export const initialEdges = [
   // { id: 'e12', source: '1', target: '2', type: 'smoothstep' },
   // { id: 'e13', source: '1', target: '3', type: 'smoothstep' },
   // { id: 'e22a', source: '2', target: '2a', type: 'smoothstep' },
   // { id: 'e22b', source: '2', target: '2b', type: 'smoothstep' },
   // { id: 'e22c', source: '2', target: '2c', type: 'smoothstep' },
   // { id: 'e2c2d', source: '2c', target: '2d', type: 'smoothstep' },
   // { id: 'e45', source: '4', target: '5', type: 'smoothstep' },
   // { id: 'e56', source: '5', target: '6', type: 'smoothstep' },
   // { id: 'e57', source: '5', target: '7', type: 'smoothstep' },
];

// export function getElementTypeMap () {
//    let elementTypeMap = new Map ();
//    for (const elementTypeId in intermediateData.elementType) {
//       elementTypeMap.set(
//          elementTypeId, intermediateData.elementType[elementTypeId].name
//       );
//    }
//    return elementTypeMap;
// };

export const initialNodes = []
for (const elementTypeId in intermediateData.elementType) {
   initialNodes.push({
      id: elementTypeId,
      type: 'input',
      data: { label: intermediateData.elementType[elementTypeId].name},
      position
   })
}
