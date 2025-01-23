// Based on footprint copied from KiCad

module.exports = {
  params: {
    side: "F",
    S1: { type: "net", value: "S1" },
    A12: { type: "net", value: "A12" },
    A9: { type: "net", value: "A9" },
    B5: { type: "net", value: "B5" },
    A5: { type: "net", value: "A5" },
    B9: { type: "net", value: "B9" },
    B12: { type: "net", value: "B12" },
  },
  body: (p) => {
    const r = p.r + 180;
    return `
      (footprint "Connector_USB:USB_C_Receptacle_GCT_USB4135-GF-A_6P_TopMnt_Horizontal"
        (layer "${p.side}.Cu")
        (uuid "689e1154-6b9a-4130-9320-65f5f10d8d9e")
        (at ${p.x} ${p.y} ${r})
        (descr "USB Type C Receptacle, GCT, power-only, 6P, top mounted, horizontal, 3A: https://gct.co/files/drawings/usb4135.pdf")
        (tags "USB C Type-C Receptacle SMD USB Power-only Charging-only 6P 6C USB4135-GF-A")
        (property "Reference" "REF**"
          (at 0 -4.5 0)
          (unlocked yes)
          (layer "${p.side}.SilkS")
          ${p.ref_hide}
          (uuid "a4a15005-76dc-4b93-abc5-70bce396f27c")
          (effects
            (font
              (size 1 1)
              (thickness 0.15)
            )
          )
        )
        (property "Value" "USB_C_Receptacle_GCT_USB4135-GF-A_6P_TopMnt_Horizontal"
          (at 0 4.5 0)
          (unlocked yes)
          (layer "${p.side}.Fab")
          (uuid "4ff6b29d-7fae-4fe5-926c-bf4a7b506ec9")
          (effects
            (font
              (size 1 1)
              (thickness 0.15)
            )
          )
        )
        (property "Footprint" "Connector_USB:USB_C_Receptacle_GCT_USB4135-GF-A_6P_TopMnt_Horizontal"
          (at 0 0 0)
          (unlocked yes)
          (layer "${p.side}.Fab")
          (hide yes)
          (uuid "d3cf6918-2f0c-44e1-8de0-f514b15d5a1d")
          (effects
            (font
              (size 1.27 1.27)
              (thickness 0.15)
            )
          )
        )
        (property "Datasheet" ""
          (at 0 0 0)
          (unlocked yes)
          (layer "${p.side}.Fab")
          (hide yes)
          (uuid "39f83063-af09-4aba-b08c-df87e224a40b")
          (effects
            (font
              (size 1.27 1.27)
              (thickness 0.15)
            )
          )
        )
        (property "Description" ""
          (at 0 0 0)
          (unlocked yes)
          (layer "${p.side}.Fab")
          (hide yes)
          (uuid "d086f37f-6921-4796-9d8c-fdf0b027a941")
          (effects
            (font
              (size 1.27 1.27)
              (thickness 0.15)
            )
          )
        )
        (attr smd)
        (fp_line
          (start -4.75 3.4525)
          (end 4.75 3.4525)
          (stroke
            (width 0.1)
            (type solid)
          )
          (layer "Dwgs.User")
          (uuid "37a897b6-3bb4-4a8f-b450-47b0f82a1f45")
        )
        (fp_line
          (start -6.55 -4.2)
          (end -6.55 -1.8)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "196dc3eb-b1f9-4321-9185-591ad1fcdc48")
        )
        (fp_line
          (start -6.55 -1.8)
          (end -5 -1.8)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "10bcebc2-6ed3-4beb-938d-a5accd24ad94")
        )
        (fp_line
          (start -6.55 -0.65)
          (end -6.55 1.9)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "9a96b20d-75cf-4b4b-97da-7588b29a04e1")
        )
        (fp_line
          (start -5 -1.8)
          (end -5 -0.65)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "c21b53ca-4f58-4701-b6f7-4315f3068899")
        )
        (fp_line
          (start -5 -0.65)
          (end -6.55 -0.65)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "608b8910-f34a-43a8-b9a7-5551226e2df5")
        )
        (fp_line
          (start -5 1.9)
          (end -6.55 1.9)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "780ab466-0a8d-4080-b162-41a3362e9f46")
        )
        (fp_line
          (start -5 1.9)
          (end -5 4)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "93da9bf2-75d8-45c9-b18b-d89a2d5ec86b")
        )
        (fp_line
          (start -5 4)
          (end 5 4)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "d77cdb74-65ee-4ae1-9046-2dc8b6cdfe42")
        )
        (fp_line
          (start 5 -1.8)
          (end 5 -0.65)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "9dbbfdae-f69d-40b6-b3ce-843101dbb6f8")
        )
        (fp_line
          (start 5 -1.8)
          (end 6.55 -1.8)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "0eb71136-f5e6-42fc-a50a-f70b15dde365")
        )
        (fp_line
          (start 5 1.9)
          (end 5 4)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "2b7c1c90-04c0-45a8-b931-623bfc5acd6f")
        )
        (fp_line
          (start 6.55 -4.2)
          (end -6.55 -4.2)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "f051ad79-7de9-425b-b0cc-fbcae5a11e5e")
        )
        (fp_line
          (start 6.55 -4.2)
          (end 6.55 -1.8)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "183d5ad8-1488-409b-8303-ee1a40e9e5c7")
        )
        (fp_line
          (start 6.55 -0.65)
          (end 5 -0.65)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "2e22db10-7511-4d0d-8034-04c7758d6e46")
        )
        (fp_line
          (start 6.55 -0.65)
          (end 6.55 1.9)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "ee5eab91-4204-4922-9dcd-b8c785b576e2")
        )
        (fp_line
          (start 6.55 1.9)
          (end 5 1.9)
          (stroke
            (width 0.05)
            (type solid)
          )
          (layer "${p.side}.CrtYd")
          (uuid "0c9b737c-af7e-443e-9194-9dbd9f71a953")
        )
        (fp_rect
          (start -4.47 -3.4525)
          (end 4.47 3.4525)
          (stroke
            (width 0.1)
            (type solid)
          )
          (fill none)
          (layer "${p.side}.Fab")
          (uuid "13b2ac6c-3802-4a6f-8e25-46269cf0b878")
        )
        (fp_text user "PCB Edge"
          (at 0 2.9 0)
          (unlocked yes)
          (layer "Dwgs.User")
          (uuid "1d5398e5-b81b-4cba-af0c-1ca86c6cfeba")
          (effects
            (font
              (size 0.5 0.5)
              (thickness 0.1)
            )
          )
        )
        (fp_text user "\${REFERENCE}"
          (at 0 0 0)
          (unlocked yes)
          (layer "${p.side}.Fab")
          (uuid "cb0cca85-0a03-448f-903b-cab7ad41851d")
          (effects
            (font
              (size 1 1)
              (thickness 0.15)
            )
          )
        )
        (pad "A5" smd roundrect
          (at -0.5 -3.0325 ${r})
          (size 0.7 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "d77556a2-51bb-4620-b302-2bfe9c8f8ba5")
          ${p.A5.str}
        )
        (pad "A9" smd roundrect
          (at 1.52 -3.0325 ${r + 180})
          (size 0.76 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "223858ac-810e-42c8-92d9-91bb0ac64b23")
          ${p.A9.str}
        )
        (pad "A12" smd roundrect
          (at 2.75 -3.0325 ${r + 180})
          (size 0.8 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "71e802d7-f7fd-479c-84a2-c1a5724e787c")
          ${p.A12.str}
        )
        (pad "B5" smd roundrect
          (at 0.5 -3.0325 ${r + 180})
          (size 0.7 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "893744bf-b19b-4dce-bd88-171d9638ad09")
          ${p.B5.str}
        )
        (pad "B9" smd roundrect
          (at -1.52 -3.0325 ${r})
          (size 0.76 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "46f07ab2-6dc2-4543-bc80-c6ef5e6dad9f")
          ${p.B9.str}
        )
        (pad "B12" smd roundrect
          (at -2.75 -3.0325 ${r})
          (size 0.8 1.2)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.25)
          (uuid "e945e3ea-344e-4a2f-abc1-3420798780aa")
          ${p.B12.str}
        )
        (pad "S1" smd roundrect
          (at -5.125 -2.9775 ${r})
          (size 1.8 1.35)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.1851851852)
          (uuid "b48f6fb9-aae5-4e50-8ece-a789a1d69af0")
        )
        (pad "S1" smd roundrect
          (at -5.125 0.6025 ${r})
          (size 1.8 1.5)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.1666666667)
          (uuid "2f8d4afc-5012-4780-9731-53a4be929610")
        )
        (pad "S1" smd roundrect
          (at 5.125 -2.9775 ${r})
          (size 1.8 1.35)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.1851851852)
          (uuid "75046664-7cdc-49a9-9cd6-5a8dfd7415b7")
        )
        (pad "S1" smd roundrect
          (at 5.125 0.6025 ${r})
          (size 1.8 1.5)
          (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
          (roundrect_rratio 0.1666666667)
          (uuid "b1ca42b5-04cd-4c28-9faf-16c42c49ddac")
        )
        (model "\${KICAD8_3DMODEL_DIR}/Connector_USB.3dshapes/USB_C_Receptacle_GCT_USB4135-GF-A_6P_TopMnt_Horizontal.wrl"
          (offset
            (xyz 0 0 0)
          )
          (scale
            (xyz 1 1 1)
          )
          (rotate
            (xyz 0 0 ${p.side === "B" ? 180 : 0})
          )
        )
      )
    `;
  },
};
