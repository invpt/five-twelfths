// Based on mikeholscher's footprint

module.exports = {
  params: {
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    return `
      (footprint "CPG1316S01D02_mikeholscher" (version 20240108) (generator "pcbnew") (generator_version "8.0")
        (layer "F.Cu")
        ${p.at}
        (property "Reference" "CPG1316" (at 0 0 ${p.r})(unlocked yes)
      (layer "Cmts.User")(hide yes)
      (uuid "ad62f3be-e718-4e89-881e-b73cd7290d03")
          (effects (font (size 1 1) (thickness 0.1)))
        )
        (property "Value" "CPG1316S01D02_mikeholscher" (at 0 9 0)(unlocked yes)
      (layer "Cmts.User")(hide yes)
      (uuid "015e2493-8031-4566-a0b9-0587851c9e48")
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (property "Footprint" "Custom:CPG1316S01D02_mikeholscher" (at 0 10.85 0)(unlocked yes)
      (layer "F.Fab")(hide yes)
      (uuid "b936d8b9-6dc7-4e96-9747-5ed58e40d4ae")
          (effects (font (size 1.27 1.27)))
        )
        (property "Datasheet" "" (at 0 0 0)(unlocked yes)
      (layer "F.Fab")(hide yes)
      (uuid "b89fa756-936d-44fa-aa20-6eec8ccede68")
          (effects (font (size 1.27 1.27)))
        )
        (property "Description" "" (at 0 0 0)(unlocked yes)
      (layer "F.Fab")(hide yes)
      (uuid "caa868a1-2067-49c5-9642-3aded1cc9142")
          (effects (font (size 1.27 1.27)))
        )
        (attr smd)
        (fp_poly
          (pts
            (xy 3.8 -3.5)
            (xy 3.8 -1.65)
            (xy 3.3 -1.15)
            (xy -2.2 -1.15)
            (xy -2.2 -3.9)
            (xy 2.2 -3.9)
            (xy 2.2 -3.5)
          )
          (stroke (width 0.1) (type solid)) (fill none) (layer "Dwgs.User")(uuid "108ced6d-a46c-4f12-aae0-06b4cba99e35"))
        (pad "" np_thru_hole circle
          (at -5.8 2.75 165)
          (size 1.0 1.0)
          (drill 1.0)
          (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole circle
          (at 5.8 -2.75 165)
          (size 1.2 1.2)
          (drill 1.2)
          (layers "*.Cu" "*.Mask"))
        (fp_rect (start -6.75 -6.5) (end 6.75 6.5)
          (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab")(uuid "e4d1daaa-fd44-4463-b94c-0aa1f91f701d"))
        (pad "1" thru_hole rect
          (at -2.5 2.65 ${p.r})
          (size 1.55 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
          ${p.from.str}
        )
        (pad "2" thru_hole rect
          (at 2.5 2.65 ${p.r})
          (size 1.55 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
          ${p.to.str}
        )
        (pad "3" thru_hole rect
          (at -6.35 -6 ${p.r})
          (size 2 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
        )
        (pad "3" thru_hole rect
          (at -6.35 6 ${p.r})
          (size 2 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
        )
        (pad "3" thru_hole rect
          (at 6.35 -6 ${p.r})
          (size 2 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
        )
        (pad "3" thru_hole rect
          (at 6.35 6 ${p.r})
          (size 2 2)
          (drill 1)
          (layers "*.Cu" "*.Mask")
          (thermal_bridge_angle 45)
        )
      )
    `;
  },
};
