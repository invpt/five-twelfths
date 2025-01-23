module.exports = {
  params: {
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },

    P9: { type: "net", value: "P9" },
    P10: { type: "net", value: "P10" },
    P11: { type: "net", value: "P11" },
    P12: { type: "net", value: "P12" },
    P13: { type: "net", value: "P13" },

    P14: { type: "net", value: "P14" },
    P15: { type: "net", value: "P15" },
    P26: { type: "net", value: "P26" },
    P27: { type: "net", value: "P27" },
    P28: { type: "net", value: "P28" },
    P29: { type: "net", value: "P29" },
    V3: { type: "net", value: "V3" },
    GND: { type: "net", value: "GND" },
    V5: { type: "net", value: "V5" },
  },
  body: (p) => {
    const pin_spacing = 2.54;
    const top_pin_offset = -4 * pin_spacing;
    const right_pin_offset = 3 * pin_spacing;
    const bottom_pin_offset = 4 * pin_spacing;
    const left_pin_offset = -3 * pin_spacing;

    const right = [p.P0, p.P1, p.P2, p.P3, p.P4, p.P5, p.P6, p.P7, p.P8].map(
      (net, i) => ({
        net,
        x: pin_spacing * 3 + 1.38,
        y: top_pin_offset + pin_spacing * i,
        vx: -3,
        vy: -1.59 + pin_spacing / 2,
        rot: 0,
        in: -1,
        out: 1,
      }),
    );

    const bottom = [p.P9, p.P10, p.P11, p.P12, p.P13].map((net, i) => ({
      net,
      x: right_pin_offset - (i + 1) * pin_spacing,
      y: bottom_pin_offset + 1.59,
      rot: 90,
    }));

    const left = [
      p.P14,
      p.P15,
      p.P26,
      p.P27,
      p.P28,
      p.P29,
      p.V3,
      p.GND,
      p.V5,
    ].map((net, i) => ({
      net,
      x: left_pin_offset - 1.38,
      y: bottom_pin_offset - i * pin_spacing,
      vx: 3,
      vy: -pin_spacing / 2 - 1.59 + pin_spacing / 2,
      rot: 0,
      in: 1,
      out: -1,
    }));

    const pins = [
      // right pins
      ...right,
      // bottom pins
      ...bottom,
      // left pins
      ...left,
    ];

    pins.forEach((pin, i) => {
      pin.index = i;
    });

    return `
      (footprint "rp2040-zero" (version 20250118)
        ${p.at}
        (layer "F.Cu")
        (attr smd exclude_from_pos_files)

        ${pins
          .map(
            (pin) => `
              ${"" /* front */}
              (pad
                "${pin.index}"
                smd
                roundrect
                (at
                  ${pin.x}
                  ${pin.y}
                  ${p.rot + pin.rot})
                (size 2 1.8)
                (roundrect_rratio 0.25)
                (layers F.Cu F.Mask)
                ${pin.net.str})
              ${"" /* back */}
              (pad
                "${pin.index}"
                smd
                roundrect
                (at
                  ${-pin.x}
                  ${pin.y}
                  ${p.rot + pin.rot})
                (size 2 1.8)
                (roundrect_rratio 0.25)
                (layers B.Cu B.Mask)
                ${pin.net.str})`,
          )
          .join("")}

        ${[...left, ...right]
          .map(
            (pin) => `
              ${"" /* via */}
              (pad
                "${pin.index}"
                thru_hole
                circle
                (at ${pin.x + pin.vx} ${pin.y + pin.vy})
                (size 0.6 0.6)
                (drill 0.3)
                (layers *.Cu)
                (remove_unused_layers no)
                ${pin.net.str})
              ${"" /* trace to via from front */}
              (pad
                "${pin.index}"
                smd
                custom
                (at ${pin.x} ${pin.y} ${p.rot})
                (size 0.25 0.25)
                (layers F.Cu)
                ${pin.net.str}
                (zone_connect 0)
                (thermal_bridge_angle 90)
                (options
                  (clearance outline)
                  (anchor circle))
                (primitives
                  (gr_line
                    (start 0 0)
                    (end ${pin.in * Math.abs(pin.vy)} ${pin.vy})
                    (width 0.2))
                  (gr_line
                    (start ${pin.in * Math.abs(pin.vy)} ${pin.vy})
                    (end ${pin.vx} ${pin.vy})
                    (width 0.2))))
              ${"" /* trace from via to back */}
              (pad
                "${pin.index}"
                smd
                custom
                (at ${pin.x + pin.vx} ${pin.y + pin.vy} ${p.rot})
                (size 0.25 0.25)
                (layers B.Cu)
                ${pin.net.str}
                (zone_connect 0)
                (thermal_bridge_angle 90)
                (options
                  (clearance outline)
                  (anchor circle))
                (primitives
                  (gr_line
                    (start 0 0)
                    (end ${-2 * pin.x - pin.vx - pin.in * Math.abs(pin.vy)} 0)
                    (width 0.2))
                  (gr_line
                    (start ${-2 * pin.x - pin.vx - pin.in * Math.abs(pin.vy)} 0)
                    (end ${-2 * pin.x - pin.vx} ${-pin.vy})
                    (width 0.2))))`,
          )
          .join("")}
      )`;
  },
};
