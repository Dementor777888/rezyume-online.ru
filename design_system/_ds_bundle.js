/* @ds-bundle: {"format":4,"namespace":"DesignSystem_7c7421","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SkillBar","sourcePath":"components/data/SkillBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"784e96d45043","components/core/Button.jsx":"9f2d735ce117","components/core/Card.jsx":"07a068a204e2","components/data/SkillBar.jsx":"ec5c9c0d439e","components/forms/Checkbox.jsx":"f8b4bc5a2221","components/forms/Input.jsx":"0965652553ae","components/forms/Radio.jsx":"09bfd06654a3","components/forms/Select.jsx":"4515a814e6d3","components/forms/Switch.jsx":"127b76a97c90","components/navigation/Tabs.jsx":"6f811049824e","ui_kits/resume-templates/TemplateAcademic.jsx":"611d3ffdccb1","ui_kits/resume-templates/TemplateAccent.jsx":"ab97f5815f8a","ui_kits/resume-templates/TemplateClean.jsx":"840477dbce86","ui_kits/resume-templates/TemplateCompact.jsx":"501f97b15caa","ui_kits/resume-templates/TemplateOneColumn.jsx":"3b5f9a25cd41","ui_kits/resume-templates/TemplateStart.jsx":"5cff6c68dad7","ui_kits/resume-templates/TemplateStartPhoto.jsx":"98276bafa52e","ui_kits/resume-templates/resumeData.js":"59c89f2a648f","ui_kits/resume-templates/templateParts.jsx":"52c3bf64b73e","ui_kits/website/AdminPanel.jsx":"b40bff486428","ui_kits/website/Articles.jsx":"b80fffb58786","ui_kits/website/Auth.jsx":"0a68070e4763","ui_kits/website/Cabinet.jsx":"9bfba0d84cc4","ui_kits/website/Constructor.jsx":"bda04beba2f9","ui_kits/website/Error404.jsx":"c5ceef7a6a36","ui_kits/website/Examples.jsx":"dcfbd9e97ce0","ui_kits/website/Faq.jsx":"376854d18048","ui_kits/website/Landing.jsx":"13773fc03b86","ui_kits/website/Payment.jsx":"c12ee8a3ff34","ui_kits/website/PhotoUpload.jsx":"a6a0ccb5f4d2","ui_kits/website/PreviewExport.jsx":"413f17ba1af7","ui_kits/website/PublicResume.jsx":"4e2fecc0f44d","ui_kits/website/ResumeBase.jsx":"460cfcd0fc54","ui_kits/website/Support.jsx":"c1e57aaa87ed","ui_kits/website/Templates.jsx":"089996831a34","ui_kits/website/chrome.jsx":"811ac6e11163","ui_kits/website/image-slot.js":"4cffaf8e50f6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_7c7421 = window.DesignSystem_7c7421 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  brand: {
    background: 'var(--brand-green-tint)',
    color: '#4C7A2A'
  },
  action: {
    background: '#FDF0DA',
    color: '#8A5A0E'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--ink-secondary)'
  },
  paid: {
    background: '#EAF0FE',
    color: 'var(--paid-blue)'
  }
};

/** Badge — small status/label pill (e.g. "Бесплатно", "PRO", "Новое"). */
function Badge({
  tone = 'brand',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.02em',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '8px 14px'
  },
  md: {
    fontSize: 'var(--text-base)',
    padding: '11px 20px'
  },
  lg: {
    fontSize: 'var(--text-md)',
    padding: '14px 28px'
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: '#EDEFE9',
      color: '#A7AEA0',
      borderColor: '#EDEFE9'
    };
  }
  switch (variant) {
    case 'primary':
      // action = yellow
      return {
        background: 'var(--brand-yellow)',
        color: 'var(--action-text)',
        boxShadow: 'var(--shadow-sm)'
      };
    case 'secondary':
      // brand/nav = green
      return {
        background: 'var(--brand-green)',
        color: '#FFFFFF'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--brand-green)',
        borderColor: 'var(--brand-green)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--ink)',
        borderColor: 'transparent'
      };
    default:
      return {};
  }
}

/** Button — primary (yellow) is the only "do this now" action; secondary (green) is brand/nav-level. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const vs = variantStyle(variant, disabled);
  let hoverBg;
  if (!disabled) {
    if (variant === 'primary') hoverBg = 'var(--brand-yellow-dark)';else if (variant === 'secondary') hoverBg = 'var(--brand-green-light)';else if (variant === 'outline') hoverBg = 'var(--brand-green-tint)';else if (variant === 'ghost') hoverBg = 'var(--surface-sunken)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...vs,
      ...(hover && !disabled ? {
        background: hoverBg
      } : {}),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Card — soft-shadow surface container, the base for template cards, review cards, feature blocks. */
function Card({
  padding = 'var(--space-4)',
  elevated = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/SkillBar.jsx
try { (() => {
/** SkillBar — dosed skill-level meter used in resume sidebars (навыки, языки). Intentional addition (see readme). */
function SkillBar({
  label,
  level = 3,
  max = 5,
  color = 'var(--brand-green)',
  labelColor = 'var(--ink)',
  trackColor = 'var(--line)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: i < level ? color : trackColor
    }
  }))));
}
Object.assign(__ds_scope, { SkillBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SkillBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox — brand-green check, used for multi-select toggles (e.g. "есть дети"). */
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: checked ? 'none' : '1.5px solid var(--line)',
      background: checked ? 'var(--brand-green)' : 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)',
  color: 'var(--ink)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
  width: '100%',
  boxSizing: 'border-box',
  background: 'var(--bg)'
};

/** Input — labeled text field used across the resume constructor form. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  helper
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...fieldBase,
      borderColor: focused ? 'var(--brand-green)' : 'var(--line)',
      boxShadow: focused ? '0 0 0 3px var(--brand-green-tint)' : 'none'
    }
  }), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-secondary)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio — single-select circular control, grouped by `name` (e.g. пол, семейное положение). */
function Radio({
  label,
  name,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: checked ? '6px solid var(--brand-green)' : '1.5px solid var(--line)',
      background: 'var(--bg)',
      flexShrink: 0,
      boxSizing: 'border-box'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select — native-backed dropdown styled to match Input (employment type, schedule, education level, etc). */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--ink)' : 'var(--ink-secondary)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      background: 'var(--bg)',
      outline: 'none'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — on/off toggle (e.g. "работаю по настоящее время"). */
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-green)' : '#DADFD3',
      position: 'relative',
      transition: 'background var(--duration-standard) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-standard) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline tab navigation (site header nav style: Услуги / Как это работает / ...). */
function Tabs({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      borderBottom: '1px solid var(--line)'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onChange && onChange(item),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: isActive ? 'var(--brand-green)' : 'var(--ink)',
        padding: '12px 0',
        marginBottom: -1,
        borderBottom: isActive ? '2px solid var(--brand-green)' : '2px solid transparent'
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateAcademic.jsx
try { (() => {
// 4. «Академический» — PT Serif, monochrome, centered header, formal printed-CV feel. No accent color, no photo.
function TemplateAcademic() {
  const d = window.resumeData;
  const ink = 'var(--ink)';
  const Rule = () => /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--ink)',
      margin: '2px 0 8px'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      fontFamily: 'var(--font-serif-academic)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      padding: '40px 48px',
      color: ink,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingBottom: 14,
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '0.01em'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontStyle: 'italic',
      marginTop: 3
    }
  }, d.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      marginTop: 9,
      color: 'var(--ink-secondary)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, d.contacts.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.label
  }, c.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.65,
      textAlign: 'justify'
    }
  }, d.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.02em'
    }
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.company
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, e.title, ", ", e.company), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontStyle: 'italic',
      whiteSpace: 'nowrap'
    }
  }, e.period)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '4px 0 0',
      paddingLeft: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, e.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: 13,
      lineHeight: 1.55
    }
  }, p))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.02em'
    }
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Rule, null), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", null, e.school, ", ", e.degree), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontSize: 12
    }
  }, e.period)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.02em'
    }
  }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontSize: 12
    }
  }, c.period))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.02em'
    }
  }, "\u041D\u0430\u0432\u044B\u043A\u0438 \u0438 \u044F\u0437\u044B\u043A\u0438"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.6
    }
  }, d.skills.map(s => s.label).join(', '), ". \u042F\u0437\u044B\u043A\u0438: ", d.languages.map(s => s.label).join(', '), ".")));
}
window.TemplateAcademic = TemplateAcademic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateAcademic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateAccent.jsx
try { (() => {
// 5. «Акцент» — premium template with a solid accent sidebar. White text on contrast-verified deep accents only.
function TemplateAccent({
  accent = 'blue'
}) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '36%',
      background: a.solid,
      color: '#fff',
      padding: '30px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(window.TP_Avatar, {
    size: 84,
    bg: "rgba(255,255,255,0.16)",
    fg: "#fff"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginTop: 6,
      color: 'rgba(255,255,255,0.95)'
    }
  }, d.role)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "#fff"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, d.contacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 10.5
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: '#fff'
    }
  }, c.value))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "#fff"
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.skills.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: "#fff",
    labelColor: "#fff",
    trackColor: "rgba(255,255,255,0.3)"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "#fff"
  }, "\u042F\u0437\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.languages.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: "#fff",
    labelColor: "#fff",
    trackColor: "rgba(255,255,255,0.3)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64%',
      padding: '30px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55,
      borderLeft: `2px solid ${a.fill}`,
      paddingLeft: 12
    }
  }, d.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement(window.TP_ExpRow, {
    key: e.company,
    e: e,
    accentText: a.text
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, e.school), " \u2014 ", e.degree), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, e.period)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, c.period)))))));
}
window.TemplateAccent = TemplateAccent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateAccent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateClean.jsx
try { (() => {
// 1. «Чистый» — main premium template. Full-width header, light sidebar, restrained accent.
// accent: 'blue' | 'teal' | 'graphite' (see window.PAID_ACCENTS)
function TemplateClean({
  accent = 'blue'
}) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 27,
      fontWeight: 700,
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: a.text,
      fontWeight: 700,
      marginTop: 5,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, d.role)), /*#__PURE__*/React.createElement(window.TP_Avatar, {
    size: 72,
    bg: "var(--bg-tint)",
    fg: a.text
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '33%',
      background: 'var(--bg-tint)',
      padding: '22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement(window.TP_ContactList, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, d.skills.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: a.fill
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u042F\u0437\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, d.languages.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: a.fill
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E \u0441\u0435\u0431\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, Object.entries(d.personal).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 10.5
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '67%',
      padding: '22px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55,
      borderLeft: `2px solid ${a.fill}`,
      paddingLeft: 12
    }
  }, d.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement(window.TP_ExpRow, {
    key: e.company,
    e: e,
    accentText: a.text
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, e.school), " \u2014 ", e.degree), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, e.period)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--ink)",
    accentBar: true,
    accentColor: a.fill
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, c.period))))))));
}
window.TemplateClean = TemplateClean;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateClean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateCompact.jsx
try { (() => {
// 2. «Компакт» — dense premium template for long work histories. Header strip + two columns.
function TemplateCompact({
  accent = 'teal'
}) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      borderBottom: `2px solid ${a.fill}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 8,
      background: 'var(--bg-tint)',
      color: a.text,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 19,
      flexShrink: 0
    }
  }, d.photoInitials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: a.text,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      marginTop: 2
    }
  }, d.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontSize: 11,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, d.contacts.slice(0, 3).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label
  }, c.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '66%',
      padding: '18px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      borderRight: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement(window.TP_ExpRow, {
    key: e.company,
    e: e,
    accentText: a.text
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("b", null, e.school), ", ", e.degree, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, "(", e.period, ")")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      fontSize: 11.5,
      color: 'var(--ink)'
    }
  }, c.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, "(", c.period, ")")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '34%',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E \u0441\u0435\u0431\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, d.summary)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.skills.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: a.fill
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u042F\u0437\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.languages.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: a.fill
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041B\u0438\u0447\u043D\u043E\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, Object.entries(d.personal).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      fontSize: 11.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, k, ":"), " ", v)))))));
}
window.TemplateCompact = TemplateCompact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateCompact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateOneColumn.jsx
try { (() => {
// 3. «Одна колонка» — ATS-friendly premium template. Single column, no sidebar, machine-readable.
function TemplateOneColumn({
  accent = 'graphite'
}) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      padding: '36px 44px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16,
      borderBottom: `2px solid ${a.fill}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 27,
      fontWeight: 700,
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: a.text,
      fontWeight: 700,
      marginTop: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.07em'
    }
  }, d.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 10,
      fontSize: 12,
      color: 'var(--ink-secondary)'
    }
  }, d.contacts.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.label
  }, c.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55
    }
  }, d.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement(window.TP_ExpRow, {
    key: e.company,
    e: e,
    accentText: a.text
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, e.school), ", ", e.degree), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, e.period)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11
    }
  }, c.period))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: a.text
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, d.skills.map(s => s.label).join(' · ')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 4
    }
  }, "\u042F\u0437\u044B\u043A\u0438: ", d.languages.map(s => s.label).join(', '))));
}
window.TemplateOneColumn = TemplateOneColumn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateOneColumn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateStart.jsx
try { (() => {
// 0a. «Старт» — free template, no photo. Light blue sidebar (--brand-blue-tint) + yellow accents.
function TemplateStart({
  highlight
} = {}) {
  const d = window.resumeData;
  const SkillBar = window.DS.SkillBar;
  const sec = key => {
    if (!highlight) return {};
    const on = highlight === key;
    return {
      opacity: on ? 1 : 0.32,
      outline: on ? '2px solid var(--brand-green)' : '2px solid transparent',
      outlineOffset: 5,
      borderRadius: 6,
      transition: 'opacity .3s ease, outline-color .3s ease'
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '36%',
      background: 'var(--brand-blue-tint)',
      color: 'var(--ink)',
      padding: '32px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sec('contacts')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 26,
      fontWeight: 600,
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginTop: 10,
      background: 'var(--brand-yellow)',
      color: '#2B2B2B',
      fontSize: 12,
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: 999
    }
  }, d.role)), /*#__PURE__*/React.createElement("div", {
    style: sec('contacts')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--brand-blue-deep)"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.contacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 10.5
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, c.value))))), /*#__PURE__*/React.createElement("div", {
    style: sec('skills')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--brand-blue-deep)"
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, d.skills.slice(0, 3).map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: "var(--brand-blue-deep)",
    labelColor: "var(--ink)",
    trackColor: "rgba(45,102,133,0.18)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: sec('skills')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--brand-blue-deep)"
  }, "\u042F\u0437\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, d.languages.map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: "var(--brand-blue-deep)",
    labelColor: "var(--ink)",
    trackColor: "rgba(45,102,133,0.18)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64%',
      padding: '32px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sec('experience')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.company
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)'
    }
  }, e.period), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginBottom: 4
    }
  }, e.company), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, e.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: 12.5,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, p))))))), /*#__PURE__*/React.createElement("div", {
    style: sec('education')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11.5
    }
  }, e.period), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, e.school), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, e.degree)))), /*#__PURE__*/React.createElement("div", {
    style: sec('education')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("b", null, c.period), " \u2014 ", c.name))))));
}
window.TemplateStart = TemplateStart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateStart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/TemplateStartPhoto.jsx
try { (() => {
// 0b. «Старт+фото» — same free character as «Старт», light blue sidebar, with a photo slot (user drops in their own, unedited).
function TemplateStartPhoto({
  photoSlot,
  photo,
  photoShape = 'circle',
  highlight
}) {
  const d = window.resumeData;
  const SkillBar = window.DS.SkillBar;
  const sec = key => {
    if (!highlight) return {};
    const on = highlight === key;
    return {
      opacity: on ? 1 : 0.32,
      outline: on ? '2px solid var(--brand-green)' : '2px solid transparent',
      outlineOffset: 5,
      borderRadius: 6,
      transition: 'opacity .3s ease, outline-color .3s ease'
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      minHeight: 876,
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '36%',
      background: 'var(--brand-blue-tint)',
      color: 'var(--ink)',
      padding: '32px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      ...sec('photo')
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: 120,
      height: 120,
      borderRadius: photoShape === 'square' ? 14 : '50%',
      objectFit: 'cover',
      display: 'block',
      alignSelf: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }) : photoSlot ? /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-portrait",
    shape: "circle",
    fit: "cover",
    placeholder: "\u0424\u043E\u0442\u043E",
    style: {
      width: 96,
      height: 96,
      display: 'block',
      alignSelf: 'center'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      border: '2px dashed var(--brand-blue-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      textAlign: 'center',
      color: 'var(--brand-blue-deep)'
    }
  }, "\u0412\u0430\u0448\u0435 \u0444\u043E\u0442\u043E")), /*#__PURE__*/React.createElement("div", {
    style: sec('contacts')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginTop: 10,
      background: 'var(--brand-yellow)',
      color: '#2B2B2B',
      fontSize: 12,
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: 999
    }
  }, d.role)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--brand-blue-deep)"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.contacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 10.5
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, c.value))))), /*#__PURE__*/React.createElement("div", {
    style: sec('skills')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    color: "var(--brand-blue-deep)"
  }, "\u041D\u0430\u0432\u044B\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, d.skills.slice(0, 3).map(s => /*#__PURE__*/React.createElement(SkillBar, {
    key: s.label,
    label: s.label,
    level: s.level,
    color: "var(--brand-blue-deep)",
    labelColor: "var(--ink)",
    trackColor: "rgba(45,102,133,0.18)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64%',
      padding: '32px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sec('experience')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, d.experience.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.company
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)'
    }
  }, e.period), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginBottom: 4
    }
  }, e.company), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, e.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: 12.5,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, p))))))), /*#__PURE__*/React.createElement("div", {
    style: sec('education')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"), d.education.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.school,
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)',
      fontSize: 11.5
    }
  }, e.period), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, e.school), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, e.degree)))), /*#__PURE__*/React.createElement("div", {
    style: sec('education')
  }, /*#__PURE__*/React.createElement(window.TP_SectionTitle, {
    accentBar: true,
    accentColor: "var(--brand-yellow)"
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, d.courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("b", null, c.period), " \u2014 ", c.name))))));
}
window.TemplateStartPhoto = TemplateStartPhoto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/TemplateStartPhoto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/resumeData.js
try { (() => {
// Резюме Онлайн — shared fake candidate data for all 7 resume templates.
// Fictional person, used purely to demonstrate real Russian-language layout.
window.resumeData = {
  name: 'Смирнова Екатерина Игоревна',
  role: 'Менеджер по маркетингу',
  photoInitials: 'ЕС',
  contacts: [{
    label: 'Телефон',
    value: '+7 (900) 000-00-00'
  }, {
    label: 'Email',
    value: 'e.smirnova@mail.ru'
  }, {
    label: 'Город',
    value: 'Москва'
  }, {
    label: 'Дата рождения',
    value: '14.03.1994'
  }],
  summary: 'Маркетолог с опытом более 6 лет: performance-реклама, контент-стратегия, аналитика. Запускала кампании с бюджетом до 3 млн ₽/мес, выросла ROMI на 38%.',
  experience: [{
    period: 'Июнь 2021 — настоящее время',
    company: 'ООО «Технопарк Медиа»',
    title: 'Ведущий маркетолог',
    points: ['Разработала и внедрила контент-стратегию, рост органического трафика на 64%', 'Управляла командой из 4 специалистов и бюджетом 2.8 млн ₽/мес', 'Запустила performance-кампании в Яндекс Директ и ВК Реклама, снизила CPL на 27%']
  }, {
    period: 'Март 2019 — Май 2021',
    company: 'ИП Ковалёв Д. С. — сеть кофеен «Бодрость»',
    title: 'Маркетолог',
    points: ['Вела соцсети (ВК, Telegram), выросла аудитория с 2 000 до 18 000 подписчиков', 'Организовала 12 локальных промо-акций, средний рост среднего чека — 15%']
  }],
  education: [{
    period: '2012 — 2017',
    school: 'РЭУ им. Г. В. Плеханова',
    degree: 'Маркетинг, специалист'
  }],
  courses: [{
    period: '2022',
    name: 'Яндекс Практикум — «Профессия Маркетолог»'
  }, {
    period: '2020',
    name: 'Skillbox — «Таргетированная реклама»'
  }],
  skills: [{
    label: 'Яндекс Директ / VK Реклама',
    level: 5
  }, {
    label: 'Аналитика (Яндекс Метрика, GA4)',
    level: 4
  }, {
    label: 'Контент-стратегия',
    level: 5
  }, {
    label: 'Excel / Google Sheets',
    level: 4
  }],
  languages: [{
    label: 'Русский',
    level: 5
  }, {
    label: 'Английский — Intermediate',
    level: 3
  }],
  personal: {
    'Семейное положение': 'Не замужем',
    'Занятость': 'Полная',
    'График работы': 'Гибкий график'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/resumeData.js", error: String((e && e.message) || e) }); }

// ui_kits/resume-templates/templateParts.jsx
try { (() => {
// Резюме Онлайн — small shared layout helpers reused across the 7 resume templates.
// Assumes window.resumeData is loaded, and window.DS = design-system bundle namespace.

function TP_SectionTitle({
  children,
  color = 'var(--ink)',
  accentBar = false,
  accentColor = 'var(--brand-green)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color,
      marginBottom: 10
    }
  }, accentBar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 2,
      background: accentColor,
      display: 'inline-block'
    }
  }), children);
}
function TP_Avatar({
  size = 96,
  bg = 'var(--brand-green-tint)',
  fg = '#4C7A2A'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.32,
      fontWeight: 700,
      fontFamily: 'var(--font-sans)',
      flexShrink: 0
    }
  }, window.resumeData.photoInitials);
}
function TP_ContactList({
  color = 'var(--ink)',
  dim = 'var(--ink-secondary)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, window.resumeData.contacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      fontSize: 13.5,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: dim,
      fontSize: 11
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      fontWeight: 500
    }
  }, c.value))));
}
window.TP_SectionTitle = TP_SectionTitle;
window.TP_Avatar = TP_Avatar;
window.TP_ContactList = TP_ContactList;

// Contrast-verified accent sets for the 5 premium templates.
// text/solid values hold >=4.5:1 against white; fill is decorative (bars, rules).
window.PAID_ACCENTS = {
  blue: {
    key: 'blue',
    label: 'Синий',
    text: 'var(--paid-blue)',
    fill: 'var(--paid-blue)',
    solid: 'var(--paid-blue)'
  },
  teal: {
    key: 'teal',
    label: 'Бирюзовый',
    text: 'var(--paid-teal-deep)',
    fill: 'var(--paid-teal)',
    solid: 'var(--paid-teal-deep)'
  },
  graphite: {
    key: 'graphite',
    label: 'Графит',
    text: 'var(--paid-graphite)',
    fill: 'var(--paid-graphite)',
    solid: 'var(--paid-graphite)'
  }
};

// Right-aligned period + bold title row used by premium templates.
function TP_ExpRow({
  e,
  accentText
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-secondary)',
      whiteSpace: 'nowrap'
    }
  }, e.period)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: accentText || 'var(--ink-secondary)',
      fontWeight: 600,
      margin: '1px 0 5px'
    }
  }, e.company), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, e.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: 12,
      color: 'var(--ink)',
      lineHeight: 1.45
    }
  }, p))));
}
window.TP_ExpRow = TP_ExpRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume-templates/templateParts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AdminPanel.jsx
try { (() => {
// Screen — Кабинет администратора. Слева навигация по разделам, справа рабочая область.
// Разделы: Промокоды (генерация + таблица), управление контентом страниц
// (Образцы, Шаблоны, База резюме, Статьи, FAQ) с поиском, CRUD, импортом/экспортом,
// и Служебные страницы (редактор статичного контента).
function AdminPanel({
  device = 'desktop',
  state = 'promo',
  go
}) {
  const DS = window.DS;
  const isM = device === 'mobile';
  const NAV = [{
    id: 'promo',
    label: 'Промокоды',
    icon: 'ticket'
  }, {
    id: 'examples',
    label: 'Образцы',
    icon: 'grid',
    kind: 'data'
  }, {
    id: 'templates',
    label: 'Шаблоны',
    icon: 'layout',
    kind: 'data'
  }, {
    id: 'base',
    label: 'База резюме',
    icon: 'users',
    kind: 'data'
  }, {
    id: 'articles',
    label: 'Статьи',
    icon: 'doc',
    kind: 'data'
  }, {
    id: 'faq',
    label: 'FAQ',
    icon: 'help',
    kind: 'data'
  }, {
    id: 'pages',
    label: 'Служебные страницы',
    icon: 'file',
    kind: 'pages'
  }];
  const [section, setSection] = React.useState(state === 'content' ? 'examples' : 'promo');
  React.useEffect(() => {
    setSection(state === 'content' ? 'examples' : 'promo');
  }, [state]);
  const cur = NAV.find(n => n.id === section) || NAV[0];

  // ——— icons ———
  const NIcon = ({
    name,
    color
  }) => {
    const p = {
      width: 18,
      height: 18,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    switch (name) {
      case 'ticket':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
          d: "M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M13 6v12",
          strokeDasharray: "2 2"
        }));
      case 'grid':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
          x: "3",
          y: "3",
          width: "7",
          height: "7",
          rx: "1"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "14",
          y: "3",
          width: "7",
          height: "7",
          rx: "1"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "3",
          y: "14",
          width: "7",
          height: "7",
          rx: "1"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "14",
          y: "14",
          width: "7",
          height: "7",
          rx: "1"
        }));
      case 'layout':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M3 9h18M9 21V9"
        }));
      case 'users':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
          cx: "9",
          cy: "8",
          r: "3.5"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M2.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M17 8.2a3.3 3.3 0 010 6.3M21.5 20c0-2.5-1.3-4.2-3.5-5"
        }));
      case 'doc':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
          d: "M6 2h8l4 4v16H6z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M14 2v4h4M9 13h6M9 17h6"
        }));
      case 'help':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M9.5 9a2.5 2.5 0 013.9-2c1 .6 1.3 1.9.6 2.9-.4.6-1 .9-1.5 1.3-.5.4-.5.9-.5 1.3"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "16.5",
          r: "0.6",
          fill: color,
          stroke: "none"
        }));
      case 'file':
        return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
          x: "4",
          y: "3",
          width: "16",
          height: "18",
          rx: "2"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M8 8h8M8 12h8M8 16h5"
        }));
      default:
        return null;
    }
  };
  const ActIcon = ({
    name
  }) => {
    const p = {
      width: 15,
      height: 15,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    if (name === 'edit') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M4 20h4L18.5 9.5a2.1 2.1 0 00-3-3L5 17v3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.5 6.5l3 3"
    }));
    if (name === 'del') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13"
    }));
    if (name === 'up') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M12 15V4M7 9l5-5 5 5M5 20h14"
    }));
    if (name === 'down') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v11M7 10l5 5 5-5M5 20h14"
    }));
    if (name === 'search') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 20l-3.5-3.5"
    }));
    if (name === 'plus') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }));
    return null;
  };

  // ——— shared sub-components ———
  const [toast, setToast] = React.useState('');
  const fire = msg => {
    setToast(msg);
  };
  const Toast = () => toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--brand-green-tint)',
      border: '1px solid #C6DF9E',
      borderRadius: 10,
      padding: '12px 16px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDC4D"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14.5,
      color: '#3F6B22'
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u0423\u0441\u043F\u0435\u0448\u043D\u043E!"), " ", toast), /*#__PURE__*/React.createElement("button", {
    onClick: () => setToast(''),
    style: {
      background: 'none',
      border: 'none',
      color: '#3F6B22',
      fontSize: 18,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\u2715")) : null;
  const Th = ({
    children,
    w
  }) => /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: isM ? '10px 8px' : '11px 14px',
      fontSize: isM ? 11 : 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      color: 'var(--ink-secondary)',
      borderBottom: '1px solid var(--line)',
      width: w
    }
  }, children);
  const Td = ({
    children,
    muted
  }) => /*#__PURE__*/React.createElement("td", {
    style: {
      padding: isM ? '11px 8px' : '12px 14px',
      fontSize: isM ? 13 : 14,
      color: muted ? 'var(--ink-secondary)' : 'var(--ink)',
      borderBottom: '1px solid var(--line)',
      verticalAlign: 'middle'
    }
  }, children);
  const RowActions = ({
    onEdit,
    onDel
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    style: {
      width: 30,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      border: '1px solid var(--line)',
      background: '#fff',
      color: 'var(--ink-secondary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ActIcon, {
    name: "edit"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onDel,
    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    style: {
      width: 30,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      border: '1px solid #F0C8B8',
      background: '#fff',
      color: '#B4451E',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ActIcon, {
    name: "del"
  })));

  // ===================== ПРОМОКОДЫ =====================
  const [codes, setCodes] = React.useState([{
    code: 'Free1',
    left: 1,
    until: '2026-12-31'
  }, {
    code: 'START50',
    left: 120,
    until: '2026-09-30'
  }, {
    code: 'SUMMER',
    left: 0,
    until: '2026-06-30'
  }]);
  const [pForm, setPForm] = React.useState({
    uses: '',
    until: '',
    code: ''
  });
  const genCode = () => Math.random().toString(36).slice(2, 8).toUpperCase();
  const addCode = () => {
    const c = {
      code: pForm.code || genCode(),
      left: parseInt(pForm.uses || '1', 10),
      until: pForm.until || '2026-12-31'
    };
    setCodes([c, ...codes]);
    setPForm({
      uses: '',
      until: '',
      code: ''
    });
    fire('Промокод добавлен!');
  };
  const promoSection = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toast, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: isM ? 16 : 22,
      boxShadow: 'var(--shadow-sm)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 14
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 1fr 1fr auto',
      gap: 12,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u041A\u043E\u043B-\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: pForm.uses,
    onChange: e => setPForm({
      ...pForm,
      uses: e.target.value
    }),
    placeholder: "\u043D\u0430\u043F\u0440. 100",
    style: inp
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("input", {
    value: pForm.until,
    onChange: e => setPForm({
      ...pForm,
      until: e.target.value
    }),
    placeholder: "\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413",
    style: inp
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u041A\u043E\u0434 (\u043F\u0443\u0441\u0442\u043E \u2014 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F)"), /*#__PURE__*/React.createElement("input", {
    value: pForm.code,
    onChange: e => setPForm({
      ...pForm,
      code: e.target.value
    }),
    placeholder: "\u041A\u043E\u0434",
    style: inp
  })), /*#__PURE__*/React.createElement("button", {
    onClick: addCode,
    style: {
      ...primaryBtn,
      background: 'var(--brand-blue-deep, #2C7BB6)'
    }
  }, "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)'
    }
  }, codes.length, " \u0448\u0442.")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: isM ? 0 : 440
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, isM ? 'Код' : 'Code'), /*#__PURE__*/React.createElement(Th, null, isM ? 'Осталось' : 'Осталось использований'), /*#__PURE__*/React.createElement(Th, null, isM ? 'До' : 'Годен до'), /*#__PURE__*/React.createElement(Th, {
    w: isM ? '68px' : '90px'
  }, " "))), /*#__PURE__*/React.createElement("tbody", null, codes.map((c, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono, monospace)',
      fontWeight: 700
    }
  }, c.code)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.left === 0 ? '#B4451E' : 'var(--ink)',
      fontWeight: 600
    }
  }, c.left), c.left === 0 && !isM && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#B4451E',
      marginLeft: 8
    }
  }, "\u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D")), /*#__PURE__*/React.createElement(Td, {
    muted: true
  }, isM ? c.until : c.until + ' 00:00:00'), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(RowActions, {
    onEdit: () => fire('Открыто редактирование ' + c.code),
    onDel: () => {
      setCodes(codes.filter((_, j) => j !== i));
      fire('Промокод удалён');
    }
  })))))))));

  // ===================== ГЕНЕРИЧЕСКИЙ РАЗДЕЛ КОНТЕНТА =====================
  const DATASETS = {
    examples: {
      title: 'Образцы резюме',
      unit: 'образец',
      cols: ['Профессия', 'Раздел', 'Подраздел', 'Шаблон'],
      rows: [['Менеджер по продажам', 'Продажи и клиенты', 'Менеджеры', '«Чистый»'], ['Frontend-разработчик', 'IT и разработка', 'Разработка', '«Компакт»'], ['Повар', 'Общественное питание', 'Кухня', '«Одна колонка»'], ['Интернет-маркетолог', 'Маркетинг и реклама', 'Digital', '«Акцент»'], ['Офис-менеджер', 'Административный персонал', 'Офис', '«Академический»']]
    },
    templates: {
      title: 'Шаблоны резюме',
      unit: 'шаблон',
      cols: ['Название', 'Тип', 'Цвета акцента', 'Статус'],
      rows: [['«Старт»', 'Бесплатный', '—', 'Опубликован'], ['«Старт+фото»', 'Бесплатный', '—', 'Опубликован'], ['«Чистый»', 'AI · 99 ₽', 'Синий, Бирюза, Графит', 'Опубликован'], ['«Компакт»', 'AI · 99 ₽', 'Бирюза, Синий, Графит', 'Опубликован'], ['«Академический»', 'AI · 99 ₽', '—', 'Черновик']]
    },
    base: {
      title: 'База резюме',
      unit: 'резюме',
      cols: ['Профессия', 'Раздел', 'Город', 'Опубликовано'],
      rows: [['Менеджер по продажам', 'Продажи и клиенты', 'Москва', 'да'], ['Frontend-разработчик', 'IT и разработка', 'Санкт-Петербург', 'да'], ['Аналитик данных', 'IT и разработка', 'Казань', 'да'], ['SMM-специалист', 'Маркетинг и реклама', 'Новосибирск', 'на модерации'], ['Водитель категории C', 'Транспорт и логистика', 'Екатеринбург', 'скрыто']]
    },
    articles: {
      title: 'Статьи',
      unit: 'статья',
      cols: ['Заголовок', 'Категория', 'Дата', 'Статус'],
      rows: [['Как описать опыт работы', 'Составление резюме', '02.07.2026', 'Опубликована'], ['15 сайтов для поиска работы', 'Поиск работы', '28.06.2026', 'Опубликована'], ['Вопросы на собеседовании', 'Собеседование', '24.06.2026', 'Опубликована'], ['Сопроводительное письмо', 'Составление резюме', '19.06.2026', 'Черновик'], ['Как просить о повышении', 'Карьера', '12.06.2026', 'Опубликована']]
    },
    faq: {
      title: 'FAQ',
      unit: 'вопрос',
      cols: ['Вопрос', 'Категория', 'Порядок'],
      rows: [['Резюме можно сделать бесплатно?', 'О сервисе', '1'], ['Нужно ли регистрироваться?', 'О сервисе', '2'], ['За что платить 99 ₽?', 'Оплата и AI-версия', '3'], ['В каком формате скачивается?', 'Форматы', '4'], ['Что такое База резюме?', 'Публикация', '5']]
    }
  };
  const [store, setStore] = React.useState(() => {
    const o = {};
    Object.keys(DATASETS).forEach(k => o[k] = DATASETS[k].rows.map((r, i) => ({
      id: i,
      cells: r
    })));
    return o;
  });

  // SEO мета-данные страниц разделов
  const SEO_DEFAULTS = {
    examples: {
      title: 'Образцы резюме — 500+ профессий | Резюме Онлайн',
      desc: 'Готовые образцы резюме по 500+ профессиям. Выберите свою и создайте резюме бесплатно за 10 минут.'
    },
    templates: {
      title: 'Шаблоны резюме | Резюме Онлайн',
      desc: 'Современные шаблоны резюме: бесплатные и премиальные. Выберите оформление и цвет акцента.'
    },
    base: {
      title: 'База резюме — кандидаты | Резюме Онлайн',
      desc: 'Открытая база резюме кандидатов. Найдите сотрудника или подпишитесь на новые резюме по разделам.'
    },
    articles: {
      title: 'Статьи и советы | Резюме Онлайн',
      desc: 'Как составить резюме, пройти собеседование и найти работу — коротко и по делу.'
    },
    faq: {
      title: 'Частые вопросы (FAQ) | Резюме Онлайн',
      desc: 'Ответы на частые вопросы о сервисе, оплате, форматах и приватности.'
    }
  };
  const [seo, setSeo] = React.useState(() => ({
    ...JSON.parse(JSON.stringify(SEO_DEFAULTS))
  }));
  const setSeoField = (id, k, v) => setSeo(s => ({
    ...s,
    [id]: {
      ...s[id],
      [k]: v
    }
  }));
  const SeoEditor = ({
    id
  }) => {
    const v = seo[id] || {
      title: '',
      desc: ''
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        boxShadow: 'var(--shadow-sm)',
        padding: isM ? 16 : 20,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 700,
        color: 'var(--brand-green)',
        background: 'var(--brand-green-tint)',
        padding: '3px 9px',
        borderRadius: 6,
        letterSpacing: '0.03em'
      }
    }, "SEO"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u041C\u0435\u0442\u0430-\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0440\u0430\u0437\u0434\u0435\u043B\u0430")), /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "<title> \u2014 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043A\u043B\u0430\u0434\u043A\u0438"), /*#__PURE__*/React.createElement("input", {
      value: v.title,
      onChange: e => setSeoField(id, 'title', e.target.value),
      maxLength: 70,
      style: {
        ...inp,
        marginBottom: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: v.title.length > 60 ? '#8A5A0E' : 'var(--ink-secondary)',
        marginBottom: 12
      }
    }, v.title.length, "/70 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \xB7 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u043E 60"), /*#__PURE__*/React.createElement("label", {
      style: lbl
    }, "meta description"), /*#__PURE__*/React.createElement("textarea", {
      value: v.desc,
      onChange: e => setSeoField(id, 'desc', e.target.value),
      maxLength: 180,
      style: {
        ...inp,
        minHeight: 68,
        resize: 'vertical',
        marginBottom: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: v.desc.length > 160 ? '#8A5A0E' : 'var(--ink-secondary)'
      }
    }, v.desc.length, "/180 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \xB7 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E 150\u2013160"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => fire('SEO-метаданные раздела сохранены'),
      style: primaryBtn
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C SEO")));
  };
  const [q, setQ] = React.useState('');
  React.useEffect(() => {
    setQ('');
    setToast('');
  }, [section]);
  const DataSection = ({
    id
  }) => {
    const meta = DATASETS[id];
    const rows = store[id] || [];
    const ql = q.trim().toLowerCase();
    const shown = ql ? rows.filter(r => r.cells.join(' ').toLowerCase().includes(ql)) : rows;
    const del = rid => {
      setStore({
        ...store,
        [id]: rows.filter(r => r.id !== rid)
      });
      fire(cap(meta.unit) + ' удалён');
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toast, null), /*#__PURE__*/React.createElement(SeoEditor, {
      id: id
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1,
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--ink-secondary)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(ActIcon, {
      name: "search"
    })), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: 'Быстрый поиск по «' + meta.title + '»…',
      style: {
        ...inp,
        paddingLeft: 36
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => fire('Импорт: выберите CSV/XLSX-файл для массовой загрузки'),
      style: ghostBtn
    }, /*#__PURE__*/React.createElement(ActIcon, {
      name: "up"
    }), " \u0418\u043C\u043F\u043E\u0440\u0442"), /*#__PURE__*/React.createElement("button", {
      onClick: () => fire('Экспорт: выгружено ' + rows.length + ' записей в CSV'),
      style: ghostBtn
    }, /*#__PURE__*/React.createElement(ActIcon, {
      name: "down"
    }), " \u042D\u043A\u0441\u043F\u043E\u0440\u0442"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        const nid = Math.max(0, ...rows.map(r => r.id)) + 1;
        setStore({
          ...store,
          [id]: [{
            id: nid,
            cells: meta.cols.map(() => '—')
          }, ...rows]
        });
        fire('Добавлена новая запись — заполните поля');
      },
      style: primaryBtn
    }, /*#__PURE__*/React.createElement(ActIcon, {
      name: "plus"
    }), " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-secondary)',
        marginBottom: 14
      }
    }, "\u041C\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430: \xAB\u0418\u043C\u043F\u043E\u0440\u0442\xBB \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 CSV/XLSX, \xAB\u042D\u043A\u0441\u043F\u043E\u0440\u0442\xBB \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u043E\u043A \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 18px',
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, meta.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--ink-secondary)'
      }
    }, ql ? shown.length + ' из ' + rows.length : rows.length + ' записей')), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        minWidth: 560
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, meta.cols.map(c => /*#__PURE__*/React.createElement(Th, {
      key: c
    }, c)), /*#__PURE__*/React.createElement(Th, {
      w: "90px"
    }, " "))), /*#__PURE__*/React.createElement("tbody", null, shown.map(r => /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, r.cells.map((cell, ci) => /*#__PURE__*/React.createElement(Td, {
      key: ci,
      muted: ci > 0
    }, ci === 0 ? /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 600
      }
    }, cell) : renderCell(cell))), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(RowActions, {
      onEdit: () => fire('Открыто редактирование записи'),
      onDel: () => del(r.id)
    })))), shown.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: meta.cols.length + 1,
      style: {
        padding: '28px 14px',
        textAlign: 'center',
        fontSize: 14,
        color: 'var(--ink-secondary)'
      }
    }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \xAB", q, "\xBB.")))))));
  };

  // ===================== СЛУЖЕБНЫЕ СТРАНИЦЫ =====================
  const PAGES = [{
    t: 'О сервисе',
    slug: '/about',
    upd: '01.07.2026',
    seoTitle: 'О сервисе Резюме Онлайн | Как мы работаем',
    seoDesc: 'Конструктор резюме Резюме Онлайн: бесплатное создание резюме и AI-улучшения за 99 ₽.'
  }, {
    t: 'Политика конфиденциальности',
    slug: '/privacy',
    upd: '15.05.2026',
    seoTitle: 'Политика конфиденциальности | Резюме Онлайн',
    seoDesc: 'Как мы обрабатываем и защищаем ваши персональные данные.'
  }, {
    t: 'Пользовательское соглашение',
    slug: '/terms',
    upd: '15.05.2026',
    seoTitle: 'Пользовательское соглашение | Резюме Онлайн',
    seoDesc: 'Условия использования сервиса Резюме Онлайн.'
  }, {
    t: 'Оплата и возврат',
    slug: '/payment-info',
    upd: '20.06.2026',
    seoTitle: 'Оплата и возврат | Резюме Онлайн',
    seoDesc: 'Способы оплаты, стоимость AI-версии и условия возврата средств.'
  }, {
    t: 'Контакты',
    slug: '/contacts',
    upd: '02.07.2026',
    seoTitle: 'Контакты и поддержка | Резюме Онлайн',
    seoDesc: 'Свяжитесь с нами: почта, Telegram-бот и форма обратной связи.'
  }];
  const [curPage, setCurPage] = React.useState(0);
  const pagesSection = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toast, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '260px 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, PAGES.map((p, i) => {
    const on = curPage === i;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setCurPage(i),
      style: {
        width: '100%',
        textAlign: 'left',
        padding: '12px 16px',
        borderBottom: '1px solid var(--line)',
        borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent',
        background: on ? 'var(--brand-green-tint)' : '#fff',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        color: on ? '#3F6B22' : 'var(--ink)'
      }
    }, p.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-secondary)',
        marginTop: 2
      }
    }, p.slug, " \xB7 \u0438\u0437\u043C. ", p.upd));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: isM ? 16 : 22,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, PAGES[curPage].t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-mono, monospace)',
      color: 'var(--ink-secondary)',
      background: 'var(--surface-sunken)',
      padding: '3px 8px',
      borderRadius: 6
    }
  }, PAGES[curPage].slug)), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (H1)"), /*#__PURE__*/React.createElement("input", {
    defaultValue: PAGES[curPage].t,
    key: 't' + curPage,
    style: {
      ...inp,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
      paddingTop: 4,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--brand-green)',
      background: 'var(--brand-green-tint)',
      padding: '3px 9px',
      borderRadius: 6,
      letterSpacing: '0.03em',
      marginTop: 12
    }
  }, "SEO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 12
    }
  }, "\u041C\u0435\u0442\u0430-\u0434\u0430\u043D\u043D\u044B\u0435")), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "<title> \u2014 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0432\u043A\u043B\u0430\u0434\u043A\u0438"), /*#__PURE__*/React.createElement("input", {
    defaultValue: PAGES[curPage].seoTitle,
    key: 'st' + curPage,
    maxLength: 70,
    style: {
      ...inp,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "meta description"), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: PAGES[curPage].seoDesc,
    key: 'sd' + curPage,
    maxLength: 180,
    style: {
      ...inp,
      minHeight: 64,
      resize: 'vertical',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 (HTML)"), /*#__PURE__*/React.createElement("textarea", {
    key: 'b' + curPage,
    defaultValue: '<h2>' + PAGES[curPage].t + '</h2>\n<p>Отредактируйте текст этой служебной страницы. Поддерживается разметка HTML.</p>',
    style: {
      ...inp,
      minHeight: 200,
      resize: 'vertical',
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: 13.5,
      lineHeight: 1.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => fire('Страница «' + PAGES[curPage].t + '» сохранена'),
    style: primaryBtn
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
    style: ghostBtn
  }, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440")))));

  // ——— layout ———
  const sideNav = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)',
      fontSize: 12.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--ink-secondary)'
    }
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"), NAV.map(n => {
    const on = section === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setSection(n.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 16px',
        background: on ? 'var(--brand-green-tint)' : 'transparent',
        border: 'none',
        borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? 'var(--brand-green)' : 'var(--ink-secondary)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(NIcon, {
      name: n.icon,
      color: on ? 'var(--brand-green)' : 'var(--ink-secondary)'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        color: on ? '#3F6B22' : 'var(--ink)'
      }
    }, n.label));
  }));
  const body = section === 'promo' ? promoSection : section === 'pages' ? pagesSection : /*#__PURE__*/React.createElement(DataSection, {
    id: section
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: isM ? '12px 16px' : '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 18,
      fontWeight: 700
    }
  }, "\u0420\u0435\u0437\u044E\u043C\u0435 \u041E\u043D\u043B\u0430\u0439\u043D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      background: 'var(--brand-green)',
      color: '#fff',
      padding: '3px 10px',
      borderRadius: 999
    }
  }, "ADMIN")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, !isM && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      opacity: 0.8
    }
  }, "admin@rezyume-online.ru"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('landing'),
    style: {
      background: 'rgba(255,255,255,0.14)',
      border: 'none',
      color: '#fff',
      fontSize: 13,
      fontWeight: 600,
      padding: '7px 14px',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0412\u044B\u0439\u0442\u0438"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '26px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 22 : 28,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '240px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, sideNav, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 20 : 23,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, cur.label), body))));
}

// shared styles
const lbl = {
  display: 'block',
  fontSize: 12.5,
  fontWeight: 600,
  color: 'var(--ink-secondary)',
  marginBottom: 5
};
const inp = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--ink)',
  border: '1px solid var(--line)',
  borderRadius: 8,
  padding: '10px 13px',
  outline: 'none',
  background: '#fff'
};
const primaryBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  background: 'var(--brand-green)',
  border: 'none',
  color: '#fff',
  fontSize: 13.5,
  fontWeight: 700,
  padding: '10px 16px',
  borderRadius: 9,
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  whiteSpace: 'nowrap'
};
const ghostBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  background: '#fff',
  border: '1px solid var(--line)',
  color: 'var(--ink)',
  fontSize: 13.5,
  fontWeight: 600,
  padding: '10px 14px',
  borderRadius: 9,
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  whiteSpace: 'nowrap'
};
function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function renderCell(v) {
  const tone = {
    'Опубликован': 'ok',
    'Опубликована': 'ok',
    'да': 'ok',
    'Черновик': 'warn',
    'на модерации': 'warn',
    'скрыто': 'muted'
  }[v];
  if (tone) {
    const c = {
      ok: ['#3F6B22', 'var(--brand-green-tint)'],
      warn: ['#8A5A0E', '#FDF0DA'],
      muted: ['var(--ink-secondary)', 'var(--surface-sunken)']
    }[tone];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: c[0],
        background: c[1],
        padding: '3px 10px',
        borderRadius: 999
      }
    }, v);
  }
  return v;
}
window.SITE.AdminPanel = AdminPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AdminPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Articles.jsx
try { (() => {
// Screen — Статьи. Раздел с блогом: лента статей + детальная страница статьи,
// демонстрирующая все форматы контента и способы выделения.
function Articles({
  device = 'desktop',
  state = 'list',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const CATS = ['Все', 'Составление резюме', 'Поиск работы', 'Собеседование', 'Карьера'];
  const ARTS = [{
    id: 0,
    cat: 'Составление резюме',
    t: 'Как описать опыт работы, чтобы вас позвали на собеседование',
    d: 'Разбираем формулу «действие → результат → цифра» и типичные ошибки в разделе «Опыт».',
    read: 7,
    date: '2 июля 2026',
    feat: true
  }, {
    id: 1,
    cat: 'Поиск работы',
    t: '15 сайтов и каналов для поиска работы в 2026 году',
    d: 'Где действительно есть свежие вакансии и как не утонуть в откликах.',
    read: 9,
    date: '28 июня 2026'
  }, {
    id: 2,
    cat: 'Собеседование',
    t: 'Вопросы на собеседовании: к чему готовиться и что отвечать',
    d: 'Список частых вопросов и структура сильного ответа.',
    read: 6,
    date: '24 июня 2026'
  }, {
    id: 3,
    cat: 'Составление резюме',
    t: 'Сопроводительное письмо: шаблон и примеры',
    d: 'Из чего состоит письмо и как адаптировать его под вакансию.',
    read: 5,
    date: '19 июня 2026'
  }, {
    id: 4,
    cat: 'Карьера',
    t: 'Как просить о повышении зарплаты',
    d: 'Аргументы, тайминг и подготовка к разговору с руководителем.',
    read: 8,
    date: '12 июня 2026'
  }, {
    id: 5,
    cat: 'Поиск работы',
    t: 'Резюме без опыта работы: что писать студенту',
    d: 'Образование, стажировки, проекты и навыки вместо пустого раздела опыта.',
    read: 6,
    date: '5 июня 2026'
  }];
  const [view, setView] = React.useState(state === 'article' ? 'article' : 'list');
  const [curId, setCurId] = React.useState(0);
  const [cat, setCat] = React.useState('Все');
  React.useEffect(() => {
    setView(state === 'article' ? 'article' : 'list');
  }, [state]);
  const cur = ARTS.find(a => a.id === curId) || ARTS[0];
  const openArt = id => {
    setCurId(id);
    setView('article');
  };
  const catColor = {
    'Составление резюме': 'brand',
    'Поиск работы': 'action',
    'Собеседование': 'paid',
    'Карьера': 'neutral'
  };
  const Cover = ({
    h,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 12,
      overflow: 'hidden',
      background: 'var(--brand-green-tint)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "dg",
    width: "14",
    height: "14",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(45)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "14",
    stroke: "#C6DF9E",
    strokeWidth: "6"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#dg)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: 12,
      color: '#3F6B22',
      background: 'rgba(255,255,255,0.7)',
      padding: '4px 10px',
      borderRadius: 6
    }
  }, label));

  // ——— List ———
  const catChip = c => /*#__PURE__*/React.createElement(DS.Badge, {
    tone: catColor[c] || 'neutral'
  }, c);
  const filtered = cat === 'Все' ? ARTS : ARTS.filter(a => a.cat === cat);
  const feat = ARTS.find(a => a.feat);
  const ArtCard = ({
    a
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => openArt(a.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      cursor: 'pointer',
      textAlign: 'left',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Cover, {
    h: 130,
    label: "\u043E\u0431\u043B\u043E\u0436\u043A\u0430 \u0441\u0442\u0430\u0442\u044C\u0438"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, catChip(a.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.3
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      lineHeight: 1.45,
      flex: 1
    }
  }, a.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 2
    }
  }, a.date, " \xB7 ", a.read, " \u043C\u0438\u043D \u0447\u0442\u0435\u043D\u0438\u044F")));
  const listMain = /*#__PURE__*/React.createElement("div", null, feat && cat === 'Все' && /*#__PURE__*/React.createElement("button", {
    onClick: () => openArt(feat.id),
    style: {
      width: '100%',
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      textAlign: 'left',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1.1fr 1fr',
      marginBottom: 24,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Cover, {
    h: isM ? 160 : 240,
    label: "\u043E\u0431\u043B\u043E\u0436\u043A\u0430 \xB7 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isM ? '0 20px 20px' : '32px 32px 32px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, catChip(feat.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--brand-green)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isM ? 22 : 27,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.2
    }
  }, feat.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, feat.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, feat.date, " \xB7 ", feat.read, " \u043C\u0438\u043D \u0447\u0442\u0435\u043D\u0438\u044F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, CATS.map(c => {
    const on = cat === c;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setCat(c),
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: on ? '#fff' : 'var(--ink-secondary)',
        background: on ? 'var(--brand-green)' : '#fff',
        border: '1px solid ' + (on ? 'var(--brand-green)' : 'var(--line)'),
        borderRadius: 999,
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: isM ? 14 : 20
    }
  }, filtered.filter(a => !(a.feat && cat === 'Все')).map(a => /*#__PURE__*/React.createElement(ArtCard, {
    key: a.id,
    a: a
  }))));

  // ——— Article detail — все форматы контента ———
  const H2 = ({
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 21 : 25,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '34px 0 12px',
      lineHeight: 1.2,
      scrollMarginTop: 20
    }
  }, children);
  const H3 = ({
    children
  }) => /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '24px 0 8px'
    }
  }, children);
  const P = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.7,
      margin: '0 0 14px'
    }
  }, children);
  const L = ({
    children
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--brand-green)',
      fontWeight: 600,
      textDecoration: 'underline',
      textUnderlineOffset: 2
    }
  }, children);
  const Code = ({
    children
  }) => /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: 13.5,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line)',
      borderRadius: 5,
      padding: '1px 6px'
    }
  }, children);
  const Mark = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--brand-yellow)',
      borderRadius: 3,
      padding: '0 3px',
      boxDecorationBreak: 'clone'
    }
  }, children);
  const Callout = ({
    tone,
    title,
    children
  }) => {
    const map = {
      info: {
        bg: 'var(--brand-green-tint)',
        bd: '#C6DF9E',
        fg: '#3F6B22',
        icon: 'i'
      },
      warn: {
        bg: '#FDF0DA',
        bd: '#EBD9B4',
        fg: '#8A5A0E',
        icon: '!'
      },
      tip: {
        bg: 'var(--brand-blue-tint)',
        bd: '#B7D3E3',
        fg: 'var(--brand-blue-deep)',
        icon: '★'
      }
    };
    const c = map[tone];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        background: c.bg,
        border: '1px solid ' + c.bd,
        borderRadius: 12,
        padding: '14px 16px',
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: '#fff',
        color: c.fg,
        fontWeight: 800,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: c.fg,
        marginBottom: 3
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink)',
        lineHeight: 1.55
      }
    }, children)));
  };
  const relatedList = ARTS.filter(a => a.id !== cur.id && a.cat === cur.cat).concat(ARTS.filter(a => a.cat !== cur.cat)).slice(0, 3);
  const articleMain = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('list'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 \u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, catChip(cur.cat)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 27 : 36,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 12px',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, cur.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-portrait.png",
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F \xAB\u0420\u0435\u0437\u044E\u043C\u0435 \u041E\u043D\u043B\u0430\u0439\u043D\xBB"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, cur.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, cur.read, " \u043C\u0438\u043D")), /*#__PURE__*/React.createElement(Cover, {
    h: isM ? 180 : 300,
    label: "\u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043A \u0441\u0442\u0430\u0442\u044C\u0435"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18.5,
      color: 'var(--ink)',
      lineHeight: 1.6,
      fontWeight: 500,
      margin: '0 0 20px'
    }
  }, cur.d, " \u041D\u0438\u0436\u0435 \u2014 \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0431\u043E\u0440 \u0441 \u043F\u0440\u0438\u043C\u0435\u0440\u0430\u043C\u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442."), /*#__PURE__*/React.createElement(H2, null, "\u0421 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C"), /*#__PURE__*/React.createElement(P, null, "\u0425\u043E\u0440\u043E\u0448\u0435\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043D\u0430 \u043E\u0434\u0438\u043D \u0432\u043E\u043F\u0440\u043E\u0441 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F: ", /*#__PURE__*/React.createElement(Mark, null, "\xAB\u0447\u0435\u043C \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\xBB"), ". \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u0424\u043E\u0440\u043C\u0443\u043B\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0430\u043A: ", /*#__PURE__*/React.createElement(Code, null, "\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u2192 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u2192 \u0446\u0438\u0444\u0440\u0430"), "."), /*#__PURE__*/React.createElement(P, null, "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0442\u043E\u0447\u043D\u044B\u0445 \u0446\u0438\u0444\u0440, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431: \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u0431\u044E\u0434\u0436\u0435\u0442, \u0447\u0430\u0441\u0442\u043E\u0442\u0443 \u0437\u0430\u0434\u0430\u0447. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u2014 \u0432 \u0441\u0442\u0430\u0442\u044C\u0435 ", /*#__PURE__*/React.createElement(L, null, "\xAB\u0420\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0437 \u043E\u043F\u044B\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u044B\xBB"), "."), /*#__PURE__*/React.createElement(Callout, {
    tone: "tip",
    title: "\u0421\u043E\u0432\u0435\u0442"
  }, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041E\u043F\u044B\u0442\xBB \u0441 \u0441\u0430\u043C\u043E\u0433\u043E \u0441\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u2014 \u0435\u0433\u043E \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u044E\u0442 \u043F\u0435\u0440\u0432\u044B\u043C, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043F\u0440\u043E\u043B\u0438\u0441\u0442\u0430\u044E\u0442 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435."), /*#__PURE__*/React.createElement(H2, null, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0443\u043D\u043A\u0442\u0430"), /*#__PURE__*/React.createElement(H3, null, "\u0427\u0442\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 14px',
      paddingLeft: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u0413\u043B\u0430\u0433\u043E\u043B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F: ", /*#__PURE__*/React.createElement("i", null, "\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B"), ", ", /*#__PURE__*/React.createElement("i", null, "\u0441\u043E\u043A\u0440\u0430\u0442\u0438\u043B"), ", ", /*#__PURE__*/React.createElement("i", null, "\u0432\u043D\u0435\u0434\u0440\u0438\u043B"), "."), /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0445 \u0435\u0434\u0438\u043D\u0438\u0446\u0430\u0445."), /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442: \u0437\u0430 \u043A\u0430\u043A\u043E\u0439 \u0441\u0440\u043E\u043A \u0438 \u043A\u0430\u043A\u0438\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438.")), /*#__PURE__*/React.createElement(H3, null, "\u0412 \u043A\u0430\u043A\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '0 0 14px',
      paddingLeft: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u2014 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u043F\u043E\u0442\u043E\u043C \u0434\u0435\u0442\u0430\u043B\u0438."), /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u041E\u0442 \u043D\u0435\u0434\u0430\u0432\u043D\u0435\u0433\u043E \u043E\u043F\u044B\u0442\u0430 \u043A \u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u043D\u043D\u0435\u043C\u0443."), /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 4\u20136 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u043D\u0430 \u043E\u0434\u043D\u043E \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B.")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '22px 0',
      padding: '4px 0 4px 20px',
      borderLeft: '4px solid var(--brand-green)',
      fontSize: isM ? 18 : 20,
      fontStyle: 'italic',
      color: 'var(--ink)',
      lineHeight: 1.5
    }
  }, "\xAB\u0420\u0435\u043A\u0440\u0443\u0442\u0435\u0440 \u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u0440\u0435\u0437\u044E\u043C\u0435 \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C 7 \u0441\u0435\u043A\u0443\u043D\u0434. \u0412\u0441\u0451 \u0432\u0430\u0436\u043D\u043E\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D\xBB.", /*#__PURE__*/React.createElement("cite", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginTop: 8
    }
  }, "\u2014 \u0438\u0437 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u044B\u043D\u043A\u0430 \u0442\u0440\u0443\u0434\u0430, 2025")), /*#__PURE__*/React.createElement(H2, null, "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043E\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      margin: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14.5,
      minWidth: 460
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 12px',
      background: 'var(--surface-sunken)',
      borderBottom: '2px solid var(--line)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "\u0421\u043B\u0430\u0431\u043E"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 12px',
      background: 'var(--brand-green-tint)',
      borderBottom: '2px solid var(--line)',
      fontWeight: 700,
      color: '#3F6B22'
    }
  }, "\u0421\u0438\u043B\u044C\u043D\u043E"))), /*#__PURE__*/React.createElement("tbody", null, [['Занимался рекламой', 'Запустил кампании, снизил CPL на 27%'], ['Работал с клиентами', 'Вёл 40+ клиентов, удержание — 92%'], ['Отвечал за соцсети', 'Вырастил аудиторию с 2к до 18к за год']].map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 12px',
      borderBottom: '1px solid var(--line)',
      color: 'var(--ink-secondary)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 12px',
      borderBottom: '1px solid var(--line)',
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, r[1])))))), /*#__PURE__*/React.createElement(Callout, {
    tone: "warn",
    title: "\u0427\u0430\u0441\u0442\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430"
  }, "\u041D\u0435 \u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u2014 \u0438\u0445 \u0438 \u0442\u0430\u043A \u0432\u0441\u0435 \u0437\u043D\u0430\u044E\u0442. \u0420\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E, \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0432\u0430\u043C."), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E"
  }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 + \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 + \u0446\u0438\u0444\u0440\u0430. \u0421\u0438\u043B\u044C\u043D\u043E\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435 \u2014 \u043F\u0435\u0440\u0432\u044B\u043C. \u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 6 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B."), /*#__PURE__*/React.createElement(P, null, "\u0413\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C? \u0421\u0435\u0440\u0432\u0438\u0441 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u2014 ", /*#__PURE__*/React.createElement(L, null, "\u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440"), " \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      marginTop: 8
    },
    onClick: () => go('constructor')
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderTop: '1px solid var(--line)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0436\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 1fr 1fr',
      gap: 16
    }
  }, relatedList.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    onClick: () => openArt(a.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 12,
      padding: 14,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, catChip(a.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.3
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)'
    }
  }, a.read, " \u043C\u0438\u043D"))))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0421\u0442\u0430\u0442\u044C\u0438",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '28px 40px'
    }
  }, view === 'article' ? articleMain : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 24 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0421\u0442\u0430\u0442\u044C\u0438 \u0438 \u0441\u043E\u0432\u0435\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u041A\u0430\u043A \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435, \u043F\u0440\u043E\u0439\u0442\u0438 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u2014 \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u0438 \u043F\u043E \u0434\u0435\u043B\u0443.")), listMain)), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Articles = Articles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Articles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Auth.jsx
try { (() => {
// Screen 8 — Auth. Вход email + пароль (пришёл при оплате) + восстановление. Только для платящих.
function Auth({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Logo,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const [mode, setMode] = React.useState(state === 'recover' ? 'recover' : 'login');
  const card = {
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 16,
    padding: isM ? 24 : 34,
    boxShadow: 'var(--shadow-md)',
    width: '100%',
    maxWidth: 400,
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isM ? '32px 16px' : '48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, mode === 'login' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 4px'
    }
  }, "\u0412\u0445\u043E\u0434 \u0432 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      margin: '0 0 22px',
      lineHeight: 1.5
    }
  }, "\u041F\u0430\u0440\u043E\u043B\u044C \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u043F\u0440\u0438 \u043E\u043F\u043B\u0430\u0442\u0435 AI-\u0432\u0435\u0440\u0441\u0438\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email",
    placeholder: "you@mail.ru",
    value: "e.smirnova@mail.ru",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Input, {
    label: "\u041F\u0430\u0440\u043E\u043B\u044C",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: "secret12",
    onChange: () => {}
  }), state === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: '#B4451E',
      marginTop: 6
    }
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('recover'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--brand-green)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?")), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    disabled: state === 'loading',
    onClick: () => go('cabinet')
  }, state === 'loading' ? 'Вход…' : 'Войти')), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      margin: '22px 0 0',
      paddingTop: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)'
    }
  }, "\u0415\u0449\u0451 \u043D\u0435\u0442 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginTop: 4
    }
  }, "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u043F\u043B\u0430\u0442\u0435 AI-\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430 99 \u20BD. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('preview');
    },
    style: {
      color: 'var(--brand-green)',
      fontWeight: 600
    }
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C")))) : mode === 'recover' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 4px'
    }
  }, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      margin: '0 0 22px',
      lineHeight: 1.5
    }
  }, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 email \u2014 \u043F\u0440\u0438\u0448\u043B\u0451\u043C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email",
    placeholder: "you@mail.ru",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: () => setMode('sent')
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('login'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 \u041D\u0430\u0437\u0430\u0434 \u043A\u043E \u0432\u0445\u043E\u0434\u0443"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--brand-green-tint)',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-green)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16v16H4z",
    opacity: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 6l-10 7L2 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 6h20v12H2z"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: '0 0 6px'
    }
  }, "\u041F\u0438\u0441\u044C\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      margin: '0 0 22px',
      lineHeight: 1.5
    }
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    style: {
      width: '100%'
    },
    onClick: () => setMode('login')
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A\u043E \u0432\u0445\u043E\u0434\u0443")))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Auth = Auth;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cabinet.jsx
try { (() => {
// Screen 7 — Личный кабинет «Мои резюме» (только платные). Карточки: миниатюра, название,
// статус, бессрочная ссылка, редактировать/скачать/поделиться. Плашка «правки и скачивания бесплатны».
function Cabinet({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const items = [{
    n: 'Маркетолог — основное',
    tpl: '«Чистый», синий',
    el: /*#__PURE__*/React.createElement(window.TemplateClean, {
      accent: "blue"
    }),
    status: 'Опубликовано',
    updated: 'сегодня'
  }, {
    n: 'Резюме для стартапа',
    tpl: '«Акцент», бирюзовый',
    el: /*#__PURE__*/React.createElement(window.TemplateAccent, {
      accent: "teal"
    }),
    status: 'Черновик',
    updated: '2 дня назад'
  }, {
    n: 'Академическая версия',
    tpl: '«Академический»',
    el: /*#__PURE__*/React.createElement(window.TemplateAcademic, null),
    status: 'Опубликовано',
    updated: 'неделю назад'
  }];
  const header = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u041C\u043E\u0438 \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      margin: '6px 0 0'
    }
  }, "e.smirnova@mail.ru \xB7 AI-\u0432\u0435\u0440\u0441\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u0430")), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    onClick: () => go('constructor')
  }, "+ \u041D\u043E\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435"));
  const banner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--brand-green-tint)',
      border: '1px solid #C6DF9E',
      borderRadius: 12,
      padding: '12px 16px',
      margin: '18px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(MiniCheck, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#3F6B22'
    }
  }, "\u041F\u0440\u0430\u0432\u043A\u0438 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B. \u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0432\u0430\u0448\u0438 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0435."));
  if (state === 'empty') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-tint)',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(Header, {
      device: device,
      active: "\u0423\u0441\u043B\u0443\u0433\u0438",
      onCta: () => go('constructor')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        padding: isM ? '20px 16px' : '32px 40px'
      }
    }, header, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '56px 24px',
        textAlign: 'center',
        marginTop: 20,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--ink-secondary)',
        margin: '8px 0 20px'
      }
    }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u2014 \u043E\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430."), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "md",
      onClick: () => go('constructor')
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"))), /*#__PURE__*/React.createElement(Footer, {
      device: device
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '20px 16px' : '32px 40px'
    }
  }, header, banner, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 118,
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid var(--line)',
      flexShrink: 0,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(0.1355)',
      transformOrigin: 'top left',
      width: 620,
      height: 876
    }
  }, it.el)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: it.status === 'Опубликовано' ? 'var(--brand-green)' : 'var(--brand-yellow)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)'
    }
  }, it.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      marginTop: 2
    }
  }, it.tpl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 8
    }
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E ", it.updated), it.status === 'Опубликовано' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 8,
      background: 'var(--bg-tint)',
      border: '1px solid var(--line)',
      borderRadius: 8,
      padding: '5px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-secondary)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "rezyume-online.ru/r/", it.n.length, "k2"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: '#3F6B22',
      background: 'var(--brand-green-tint)',
      padding: '2px 7px',
      borderRadius: 999
    }
  }, "\u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--line)',
      marginTop: 'auto'
    }
  }, ['Редактировать', 'Скачать', 'Поделиться'].map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => a === 'Поделиться' ? go('public') : a === 'Редактировать' ? go('constructor') : null,
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      borderLeft: i ? '1px solid var(--line)' : 'none',
      padding: '11px 6px',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, a))))))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Cabinet = Cabinet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cabinet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Constructor.jsx
try { (() => {
// Screen 2 — Конструктор (ЯДРО). Пошаговый визард с трекером, поля+подсказки слева,
// sticky live-превью справа. Секции опыта/образования с +/−. Индикатор автосохранения.
// Мобайл: превью в нижней модалке.
function Constructor({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const STEPS = ['Контакты', 'Опыт', 'Образование', 'Навыки', 'Фото', 'Шаблон'];
  const [step, setStep] = React.useState(1);
  const [showPreview, setShowPreview] = React.useState(false);
  const [exp, setExp] = React.useState([0, 1]);
  const [edu, setEdu] = React.useState([0]);
  const [photoShape, setPhotoShape] = React.useState('circle');
  const [aiApplied, setAiApplied] = React.useState(false);
  const [aiFeat, setAiFeat] = React.useState({});
  const [tpl, setTpl] = React.useState('start');
  const [consent, setConsent] = React.useState({
    pd: false,
    publish: false
  });

  // Актуальная AI-фича для каждого шага. Шаг 5 (Фото) уже имеет AI-улучшение внутри полей.
  const AI_SUGGEST = {
    1: {
      icon: 'mic',
      t: 'Диктовка «О себе»',
      d: 'Не хотите печатать? Расскажите о себе голосом — AI распознает речь и оформит аккуратный текст.',
      cta: 'Надиктовать',
      on: 'Диктовка включена'
    },
    2: {
      icon: 'sparkle',
      t: 'Усилить формулировки',
      d: 'AI перепишет обязанности как достижения с цифрами — опыт зазвучит убедительнее.',
      cta: 'Усилить с AI',
      on: 'Формулировки усилены'
    },
    3: {
      icon: 'mic',
      t: 'Диктовка образования',
      d: 'Продиктуйте учебные заведения, курсы и достижения голосом — AI разложит их по полям.',
      cta: 'Надиктовать',
      on: 'Диктовка включена'
    },
    4: {
      icon: 'target',
      t: 'Подогнать под вакансию',
      d: 'Вставьте текст вакансии — AI выделит ключевые навыки и подскажет, чего не хватает.',
      cta: 'Подобрать навыки',
      on: 'Навыки подобраны'
    },
    6: {
      icon: 'mail',
      t: 'Сопроводительное письмо',
      d: 'В финале AI подготовит письмо для отклика на основе вашего резюме и вакансии — останется отправить.',
      cta: 'Создать письмо',
      on: 'Письмо готово'
    }
  };
  const aiSuggest = () => {
    const f = AI_SUGGEST[step];
    if (!f) return null;
    const done = !!aiFeat[step];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13,
        background: done ? 'var(--brand-green-tint)' : '#FDF9F0',
        border: done ? '1px solid #C6DF9E' : '1px solid #EBD9B4',
        borderRadius: 12,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: done ? '#fff' : '#FDF0DA',
        color: done ? 'var(--brand-green)' : '#8A5A0E'
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: done ? 'check' : f.icon,
      color: done ? 'var(--brand-green)' : '#8A5A0E'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, f.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: '#8A5A0E',
        background: '#FDF0DA',
        padding: '2px 8px',
        borderRadius: 999
      }
    }, "AI \xB7 99 \u20BD")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-secondary)',
        lineHeight: 1.45,
        marginTop: 3
      }
    }, f.d), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, done ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setAiFeat({
        ...aiFeat,
        [step]: false
      }),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'none',
        border: 'none',
        color: 'var(--brand-green)',
        fontWeight: 700,
        fontSize: 13,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        padding: 0
      }
    }, f.on, " \xB7 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C") : /*#__PURE__*/React.createElement("button", {
      onClick: () => setAiFeat({
        ...aiFeat,
        [step]: true
      }),
      style: {
        background: '#fff',
        border: '1px solid #EBD9B4',
        color: '#8A5A0E',
        fontWeight: 700,
        fontSize: 13,
        padding: '8px 15px',
        borderRadius: 9,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, f.cta, " \u2192"))));
  };
  const Hint = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      background: 'var(--brand-green-tint)',
      border: '1px solid #C6DF9E',
      borderRadius: 10,
      padding: '10px 12px',
      fontSize: 12.5,
      color: '#3F6B22',
      lineHeight: 1.45,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430"), /*#__PURE__*/React.createElement("span", null, children));
  const HILITE = {
    1: 'contacts',
    2: 'experience',
    3: 'education',
    4: 'skills',
    5: null,
    6: null
  };
  const PW = 620,
    PH = 876,
    pscale = isM ? 0.5 : 0.5;
  const preview = /*#__PURE__*/React.createElement("div", {
    style: {
      width: PW * pscale,
      height: PH * pscale,
      margin: '0 auto',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${pscale})`,
      transformOrigin: 'top left',
      width: PW
    }
  }, step === 5 ? /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
    photo: "../../assets/hero-portrait.png",
    photoShape: photoShape,
    highlight: "photo"
  }) : step === 6 && tpl === 'startPhoto' ? /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
    photo: "../../assets/hero-portrait.png",
    photoShape: photoShape
  }) : /*#__PURE__*/React.createElement(window.TemplateStart, {
    highlight: HILITE[step]
  })));
  const fields = () => {
    if (step === 1) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13,
        background: '#FDF9F0',
        border: '1px solid #EBD9B4',
        borderRadius: 12,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FDF0DA',
        color: '#8A5A0E'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "19",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#8A5A0E",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 16V4M8 8l4-4 4 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0440\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: '#8A5A0E',
        background: '#FDF0DA',
        padding: '2px 8px',
        borderRadius: 999
      }
    }, "AI \xB7 99 \u20BD")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-secondary)',
        lineHeight: 1.45,
        marginTop: 3
      }
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B PDF \u0438\u043B\u0438 DOCX \u2014 AI \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0435\u0442 \u0435\u0433\u043E \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043F\u043E\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u041F\u043B\u0430\u0442\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u2014 99 \u20BD."), /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 10,
        background: '#fff',
        border: '1.5px dashed #EBD9B4',
        color: '#8A5A0E',
        fontWeight: 700,
        fontSize: 13,
        padding: '11px 15px',
        borderRadius: 9,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#8A5A0E",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95L9.13 18.07"
    })), "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B (PDF, DOCX) \u2014 99 \u20BD", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".pdf,.doc,.docx",
      style: {
        display: 'none'
      },
      onChange: () => {}
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-secondary)'
      }
    }, "\u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F",
      placeholder: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430",
      value: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
      placeholder: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443",
      value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      placeholder: "+7 (___) ___-__-__",
      value: "+7 (900) 000-00-00",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "Email",
      placeholder: "you@mail.ru",
      value: "e.smirnova@mail.ru",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0413\u043E\u0440\u043E\u0434",
      placeholder: "\u041C\u043E\u0441\u043A\u0432\u0430",
      value: "\u041C\u043E\u0441\u043A\u0432\u0430",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
      placeholder: "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433",
      value: "14.03.1994",
      onChange: () => {}
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--ink)'
      }
    }, "\u041E \u0441\u0435\u0431\u0435"), /*#__PURE__*/React.createElement("textarea", {
      defaultValue: "\u041C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433 \u0441 \u043E\u043F\u044B\u0442\u043E\u043C \u0431\u043E\u043B\u0435\u0435 6 \u043B\u0435\u0442: performance-\u0440\u0435\u043A\u043B\u0430\u043C\u0430, \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430.",
      style: {
        width: '100%',
        marginTop: 4,
        minHeight: 72,
        resize: 'vertical',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: 'var(--ink)',
        border: '1px solid var(--line)',
        borderRadius: 8,
        padding: '11px 14px',
        boxSizing: 'border-box',
        outline: 'none'
      }
    })), /*#__PURE__*/React.createElement(Hint, null, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0441\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430 \u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \xAB\u0432\u044B\u0440\u043E\u0441\u043B\u0430 ROMI \u043D\u0430 38%\xBB."));
    if (step === 2) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, exp.map((id, idx) => /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink-secondary)'
      }
    }, "\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B ", idx + 1), exp.length > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: () => setExp(exp.filter(x => x !== id)),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--ink-secondary)',
        cursor: 'pointer',
        fontSize: 13
      }
    }, "\u2212 \u0423\u0434\u0430\u043B\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
      value: idx === 0 ? 'Ведущий маркетолог' : 'Маркетолог',
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
      value: idx === 0 ? 'ООО «Технопарк Медиа»' : 'Сеть кофеен «Бодрость»',
      onChange: () => {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u041F\u0435\u0440\u0438\u043E\u0434",
      value: idx === 0 ? 'Июнь 2021 — н.в.' : 'Март 2019 — Май 2021',
      onChange: () => {}
    }), idx === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 18
      }
    }, /*#__PURE__*/React.createElement(DS.Switch, {
      label: "\u041F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F",
      checked: true,
      onChange: () => {}
    }))))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setExp([...exp, Math.max(...exp) + 1]),
      style: {
        alignSelf: 'flex-start',
        background: 'none',
        border: '1.5px dashed var(--brand-green)',
        color: 'var(--brand-green)',
        fontWeight: 600,
        fontSize: 14,
        padding: '9px 16px',
        borderRadius: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement(Hint, null, "\u0424\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C\u0438, \u0430 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438: \xAB\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438, \u0441\u043D\u0438\u0437\u0438\u043B\u0430 CPL \u043D\u0430 27%\xBB \u0432\u043C\u0435\u0441\u0442\u043E \xAB\u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0430\u0441\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439\xBB."));
    if (step === 3) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, edu.map((id, idx) => /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink-secondary)'
      }
    }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 ", idx + 1), edu.length > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: () => setEdu(edu.filter(x => x !== id)),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--ink-secondary)',
        cursor: 'pointer',
        fontSize: 13
      }
    }, "\u2212 \u0423\u0434\u0430\u043B\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0423\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
      value: "\u0420\u042D\u0423 \u0438\u043C. \u0413. \u0412. \u041F\u043B\u0435\u0445\u0430\u043D\u043E\u0432\u0430",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      value: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(DS.Input, {
      label: "\u0413\u043E\u0434\u044B",
      value: "2012 \u2014 2017",
      onChange: () => {}
    })))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEdu([...edu, Math.max(...edu) + 1]),
      style: {
        alignSelf: 'flex-start',
        background: 'none',
        border: '1.5px dashed var(--brand-green)',
        color: 'var(--brand-green)',
        fontWeight: 600,
        fontSize: 14,
        padding: '9px 16px',
        borderRadius: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"));
    if (step === 4) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 8
      }
    }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 (hard skills)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, ['Яндекс Директ', 'VK Реклама', 'Google Analytics', 'Контент-стратегия', 'Excel'].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--brand-green-tint)',
        color: '#3F6B22',
        fontSize: 13,
        fontWeight: 500,
        padding: '6px 12px',
        borderRadius: 999
      }
    }, s, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        opacity: 0.6
      }
    }, "\xD7"))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        border: '1.5px dashed var(--brand-green)',
        color: 'var(--brand-green)',
        fontSize: 13,
        fontWeight: 600,
        padding: '5px 12px',
        borderRadius: 999,
        cursor: 'pointer'
      }
    }, "+ \u043D\u0430\u0432\u044B\u043A"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 8
      }
    }, "\u041B\u0438\u0447\u043D\u044B\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 (soft skills)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, ['Коммуникабельность', 'Аналитическое мышление', 'Ответственность'].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'var(--surface-sunken)',
        color: 'var(--ink-secondary)',
        fontSize: 13,
        fontWeight: 500,
        padding: '6px 12px',
        borderRadius: 999
      }
    }, s, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        opacity: 0.6
      }
    }, "\xD7"))))), /*#__PURE__*/React.createElement(Hint, null, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438: \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u0432\u044B\u043A, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E. 5\u20138 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E."));
    if (step === 5) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--ink-secondary)'
      }
    }, "\u0424\u043E\u0442\u043E \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. \u0412 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043E\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0435\u0441\u0442\u044C."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: isM ? 'column' : 'row',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u041E\u0431\u0440\u0435\u0437\u043A\u0430"), /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "brand"
    }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0 14px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hero-portrait.png",
      alt: "",
      style: {
        width: 128,
        height: 128,
        borderRadius: photoShape === 'circle' ? '50%' : 14,
        objectFit: 'cover',
        border: '1px solid var(--line)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center'
      }
    }, [['circle', 'Круг'], ['square', 'Квадрат']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setPhotoShape(k),
      style: {
        fontSize: 13,
        fontWeight: photoShape === k ? 700 : 500,
        color: photoShape === k ? 'var(--brand-green)' : 'var(--ink-secondary)',
        background: photoShape === k ? 'var(--brand-green-tint)' : 'var(--bg-tint)',
        border: photoShape === k ? '1px solid var(--brand-green)' : '1px solid var(--line)',
        borderRadius: 8,
        padding: '7px 16px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "AI-\u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: '#8A5A0E',
        background: '#FDF0DA',
        padding: '3px 9px',
        borderRadius: 999
      }
    }, "99 \u20BD")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 0 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hero-portrait.png",
      alt: "",
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        objectFit: 'cover',
        filter: 'saturate(0.7) brightness(0.97)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-secondary)',
        marginTop: 5
      }
    }, "\u0414\u043E")), /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--brand-green)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hero-portrait.png",
      alt: "",
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        objectFit: 'cover',
        filter: aiApplied ? 'none' : 'blur(3px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: aiApplied ? 'var(--brand-green)' : 'var(--ink-secondary)',
        marginTop: 5,
        fontWeight: aiApplied ? 700 : 400
      }
    }, "\u041F\u043E\u0441\u043B\u0435"))), aiApplied ? /*#__PURE__*/React.createElement(DS.Button, {
      variant: "secondary",
      size: "md",
      style: {
        width: '100%'
      },
      onClick: () => setAiApplied(false)
    }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B") : /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "md",
      style: {
        width: '100%'
      },
      onClick: () => setAiApplied(true)
    }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \xB7 99 \u20BD"))), /*#__PURE__*/React.createElement(Hint, null, "\u0425\u043E\u0440\u043E\u0448\u0435\u0435 \u0444\u043E\u0442\u043E \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u043E\u0442\u043A\u043B\u0438\u043A. AI \u0432\u044B\u0440\u043E\u0432\u043D\u044F\u0435\u0442 \u0441\u0432\u0435\u0442, \u0443\u0431\u0435\u0440\u0451\u0442 \u0444\u043E\u043D \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0438\u0434 \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u2014 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438."));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--ink-secondary)'
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D. \u0421\u0442\u0440\u043E\u0433\u0438\u0435 \u043F\u0440\u0435\u0441\u0435\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430 99 \u20BD."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, [{
      key: 'start',
      el: /*#__PURE__*/React.createElement(window.TemplateStart, null),
      n: '«Старт»',
      d: 'без фото'
    }, {
      key: 'startPhoto',
      el: /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
        photo: "../../assets/hero-portrait.png",
        photoShape: photoShape
      }),
      n: '«Старт+фото»',
      d: 'с фото'
    }].map(t => {
      const on = tpl === t.key;
      return /*#__PURE__*/React.createElement("button", {
        key: t.key,
        onClick: () => setTpl(t.key),
        style: {
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'center',
          fontFamily: 'var(--font-sans)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 150,
          height: 211,
          borderRadius: 10,
          overflow: 'hidden',
          border: on ? '2px solid var(--brand-green)' : '1px solid var(--line)',
          boxShadow: on ? 'var(--shadow-brand)' : 'var(--shadow-sm)',
          background: '#fff'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          transform: 'scale(0.242)',
          transformOrigin: 'top left',
          width: 620,
          height: 876
        }
      }, t.el)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: on ? 700 : 600,
          marginTop: 8,
          color: on ? 'var(--brand-green)' : 'var(--ink)'
        }
      }, t.n), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: 'var(--ink-secondary)'
        }
      }, t.d));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u041F\u0435\u0440\u0435\u0434 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C"), /*#__PURE__*/React.createElement(DS.Checkbox, {
      checked: consent.pd,
      onChange: v => setConsent({
        ...consent,
        pd: v
      }),
      label: "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    }), /*#__PURE__*/React.createElement(DS.Checkbox, {
      checked: consent.publish,
      onChange: v => setConsent({
        ...consent,
        publish: v
      }),
      label: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0451 \u0440\u0435\u0437\u044E\u043C\u0435 \u0432 \u0411\u0430\u0437\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u2014 \u0442\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u0438 \u0441\u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0439\u0442\u0438 \u0432\u0430\u0441 \u0441\u0430\u043C\u0438 (\u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044E)"
    }), !consent.pd && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#B4451E'
      }
    }, "\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C, \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445.")));
  };
  const autosave = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, state === 'loading' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spinner, null), " \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026") : state === 'error' ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#B4451E',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\u26A0 \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u2014 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#B4451E',
      fontWeight: 700
    }
  }, "\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SavedDot, null), " \u0412\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"));
  const formPane = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: isM ? 6 : 10,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--brand-green)'
    }
  }, "\u0428\u0430\u0433 ", step, " \u0438\u0437 ", STEPS.length), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: 'var(--line)',
      borderRadius: 999,
      overflow: 'hidden',
      minWidth: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${step / STEPS.length * 100}%`,
      height: '100%',
      background: 'var(--brand-green)',
      transition: 'width .3s'
    }
  }))), !isM && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setStep(i + 1),
    style: {
      fontSize: 13,
      fontWeight: i + 1 === step ? 700 : 500,
      color: i + 1 === step ? 'var(--ink)' : 'var(--ink-secondary)',
      background: i + 1 === step ? 'var(--brand-green-tint)' : 'transparent',
      border: 'none',
      borderRadius: 8,
      padding: '6px 12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, i + 1, ". ", s))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '4px 0 4px'
    }
  }, STEPS[step - 1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, autosave), fields(), aiSuggest(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "md",
    disabled: step === 1,
    onClick: () => setStep(Math.max(1, step - 1))
  }, "\u2190 \u041D\u0430\u0437\u0430\u0434"), step < STEPS.length ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    onClick: () => setStep(step + 1)
  }, "\u0414\u0430\u043B\u0435\u0435 \u2192") : /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    disabled: !consent.pd,
    onClick: () => go('preview')
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0440\u0435\u0437\u044E\u043C\u0435")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px 90px' : '28px 40px',
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: isM ? 18 : 28,
      boxShadow: 'var(--shadow-sm)'
    }
  }, formPane), !isM && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--ink-secondary)',
      marginBottom: 10
    }
  }, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: 16,
      height: 520,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, preview)))), isM && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      borderTop: '1px solid var(--line)',
      padding: '10px 16px',
      display: 'flex',
      gap: 10,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    onClick: () => setShowPreview(true),
    style: {
      flex: 1
    }
  }, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    disabled: step === STEPS.length && !consent.pd,
    onClick: () => step < STEPS.length ? setStep(step + 1) : go('preview'),
    style: {
      flex: 1
    }
  }, step < STEPS.length ? 'Далее' : 'К резюме')), isM && showPreview && /*#__PURE__*/React.createElement("div", {
    onClick: () => setShowPreview(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(43,43,43,0.5)',
      zIndex: 40,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: '16px 16px 0 0',
      padding: 16,
      width: '100%',
      maxHeight: '82%',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: 'var(--line)',
      borderRadius: 999,
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, preview))), !isM && /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      border: '2px solid var(--line)',
      borderTopColor: 'var(--brand-green)',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'spin 0.7s linear infinite'
    }
  });
}
function SavedDot() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--brand-green)',
      display: 'inline-block'
    }
  });
}
function CIcon({
  name,
  color
}) {
  const p = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'mic':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "12",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 11a7 7 0 0014 0M12 18v3"
      }));
    case 'sparkle':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l1.8 4.9L18.5 9l-4.7 1.1L12 15l-1.8-4.9L5.5 9l4.7-1.1z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18 15l.7 1.8L20.5 17.5l-1.8.7L18 20l-.7-1.8L15.5 17.5l1.8-.7z"
      }));
    case 'target':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "target",
        color: color,
        size: 19
      });
    case 'mail':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "mail",
        color: color,
        size: 19
      });
    case 'check':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M20 6L9 17l-5-5"
      }));
    default:
      return null;
  }
}
window.SITE.Constructor = Constructor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Constructor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Error404.jsx
try { (() => {
// Screen 10 — 404. Дружелюбная страница ошибки в фирменном стиле, с волной-листвой.
function Error404({
  device = 'desktop',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const links = [['Создать резюме', 'constructor'], ['Шаблоны', 'templates'], ['Частые вопросы', 'landing']];
  const FEATURES = ['Бесплатное создание резюме и PDF без регистрации', 'Готовые шаблоны и образцы по 500+ профессиям', 'Импорт данных из старого резюме', 'Заполнение голосом — диктовка текста', 'Улучшение фото для резюме (AI)', 'Усиление формулировок опыта (AI)', 'Подгонка резюме под вакансию', 'Готовое сопроводительное письмо', 'Экспорт в PDF и DOCX, бессрочная ссылка', 'Публикация в Базе резюме для работодателей'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0428\u0430\u0431\u043B\u043E\u043D\u044B",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, var(--bg-tint) 0%, #fff 100%)',
      padding: isM ? '40px 18px' : '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isM ? 96 : 140,
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--brand-green)',
      letterSpacing: '-0.03em',
      fontFamily: 'var(--font-serif-display)'
    }
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 22 : 28,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '14px 0 0'
    }
  }, "\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: isM ? 15 : 16.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55,
      margin: '12px auto 0',
      maxWidth: 420
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u044B\u043B\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0430. \u041D\u043E \u0440\u0435\u0437\u044E\u043C\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u0434\u0435\u043B\u043E\u0441\u044C \u2014 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('constructor')
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('landing')
  }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      paddingTop: 22,
      borderTop: '1px solid var(--line)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      textAlign: 'center',
      marginBottom: 16
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
      gap: '10px 22px'
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 1,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--brand-green)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", null, f))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginBottom: 10
    }
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, links.map(([label, dest]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(dest);
    },
    style: {
      fontSize: 14.5,
      color: 'var(--brand-green)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, label, " \u2192")))))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Error404 = Error404;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Error404.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Examples.jsx
try { (() => {
// Screen 10 — Примеры резюме. Каталог готовых примеров: сайдбар разделов/подразделов,
// карточки примеров и детальная страница примера с перелинковкой на соседние примеры.
function Examples({
  device = 'desktop',
  state = 'list',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const POOL = [() => /*#__PURE__*/React.createElement(window.TemplateStart, null), () => /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "blue"
  }), () => /*#__PURE__*/React.createElement(window.TemplateCompact, {
    accent: "teal"
  }), () => /*#__PURE__*/React.createElement(window.TemplateOneColumn, {
    accent: "graphite"
  }), () => /*#__PURE__*/React.createElement(window.TemplateAccent, {
    accent: "teal"
  }), () => /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "graphite"
  }), () => /*#__PURE__*/React.createElement(window.TemplateAcademic, null), () => /*#__PURE__*/React.createElement(window.TemplateAccent, {
    accent: "blue"
  })];

  // Демонстрационный срез каталога (полный — 17 разделов · 500+ профессий).
  const SECTIONS = [{
    id: 'sales',
    name: 'Продажи и клиенты',
    subs: [{
      name: 'Менеджеры',
      items: ['Менеджер по продажам', 'Менеджер по работе с клиентами', 'Аккаунт-менеджер']
    }, {
      name: 'Розница',
      items: ['Продавец-консультант', 'Кассир', 'Администратор магазина']
    }]
  }, {
    id: 'logistics',
    name: 'Транспорт и логистика',
    subs: [{
      name: 'Водители',
      items: ['Водитель категории B', 'Водитель категории C', 'Водитель-экспедитор']
    }, {
      name: 'Склад',
      items: ['Кладовщик', 'Комплектовщик']
    }]
  }, {
    id: 'food',
    name: 'Общественное питание',
    subs: [{
      name: 'Кухня',
      items: ['Повар', 'Су-шеф', 'Кондитер']
    }, {
      name: 'Зал',
      items: ['Официант', 'Бариста', 'Хостес']
    }]
  }, {
    id: 'it',
    name: 'IT и разработка',
    subs: [{
      name: 'Разработка',
      items: ['Frontend-разработчик', 'Backend-разработчик']
    }, {
      name: 'Данные',
      items: ['Аналитик данных', 'Data Scientist']
    }]
  }, {
    id: 'marketing',
    name: 'Маркетинг и реклама',
    subs: [{
      name: 'Digital',
      items: ['Интернет-маркетолог', 'SMM-специалист', 'Таргетолог']
    }, {
      name: 'Контент',
      items: ['Копирайтер', 'Контент-менеджер']
    }]
  }, {
    id: 'office',
    name: 'Административный персонал',
    subs: [{
      name: 'Офис',
      items: ['Секретарь', 'Офис-менеджер', 'Персональный ассистент']
    }]
  }];

  // плоский список примеров
  const EXAMPLES = [];
  SECTIONS.forEach(sec => sec.subs.forEach(sub => sub.items.forEach(prof => {
    EXAMPLES.push({
      id: EXAMPLES.length,
      prof,
      secId: sec.id,
      secName: sec.name,
      sub: sub.name
    });
  })));
  const tplFor = id => POOL[id % POOL.length];
  const firstSub = SECTIONS[0].subs[0].name;
  const [expanded, setExpanded] = React.useState({
    [SECTIONS[0].id]: true
  });
  const [active, setActive] = React.useState({
    secId: SECTIONS[0].id,
    sub: firstSub
  });
  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curId, setCurId] = React.useState(2);
  React.useEffect(() => {
    setView(state === 'detail' ? 'detail' : 'list');
  }, [state]);
  const inSub = (secId, sub) => EXAMPLES.filter(e => e.secId === secId && e.sub === sub);
  const listed = inSub(active.secId, active.sub);
  const cur = EXAMPLES.find(e => e.id === curId) || EXAMPLES[0];
  const openExample = id => {
    setCurId(id);
    setView('detail');
  };

  // ——— Sidebar ———
  const sidebar = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)',
      fontSize: 12.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--ink-secondary)'
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: isM ? 260 : 560,
      overflowY: 'auto'
    }
  }, SECTIONS.map(sec => {
    const open = expanded[sec.id];
    return /*#__PURE__*/React.createElement("div", {
      key: sec.id,
      style: {
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExpanded({
        ...expanded,
        [sec.id]: !open
      }),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: '11px 16px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--ink)',
        fontFamily: 'var(--font-sans)'
      }
    }, sec.name, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-green)',
        fontSize: 18,
        lineHeight: 1,
        transform: open ? 'rotate(90deg)' : 'none',
        transition: 'transform .2s'
      }
    }, "\u203A")), open && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 6
      }
    }, sec.subs.map(sub => {
      const on = active.secId === sec.id && active.sub === sub.name;
      return /*#__PURE__*/React.createElement("button", {
        key: sub.name,
        onClick: () => {
          setActive({
            secId: sec.id,
            sub: sub.name
          });
          setView('list');
        },
        style: {
          width: '100%',
          textAlign: 'left',
          padding: '8px 16px 8px 26px',
          background: on ? 'var(--brand-green-tint)' : 'transparent',
          border: 'none',
          borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent',
          cursor: 'pointer',
          fontSize: 13.5,
          fontWeight: on ? 700 : 500,
          color: on ? '#3F6B22' : 'var(--ink-secondary)',
          fontFamily: 'var(--font-sans)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", null, sub.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          opacity: 0.7
        }
      }, inSub(sec.id, sub.name).length));
    })));
  })));

  // ——— Example card ———
  const Card = ({
    e
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => openExample(e.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      overflow: 'hidden',
      background: 'var(--bg-tint)',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: 'scale(0.29)',
      transformOrigin: 'top center'
    }
  }, tplFor(e.id)())), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, e.prof), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 2
    }
  }, e.secName, " \xB7 ", e.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--brand-green)'
    }
  }, "\u0412\u0437\u044F\u0442\u044C \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443 \u2192")));

  // ——— List view main ———
  const listMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      marginBottom: 6
    }
  }, SECTIONS.find(s => s.id === active.secId).name, " / ", active.sub), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 20 : 24,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 4px'
    }
  }, active.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginBottom: 20
    }
  }, listed.length, " \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u2014 \u0432\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443 \u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u0434 \u0441\u0435\u0431\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(auto-fill, minmax(210px, 1fr))',
      gap: isM ? 12 : 18
    }
  }, listed.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.id,
    e: e
  }))));

  // ——— Detail view main ———
  const neighbours = inSub(cur.secId, cur.sub).filter(e => e.id !== cur.id);
  const detailMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('list'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 12,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 ", cur.secName, " \xB7 ", cur.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 300px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 14 : 24,
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620 * (isM ? 0.52 : 0.72),
      height: 876 * (isM ? 0.52 : 0.72),
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: isM ? 'scale(0.52)' : 'scale(0.72)',
      transformOrigin: 'top left'
    }
  }, tplFor(cur.id)()))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: isM ? 'static' : 'sticky',
      top: 28,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: 22,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, cur.prof), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginTop: 4
    }
  }, "\u041E\u0431\u0440\u0430\u0437\u0435\u0446 \u0440\u0435\u0437\u044E\u043C\u0435 \xB7 ", cur.secName), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 16
    },
    onClick: () => go('constructor')
  }, "\u0412\u0437\u044F\u0442\u044C \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    style: {
      width: '100%',
      marginTop: 10
    },
    onClick: () => go('preview')
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      marginTop: 10
    }
  }, "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434 \u0441\u0435\u0431\u044F \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 14px'
    }
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0432 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB", cur.sub, "\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, neighbours.map(e => /*#__PURE__*/React.createElement("button", {
    key: e.id,
    onClick: () => openExample(e.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '9px 16px',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, e.prof, " \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 13.5,
      color: 'var(--ink-secondary)'
    }
  }, "\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043A\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B:", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 12,
      flexWrap: 'wrap',
      marginLeft: 8
    }
  }, SECTIONS.filter(s => s.id !== cur.secId).slice(0, 4).map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      setExpanded({
        [s.id]: true
      });
      setActive({
        secId: s.id,
        sub: s.subs[0].name
      });
      setView('list');
    },
    style: {
      color: 'var(--brand-green)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, s.name))))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 24 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "17 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \xB7 \u0431\u043E\u043B\u0435\u0435 500 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044E \u0438 \u0432\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '260px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, sidebar, /*#__PURE__*/React.createElement("div", null, view === 'detail' ? detailMain : listMain))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Examples = Examples;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Examples.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Faq.jsx
try { (() => {
// Screen — FAQ. Общие вопросы и ответы по сервису (помимо тех, что встроены в отдельные страницы).
// Категории + аккордеон + поиск + переход в Поддержку.
function Faq({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const GROUPS = [{
    id: 'service',
    name: 'О сервисе',
    qa: [{
      q: 'Резюме действительно можно сделать бесплатно?',
      a: 'Да. Заполнение по шагам, два шаблона («Старт» и «Старт+фото») и скачивание в PDF — бесплатно и без ограничений по количеству резюме.'
    }, {
      q: 'Нужно ли регистрироваться?',
      a: 'Чтобы начать — нет. Кабинет с сохранением резюме создаётся автоматически при первом сохранении: пароль придёт на указанную почту.'
    }, {
      q: 'Сколько времени занимает составление?',
      a: 'Обычно 10–15 минут. Можно рассказывать о себе обычными словами — сервис подскажет формулировки на каждом шаге.'
    }]
  }, {
    id: 'pay',
    name: 'Оплата и AI-версия',
    qa: [{
      q: 'За что платить 99 ₽?',
      a: 'AI-версия открывает: улучшение фото, усиление формулировок, адаптацию под вакансию, сопроводительное письмо, все платные шаблоны, а также форматы PDF + DOCX и бессрочную ссылку.'
    }, {
      q: 'Это подписка?',
      a: 'Нет. 99 ₽ — разовый платёж за конкретное резюме. Никаких автосписаний.'
    }, {
      q: 'Какие способы оплаты?',
      a: 'Оплата через YooKassa: банковские карты и СБП. После оплаты файлы доступны сразу, пароль от кабинета — на почте.'
    }, {
      q: 'Можно вернуть деньги?',
      a: 'Да, если функции AI-версии не сработали по нашей вине. Напишите в поддержку — разберёмся индивидуально.'
    }]
  }, {
    id: 'files',
    name: 'Форматы и скачивание',
    qa: [{
      q: 'В каком формате скачивается резюме?',
      a: 'Бесплатно — PDF. В AI-версии дополнительно доступен DOCX для правок в Word и бессрочная ссылка на онлайн-версию.'
    }, {
      q: 'Резюме подойдёт для загрузки на сайты вакансий?',
      a: 'Да. Шаблон «Одна колонка» специально сделан ATS-дружелюбным — его корректно читают роботы-парсеры.'
    }, {
      q: 'Сколько хранится ссылка на резюме?',
      a: 'В бесплатной версии — 24 часа. В AI-версии ссылка бессрочная, пока вы сами её не отключите.'
    }]
  }, {
    id: 'privacy',
    name: 'Данные и приватность',
    qa: [{
      q: 'Что происходит с моими данными?',
      a: 'Данные используются только для формирования резюме и хранятся в вашем кабинете. Мы не передаём их третьим лицам без вашего согласия.'
    }, {
      q: 'Можно удалить резюме и аккаунт?',
      a: 'Да, в любой момент из кабинета. Вместе с резюме удаляются загруженные фото и связанные данные.'
    }]
  }, {
    id: 'base',
    name: 'Публикация в Базе резюме',
    qa: [{
      q: 'Что такое База резюме?',
      a: 'Это открытый каталог, где работодатели ищут кандидатов. Публикация — по желанию: на последнем шаге конструктора стоит отдельная галочка.'
    }, {
      q: 'Можно скрыть контакты в публичном резюме?',
      a: 'Да. В публичной версии телефон и почта скрыты — работодатель отправляет отклик через сервис, а вы решаете, отвечать ли.'
    }, {
      q: 'Как убрать резюме из Базы?',
      a: 'Снимите галочку публикации в конструкторе или отключите публикацию в кабинете — резюме пропадёт из каталога.'
    }]
  }];
  const [active, setActive] = React.useState('service');
  const [openKey, setOpenKey] = React.useState('service-0');
  const [query, setQuery] = React.useState('');
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const allQA = GROUPS.flatMap(g => g.qa.map((item, i) => ({
    ...item,
    gid: g.id,
    gname: g.name,
    key: g.id + '-' + i
  })));
  const results = searching ? allQA.filter(x => (x.q + ' ' + x.a).toLowerCase().includes(q)) : [];
  const group = GROUPS.find(g => g.id === active);
  const Item = ({
    item,
    showGroup
  }) => {
    const on = openKey === item.key;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenKey(on ? '' : item.key),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 14,
        padding: '16px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, showGroup && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 700,
        color: 'var(--brand-green)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, item.gname), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: 700,
        color: 'var(--ink)',
        lineHeight: 1.35
      }
    }, item.q)), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: on ? 'var(--brand-green)' : 'var(--brand-green-tint)',
        color: on ? '#fff' : 'var(--brand-green)',
        fontSize: 17,
        lineHeight: '22px',
        textAlign: 'center',
        transition: 'all .2s'
      }
    }, on ? '−' : '+')), on && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--ink-secondary)',
        lineHeight: 1.6,
        padding: '0 34px 18px 4px'
      }
    }, item.a));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "FAQ",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 26 : 34,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-secondary)',
      marginTop: 8
    }
  }, "\u0412\u0441\u0451 \u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0435, \u043E\u043F\u043B\u0430\u0442\u0435, \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445 \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0438. \u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      margin: '18px auto 0'
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  }))), searching ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? '4px 16px' : '8px 28px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      padding: '14px 4px 4px'
    }
  }, results.length ? `Найдено: ${results.length}` : 'Ничего не найдено — попробуйте другой запрос или напишите в поддержку.'), results.map(item => /*#__PURE__*/React.createElement(Item, {
    key: item.key,
    item: item,
    showGroup: true
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '220px 1fr',
      gap: isM ? 16 : 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isM ? 'row' : 'column',
      gap: 4,
      flexWrap: isM ? 'wrap' : 'nowrap',
      position: isM ? 'static' : 'sticky',
      top: 28
    }
  }, GROUPS.map(g => {
    const on = active === g.id;
    return /*#__PURE__*/React.createElement("button", {
      key: g.id,
      onClick: () => {
        setActive(g.id);
        setOpenKey(g.id + '-0');
      },
      style: {
        textAlign: 'left',
        background: on ? 'var(--brand-green-tint)' : 'transparent',
        color: on ? '#3F6B22' : 'var(--ink)',
        border: 'none',
        borderRadius: 8,
        padding: '10px 12px',
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, g.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? '4px 16px' : '8px 28px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '18px 4px 4px'
    }
  }, group.name), group.qa.map((item, i) => /*#__PURE__*/React.createElement(Item, {
    key: i,
    item: {
      ...item,
      key: group.id + '-' + i
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      background: 'var(--brand-green)',
      color: '#fff',
      borderRadius: 16,
      padding: isM ? '22px 20px' : '28px 32px',
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      alignItems: isM ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700
    }
  }, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.92,
      marginTop: 4
    }
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F.")), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('support')
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443"))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
// Screen 1 — Лендинг. Hero (заголовок сверху по центру, CTA снизу), два пути,
// честная таблица Free/99₽, превью галереи (карусель на мобайле), киллер-фичи, FAQ (schema.org), футер.
function Landing({
  device = 'desktop',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer,
    SectionHead,
    PriceChip
  } = window.SITE;
  const isM = device === 'mobile';
  const pad = isM ? '0 18px' : '0 40px';
  const wrap = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: pad,
    boxSizing: 'border-box'
  };
  const freeSteps = [{
    t: 'Заполните данные по шагам',
    d: 'Контакты, опыт, образование, навыки и дополнительная информация — всё в понятной форме с подсказками.'
  }, {
    t: 'Используйте готовые формулировки',
    d: 'Сервис подскажет, как лучше описать обязанности, навыки и достижения без пустых шаблонных фраз.'
  }, {
    t: 'Выберите бесплатный шаблон',
    d: 'Доступны два аккуратных варианта: с фото или без фото.'
  }, {
    t: 'Скачайте PDF сразу',
    d: 'Готовое резюме можно скачать бесплатно. Ссылка на резюме будет активна 24 часа.'
  }];
  const paidSteps = [{
    t: 'Надиктуйте данные или загрузите старое резюме',
    d: 'Не нужно переносить всё вручную: AI разберёт опыт, образование, навыки и соберёт структуру.'
  }, {
    t: 'Улучшите фото для первого впечатления',
    d: 'Нейросеть аккуратно доработает фото: свет, резкость, кадрирование и общий профессиональный вид.'
  }, {
    t: 'Усильте формулировки',
    d: 'AI поможет описать опыт, обязанности и достижения понятнее, конкретнее и убедительнее.'
  }, {
    t: 'Подгоните резюме под вакансию',
    d: 'Вставьте текст вакансии — сервис выделит важные навыки, ключевые слова и релевантный опыт.'
  }, {
    t: 'Получите письмо для отклика',
    d: 'AI подготовит сопроводительное письмо на основе Вашего резюме и требований вакансии.'
  }];
  const rows = [['Цена', '0 ₽', '99 ₽ один раз'], ['Шаблоны', '2 шаблона: с фото и без фото', 'Все шаблоны + настройки цвета и шрифта'], ['Заполнение вручную', true, 'галочка + AI-подсказки'], ['Готовые формулировки', 'базовые подсказки', 'AI-усиление текста'], ['Голосовой ввод', '—', true], ['Загрузка старого резюме', '—', 'PDF/DOCX импорт'], ['AI-улучшение фото', '—', true], ['Адаптация под вакансию', '—', 'навыки, опыт, ключевые слова'], ['Сопроводительное письмо', '—', 'под резюме и вакансию'], ['Формат файла', 'PDF', 'PDF и DOCX'], ['Ссылка на резюме', '24 часа', 'бессрочная'], ['Личный кабинет', '—', true], ['Правки и скачивания', 'в течение 24 часов', 'без доплат'], ['Регистрация', 'не нужна', 'кабинет создаётся автоматически']];
  const valueTool = [{
    vIcon: 'user',
    v: 'Профессиональное фото для резюме',
    vd: 'Фото выглядит аккуратнее: лучше свет, резкость, кадрирование и общее первое впечатление.',
    tIcon: 'wand',
    t: 'Нейросеть улучшает фото',
    td: 'AI показывает вариант «до → после».'
  }, {
    vIcon: 'doc',
    v: 'Резюме без заполнения с нуля',
    vd: 'Не нужно заново переписывать опыт, образование и навыки вручную.',
    tIcon: 'fileup',
    t: 'Импорт старого файла',
    td: 'Сервис разбирает PDF/DOCX и раскладывает данные по разделам.'
  }, {
    vIcon: 'clock',
    v: 'Заполнение за несколько минут',
    vd: 'Можно рассказать о себе обычными словами, без мучительного заполнения длинной анкеты.',
    tIcon: 'mic',
    t: 'Голосовой ввод',
    td: 'AI распознаёт речь и превращает её в блоки резюме.'
  }, {
    vIcon: 'target',
    v: 'Приблизим резюме к требованиям вакансии',
    vd: 'Резюме выглядит не универсальным файлом для всех, а откликом под конкретную должность.',
    tIcon: 'search',
    t: 'Подгонка под вакансию',
    td: 'AI усиливает релевантные навыки, опыт и ключевые слова.'
  }, {
    vIcon: 'mail',
    v: 'Готовое сопроводительное письмо',
    vd: 'Вместе с резюме вы получаете текст, с которого проще начать общение с работодателем.',
    tIcon: 'send',
    t: 'AI-письмо под отклик',
    td: 'Сервис формирует письмо на основе резюме и выбранной вакансии.'
  }];
  const faqs = [['Это правда бесплатно?', 'Да. Бесплатное резюме — полноценное, без урезаний и водяных знаков. PDF скачивается сразу, без оплаты и регистрации.'], ['Что такое «99 ₽ один раз»?', 'Разовый платёж, не подписка. Открываются голосовой ввод, загрузка старого резюме, AI-улучшение текста и фото, DOCX, библиотека шаблонов и личный кабинет с бессрочной ссылкой.'], ['Нужно ли вводить карту для бесплатной версии?', 'Нет. Оплата нужна только если вы сами захотите AI-версию за 99 ₽.'], ['Можно ли улучшить своё старое резюме?', 'Да. Загрузите файл PDF или DOCX — сервис распознает данные, а AI-версия улучшит формулировки и оформление.'], ['Как получить доступ к кабинету?', 'Кабинет создаётся автоматически при оплате: вы вводите email, пароль приходит на почту.']];
  const [openFaq, setOpenFaq] = React.useState(0);

  // Two section-padding tiers for consistent vertical rhythm on desktop.
  const padBig = isM ? '48px 18px' : '80px 40px'; // побольше — как в блоке «Шаблоны»
  const padSm = isM ? '36px 18px' : '56px 40px'; // поменьше — как в блоке «Как это помогает»
  const padSmX0 = isM ? '36px 0' : '56px 0'; // full-bleed tinted variant (small)

  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0428\u0430\u0431\u043B\u043E\u043D\u044B",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--bg-tint) 0%, #fff 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: isM ? 28 : 54,
      paddingBottom: isM ? 40 : 64,
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      gap: isM ? 32 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 12.5,
      fontWeight: 700,
      color: '#3F6B22',
      background: 'var(--brand-green-tint)',
      padding: '6px 14px',
      borderRadius: 999
    }
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \xB7 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \xB7 AI-\u0432\u0435\u0440\u0441\u0438\u044F 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 29 : 44,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '18px 0 0',
      textWrap: 'balance'
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043F\u0440\u043E\u0449\u0435 \u043F\u0440\u043E\u0439\u0442\u0438 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, "\u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0442\u0431\u043E\u0440")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: isM ? 15.5 : 17.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55,
      margin: '16px 0 0',
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E:"), " \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0432 PDF \u0444\u043E\u0440\u043C\u0430\u0442\u0435.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "\u041F\u043B\u0430\u0442\u043D\u043E:"), " \u0443\u043B\u0443\u0447\u0448\u0438\u043C \u0444\u043E\u0442\u043E AI, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u043C, \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u0442\u0430\u0440\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435, \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u043F\u043E\u0434 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('constructor')
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      color: 'var(--ink-secondary)'
    }
  }, "PDF \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \xB7 AI-\u0432\u0435\u0440\u0441\u0438\u044F 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \xB7 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: isM ? 'none' : 1,
      width: isM ? '100%' : 'auto',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ResumePreviewHero, {
    isM: isM
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: padSm
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    device: device,
    eyebrow: "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442",
    title: "\u0421\u0435\u0440\u0432\u0438\u0441 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435, \u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A",
    sub: "\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u044B, \u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 AI-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B: \u0443\u043B\u0443\u0447\u0448\u0430\u044E\u0442 \u0444\u043E\u0442\u043E, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044E\u0442 \u0441\u0442\u0430\u0440\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435, \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u044E\u0442 \u043E\u0442\u043A\u043B\u0438\u043A \u043F\u043E\u0434 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 36,
      maxWidth: 960,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, valueTool.map(r => /*#__PURE__*/React.createElement(ValueToolRow, {
    key: r.v,
    r: r,
    isM: isM
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: padBig
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    device: device,
    eyebrow: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
    title: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0443\u0442\u044C \u043A \u0433\u043E\u0442\u043E\u0432\u043E\u043C\u0443 \u0440\u0435\u0437\u044E\u043C\u0435",
    sub: "\u041C\u043E\u0436\u043D\u043E \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438 \u0441\u043A\u0430\u0447\u0430\u0442\u044C PDF \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0410 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C AI-\u0432\u0435\u0440\u0441\u0438\u044E: \u043E\u043D\u0430 \u0443\u0441\u043A\u043E\u0440\u0438\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435, \u0443\u043B\u0443\u0447\u0448\u0438\u0442 \u0444\u043E\u0442\u043E, \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0441 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442 \u043E\u0442\u043A\u043B\u0438\u043A \u043F\u043E\u0434 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
      gap: 20,
      marginTop: 36,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-sm)',
      padding: isM ? 22 : 28,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PriceChip, {
    tone: "free"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \xB7 0 \u20BD"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '14px 0 4px'
    }
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, "\u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u0430\u043C \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."), /*#__PURE__*/React.createElement(PathList, {
    steps: freeSteps,
    color: "var(--brand-green)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      borderRadius: 12,
      padding: '13px 15px',
      fontSize: 13,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => go('constructor')
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      border: '1.5px solid var(--brand-green)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-brand)',
      padding: isM ? 22 : 28,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PriceChip, {
    tone: "paid"
  }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F \xB7 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '14px 0 4px'
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u0435\u0435, \u0441\u0438\u043B\u044C\u043D\u0435\u0435, \u043F\u043E\u0434 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, "\u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435, \u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044E."), /*#__PURE__*/React.createElement(PathList, {
    steps: paidSteps,
    color: "var(--brand-yellow)",
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-green-tint)',
      borderRadius: 12,
      padding: '13px 15px',
      fontSize: 13,
      color: '#3F6B22',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u0412\u0445\u043E\u0434\u0438\u0442 \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u044E:"), " \u0432\u0441\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \xB7 PDF \u0438 DOCX \xB7 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \xB7 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \xB7 \u043F\u0440\u0430\u0432\u043A\u0438 \u0438 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0431\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => go('preview')
  }, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C AI-\u0432\u0435\u0440\u0441\u0438\u044E \xB7 99 \u20BD")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '24px auto 0',
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55
    }
  }, "\u0412 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0412\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435. \u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0443\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F AI-\u0443\u0441\u0438\u043B\u0435\u043D\u0438\u044F, DOCX, \u0432\u0441\u0435\u0445 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0438 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-tint)',
      padding: padSmX0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    device: device,
    eyebrow: "\u0427\u0435\u0441\u0442\u043D\u043E \u043E \u0446\u0435\u043D\u0435",
    title: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u2014 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435. \u0417\u0430 99 \u20BD \u2014 AI-\u0443\u0441\u0438\u043B\u0435\u043D\u0438\u0435",
    sub: "\u0411\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A: \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043D\u0435 \u0443\u0440\u0435\u0437\u0430\u043D\u0430, \u0430 AI-\u0432\u0435\u0440\u0441\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u043A\u043B\u0438\u043A \u0431\u044B\u0441\u0442\u0440\u0435\u0435, \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0438 \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044E."
  }), /*#__PURE__*/React.createElement(PricingCompare, {
    rows: rows,
    isM: isM,
    DS: DS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '22px auto 0',
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55
    }
  }, "\u0412 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0412\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0438 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0435 PDF. \u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0443\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F AI-\u0443\u0441\u0438\u043B\u0435\u043D\u0438\u044F, DOCX, \u0432\u0441\u0435\u0445 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0438 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('constructor')
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, "\u0411\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \xB7 PDF \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \xB7 AI-\u0432\u0435\u0440\u0441\u0438\u044F 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('templates');
    },
    style: {
      fontSize: 14,
      color: 'var(--brand-green)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: isM ? '48px 0' : '80px 40px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isM ? '0 18px' : 0
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    device: device,
    eyebrow: "\u0428\u0430\u0431\u043B\u043E\u043D\u044B",
    title: "\u041F\u0440\u0438\u043C\u0435\u0440\u044C\u0442\u0435 \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    sub: "\u041E\u0434\u0438\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0438 \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438."
  })), /*#__PURE__*/React.createElement(TemplateCarousel, {
    isM: isM,
    DS: DS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    onClick: () => go('templates')
  }, "\u0412\u0441\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: padSm
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    device: device,
    eyebrow: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B",
    title: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
  }), /*#__PURE__*/React.createElement("div", {
    itemScope: true,
    itemType: "https://schema.org/FAQPage",
    style: {
      maxWidth: 720,
      margin: '32px auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, faqs.map((f, i) => {
    const open = openFaq === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      itemScope: true,
      itemProp: "mainEntity",
      itemType: "https://schema.org/Question",
      style: {
        border: '1px solid var(--line)',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenFaq(open ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        padding: '16px 18px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: 15.5,
        fontWeight: 600,
        color: 'var(--ink)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      itemProp: "name"
    }, f[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-green)',
        fontSize: 22,
        lineHeight: 1,
        flexShrink: 0,
        transform: open ? 'rotate(45deg)' : 'none',
        transition: 'transform .2s'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      itemScope: true,
      itemProp: "acceptedAnswer",
      itemType: "https://schema.org/Answer",
      style: {
        maxHeight: open ? 320 : 0,
        overflow: 'hidden',
        transition: 'max-height .25s var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      itemProp: "text",
      style: {
        padding: '0 18px 16px',
        fontSize: 14.5,
        color: 'var(--ink-secondary)',
        lineHeight: 1.55
      }
    }, f[1])));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '28px auto 0',
      textAlign: 'center',
      background: 'var(--brand-blue-tint)',
      borderRadius: 16,
      padding: isM ? '26px 20px' : '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isM ? 18 : 20,
      fontWeight: 700,
      color: 'var(--brand-blue-deep)'
    }
  }, "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u041F\u0438\u0448\u0438\u0442\u0435, \u043C\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      marginTop: 18,
      background: 'var(--brand-blue)',
      color: '#fff',
      fontSize: 15.5,
      fontWeight: 700,
      padding: '12px 24px',
      borderRadius: 12,
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.9 4.3l-3.3 15.5c-.24 1.1-.9 1.36-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.01.5l.36-5.14L18 5.6c.4-.36-.09-.56-.62-.2L6.9 12.3l-4.96-1.55c-1.08-.34-1.1-1.08.23-1.6l19.4-7.48c.9-.33 1.68.2 1.34 1.63z"
  })), "Telegram"))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
const TEMPLATE_CARDS = [{
  render: () => /*#__PURE__*/React.createElement(window.TemplateStart, null),
  tag: 'free'
}, {
  render: () => /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "blue"
  }),
  tag: 'paid'
}, {
  render: () => /*#__PURE__*/React.createElement(window.TemplateAccent, {
    accent: "teal"
  }),
  tag: 'paid'
}, {
  render: () => /*#__PURE__*/React.createElement(window.TemplateOneColumn, {
    accent: "graphite"
  }),
  tag: 'paid'
}, {
  render: () => /*#__PURE__*/React.createElement(window.TemplateCompact, {
    accent: "blue"
  }),
  tag: 'paid'
}];
function TplCard({
  t,
  DS
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 186,
      height: 262,
      borderRadius: 10,
      overflow: 'hidden',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-sm)',
      position: 'relative',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(0.3)',
      transformOrigin: 'top left',
      width: 620,
      height: 876
    }
  }, t.render()), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    tone: t.tag === 'free' ? 'brand' : 'paid'
  }, t.tag === 'free' ? 'Бесплатно' : '99 ₽')));
}
function Chevron({
  dir
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, dir === 'left' ? /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }));
}
function TemplateCarousel({
  isM,
  DS
}) {
  const [idx, setIdx] = React.useState(0);
  const n = TEMPLATE_CARDS.length;
  if (!isM) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 32,
        overflowX: 'auto',
        padding: '0 0 10px',
        justifyContent: 'center'
      }
    }, TEMPLATE_CARDS.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(TplCard, {
      t: t,
      DS: DS
    }))));
  }
  const prev = () => setIdx((idx - 1 + n) % n);
  const next = () => setIdx((idx + 1) % n);
  const arrow = (onClick, dir) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": dir === 'left' ? 'Назад' : 'Вперёд',
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: dir
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, arrow(prev, 'left'), /*#__PURE__*/React.createElement(TplCard, {
    t: TEMPLATE_CARDS[idx],
    DS: DS
  }), arrow(next, 'right')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14
    }
  }, TEMPLATE_CARDS.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setIdx(i),
    "aria-label": 'Шаблон ' + (i + 1),
    style: {
      width: i === idx ? 20 : 7,
      height: 7,
      borderRadius: 999,
      background: i === idx ? 'var(--brand-green)' : 'var(--line)',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      transition: 'width .2s'
    }
  }))));
}
function PathList({
  steps,
  color,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 20
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: color,
      color: dark ? '#2B2B2B' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 13.5
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.35
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      lineHeight: 1.45,
      marginTop: 3
    }
  }, s.d)))));
}
function ResumePreviewHero({
  isM
}) {
  const scale = isM ? 0.44 : 0.52;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 620 * scale,
      height: 876 * scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      width: 620,
      height: 876
    }
  }, /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
    photo: "../../assets/hero-portrait.png"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 11,
      fontWeight: 700,
      color: '#8A5A0E',
      background: '#FDF0DA',
      padding: '4px 10px',
      borderRadius: 999,
      boxShadow: 'var(--shadow-sm)'
    }
  }, "\u0411\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"), /*#__PURE__*/React.createElement(FloatPill, {
    style: {
      bottom: 16,
      left: isM ? 6 : -8
    }
  }, "PDF \u0433\u043E\u0442\u043E\u0432"));
}
function FloatPill({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      borderRadius: 999,
      padding: '6px 11px',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--brand-green)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "6",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), children);
}
function AiToolPanel({
  r,
  isM
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#EEF6E0',
      borderRadius: 16,
      padding: isM ? 16 : 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 11.5,
      fontWeight: 700,
      color: '#4C7A2A',
      background: '#fff',
      padding: '5px 12px',
      borderRadius: 999
    }
  }, "AI-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 13,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(FIcon, {
    name: r.tIcon,
    color: "var(--brand-green)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.3
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      margin: '4px 0 0',
      lineHeight: 1.45
    }
  }, r.td))));
}
function ValueToolRow({
  r,
  isM
}) {
  if (isM) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 20,
        boxShadow: 'var(--shadow-md)',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 15,
        background: 'var(--brand-green-tint)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(FIcon, {
      name: r.vIcon,
      color: "var(--brand-green)",
      big: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--ink)',
        margin: 0,
        lineHeight: 1.25
      }
    }, r.v), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-secondary)',
        margin: '6px 0 0',
        lineHeight: 1.5
      }
    }, r.vd))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(AiToolPanel, {
      r: r,
      isM: true
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 24,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-md)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: 'var(--brand-green-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(FIcon, {
    name: r.vIcon,
    color: "var(--brand-green)",
    big: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0,
      lineHeight: 1.2
    }
  }, r.v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-secondary)',
      margin: '8px 0 0',
      lineHeight: 1.5
    }
  }, r.vd))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      color: 'var(--brand-green)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 38%',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(AiToolPanel, {
    r: r
  }))));
}
function FIcon({
  name,
  color,
  big
}) {
  const s = big ? 26 : 22;
  const p = {
    width: s,
    height: s,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'user':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 21c0-4 3.6-6 8-6s8 2 8 6"
      }));
    case 'wand':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M15 4V2M15 10V8M20 7h2M18 7h-2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13 8l-9 9 3 3 9-9z"
      }));
    case 'doc':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M6 2h8l4 4v16H6z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 2v4h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 13h6M9 17h6"
      }));
    case 'fileup':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M6 2h8l4 4v16H6z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 2v4h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 18v-6M9.5 14.5L12 12l2.5 2.5"
      }));
    case 'mic':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "12",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 11a7 7 0 0014 0M12 18v3"
      }));
    case 'clock':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 7v5l3 2"
      }));
    case 'target':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "target",
        color: color,
        size: s
      });
    case 'search':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M21 21l-4-4"
      }));
    case 'mail':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "mail",
        color: color,
        size: s
      });
    case 'send':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M22 2L11 13"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22 2l-7 20-4-9-9-4z"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l2.2 4.6L19 8l-3.5 3.4.8 4.9L12 14l-4.3 2.3.8-4.9L5 8l4.8-.4z"
      }));
  }
}
function Check() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--brand-green)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
function Dash() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)',
      opacity: 0.55
    }
  }, "\u2014");
}
function CellVal({
  v
}) {
  if (v === true) return /*#__PURE__*/React.createElement(Check, null);
  if (v === '—') return /*#__PURE__*/React.createElement(Dash, null);
  return /*#__PURE__*/React.createElement("span", null, v);
}
function PricingCompare({
  rows,
  isM,
  DS
}) {
  const PriceChip = window.SITE.PriceChip;
  const [plan, setPlan] = React.useState('ai'); // mobile toggle: 'free' | 'ai'

  if (!isM) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        margin: '32px auto 0',
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1.25fr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 18px',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--ink-secondary)'
      }
    }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 16px',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--ink)',
        fontSize: 16
      }
    }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement(PriceChip, {
      tone: "free"
    }, "0 \u20BD"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-secondary)'
      }
    }, "PDF \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 16px',
        background: '#F7FAF2',
        borderBottom: '1px solid var(--brand-green)',
        borderLeft: '1px solid var(--brand-green)',
        borderRight: '1px solid var(--brand-green)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--ink)',
        fontSize: 16
      }
    }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F"), /*#__PURE__*/React.createElement(PriceChip, {
      tone: "paid"
    }, "99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-secondary)'
      }
    }, "\u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438")), rows.map((r, i) => {
      const zebra = i % 2 ? '#F7FAF2' : '#fff';
      const last = i === rows.length - 1;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: r[0]
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '13px 18px',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--ink)',
          background: zebra,
          borderBottom: last ? 'none' : '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center'
        }
      }, r[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '13px 16px',
          fontSize: 13.5,
          color: 'var(--ink-secondary)',
          background: zebra,
          borderBottom: last ? 'none' : '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(CellVal, {
        v: r[1]
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '13px 16px',
          fontSize: 13.5,
          color: 'var(--ink)',
          background: '#F1F7E8',
          borderLeft: '1px solid var(--brand-green)',
          borderRight: '1px solid var(--brand-green)',
          borderBottom: last ? '1px solid var(--brand-green)' : '1px solid #D6E5BE',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 500
        }
      }, /*#__PURE__*/React.createElement(CellVal, {
        v: r[2]
      })));
    })));
  }

  // Mobile: toggle + feature list for the selected plan
  const col = plan === 'free' ? 1 : 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      margin: '28px auto 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: 4,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlan('free'),
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 700,
      color: plan === 'free' ? '#fff' : 'var(--ink-secondary)',
      background: plan === 'free' ? 'var(--brand-green)' : 'transparent',
      border: 'none',
      borderRadius: 999,
      padding: '9px 8px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \xB7 0 \u20BD"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlan('ai'),
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 700,
      color: plan === 'ai' ? '#fff' : 'var(--ink-secondary)',
      background: plan === 'ai' ? 'var(--brand-green)' : 'transparent',
      border: 'none',
      borderRadius: 999,
      padding: '9px 8px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F \xB7 99 \u20BD")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: plan === 'ai' ? '1.5px solid var(--brand-green)' : '1px solid var(--line)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      background: plan === 'ai' ? '#F1F7E8' : 'var(--bg-tint)',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, plan === 'free' ? 'Бесплатно' : 'AI-версия'), /*#__PURE__*/React.createElement(PriceChip, {
    tone: plan === 'free' ? 'free' : 'paid'
  }, plan === 'free' ? '0 ₽' : '99 ₽ один раз'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)',
      marginLeft: 'auto'
    }
  }, plan === 'free' ? 'PDF без регистрации' : 'без подписки')), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 16px',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line)',
      background: i % 2 ? '#FbFdF7' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 44%',
      fontSize: 13,
      color: r[col] === '—' ? 'var(--ink-secondary)' : 'var(--ink)',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(CellVal, {
    v: r[col]
  }))))));
}
window.SITE.Landing = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Payment.jsx
try { (() => {
// Screen 6 — Оплата. Шаг 1: email (создаём кабинет, пароль на почту). Шаг 2: сводка 99 ₽,
// что входит, промокод (свёрнут), способы оплаты YooKassa. Экран успеха: файлы + пароль на почте.
function Payment({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    PriceChip,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const [stage, setStage] = React.useState(state === 'success' ? 'success' : 1);
  const [promoOpen, setPromoOpen] = React.useState(false);
  const [method, setMethod] = React.useState('card');
  const card = {
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 14,
    padding: isM ? 22 : 30,
    boxShadow: 'var(--shadow-sm)'
  };
  const summary = /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: 'var(--bg-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--ink-secondary)'
    }
  }, "\u0417\u0430\u043A\u0430\u0437"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "99 \u20BD")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(PriceChip, {
    tone: "paid"
  }, "\u0420\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u043B\u0430\u0442\u0451\u0436 \xB7 \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      margin: '16px 0',
      height: 1
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['5 строгих пресетов', 'AI-улучшение фото', 'PDF и DOCX', 'Бессрочная ссылка', 'Личный кабинет'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(MiniCheck, null), " ", t))));
  if (stage === 'success') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-tint)',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(Header, {
      device: device,
      active: "\u0423\u0441\u043B\u0443\u0433\u0438",
      onCta: () => go('constructor')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        padding: isM ? '28px 16px' : '48px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...card,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--brand-green-tint)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "24",
      viewBox: "0 0 12 10",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 5L4.5 8.5L11 1.5",
      stroke: "var(--brand-green)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        margin: '18px 0 6px'
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u0440\u043E\u0448\u043B\u0430"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--ink-secondary)',
        margin: 0,
        lineHeight: 1.5
      }
    }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430. \u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink)'
      }
    }, "e.smirnova@mail.ru"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 22
      }
    }, [['Резюме.pdf', 'PDF'], ['Резюме.docx', 'DOCX']].map(([f, ext]) => /*#__PURE__*/React.createElement("div", {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: '1px solid var(--line)',
        borderRadius: 10,
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: '#fff',
        background: 'var(--brand-green)',
        padding: '4px 8px',
        borderRadius: 6
      }
    }, ext), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--ink)',
        flex: 1,
        textAlign: 'left'
      }
    }, f), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "outline",
      size: "sm"
    }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "ghost",
      size: "md",
      style: {
        flex: 1
      },
      onClick: () => go('auth')
    }, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "md",
      style: {
        flex: 1
      },
      onClick: () => go('cabinet')
    }, "\u041C\u043E\u0438 \u0440\u0435\u0437\u044E\u043C\u0435")))), /*#__PURE__*/React.createElement(Footer, {
      device: device
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '20px 16px' : '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StageDot, {
    n: 1,
    active: stage === 1,
    done: stage > 1,
    label: "Email"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 28,
      height: 2,
      background: 'var(--line)'
    }
  }), /*#__PURE__*/React.createElement(StageDot, {
    n: 2,
    active: stage === 2,
    done: false,
    label: "\u041E\u043F\u043B\u0430\u0442\u0430"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1.2fr 0.8fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, stage === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0
    }
  }, "\u041A\u0443\u0434\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      margin: '6px 0 0',
      lineHeight: 1.5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0438 \u043F\u0440\u0438\u0448\u043B\u0451\u043C \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u2014 \u0440\u0435\u0437\u044E\u043C\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.")), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email",
    placeholder: "you@mail.ru",
    value: "e.smirnova@mail.ru",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: () => setStage(2)
  }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043A \u043E\u043F\u043B\u0430\u0442\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      lineHeight: 1.5
    }
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\xBB, \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--brand-green)'
    }
  }, "\u043E\u0444\u0435\u0440\u0442\u0443"), " \u0438 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--brand-green)'
    }
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445"), ".")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0
    }
  }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043E\u0434\u0438\u043D \u0440\u0430\u0437. \u0411\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      margin: '6px 0 0'
    }
  }, "\u0421\u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0440\u043E\u0432\u043D\u043E ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "99 \u20BD"), ". \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B \xB7 YooKassa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(4,1fr)',
      gap: 8
    }
  }, [['card', 'Карта'], ['sber', 'SberPay'], ['yoo', 'ЮMoney'], ['tpay', 'T-Pay']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setMethod(k),
    style: {
      fontSize: 13,
      fontWeight: method === k ? 700 : 500,
      color: method === k ? 'var(--brand-green)' : 'var(--ink)',
      background: method === k ? 'var(--brand-green-tint)' : '#fff',
      border: method === k ? '1.5px solid var(--brand-green)' : '1px solid var(--line)',
      borderRadius: 10,
      padding: '11px 8px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, l)))), method === 'card' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B",
    placeholder: "0000 0000 0000 0000",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "\u0421\u0440\u043E\u043A",
    placeholder: "\u041C\u041C/\u0413\u0413",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "CVC",
    placeholder: "\u2022\u2022\u2022",
    onChange: () => {}
  }))), !promoOpen ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setPromoOpen(true),
    style: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      color: 'var(--brand-green)',
      fontWeight: 600,
      fontSize: 13.5,
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434") : /*#__PURE__*/React.createElement(DS.Input, {
    label: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434",
    onChange: () => {}
  }), state === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FBEDE7',
      border: '1px solid #F0C8B8',
      borderRadius: 10,
      padding: 12,
      fontSize: 13.5,
      color: '#B4451E'
    }
  }, "\u041F\u043B\u0430\u0442\u0451\u0436 \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D \u0431\u0430\u043D\u043A\u043E\u043C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    disabled: state === 'loading',
    onClick: () => setStage('success')
  }, state === 'loading' ? 'Обработка…' : 'Оплатить 99 ₽'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStage(1),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C email"))), summary)), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
function StageDot({
  n,
  active,
  done,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: done || active ? 'var(--brand-green)' : 'var(--line)',
      color: done || active ? '#fff' : 'var(--ink-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700
    }
  }, done ? '✓' : n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: active ? 700 : 500,
      color: active ? 'var(--ink)' : 'var(--ink-secondary)'
    }
  }, label));
}
window.SITE.Payment = Payment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Payment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PhotoUpload.jsx
try { (() => {
// Screen 3 — Загрузка фото. Free: вставка как есть (кроп круг/квадрат).
// Paid: AI-улучшение «до → после» с кнопкой «Применить», как платная фича с превью-тизером.
function PhotoUpload({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    PriceChip,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const [shape, setShape] = React.useState('circle');
  const [applied, setApplied] = React.useState(false);
  const photo = extra => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      borderRadius: shape === 'circle' ? '50%' : 16,
      overflow: 'hidden',
      background: 'var(--brand-blue-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-blue-deep)',
      fontSize: 54,
      fontWeight: 700,
      fontFamily: 'var(--font-sans)',
      border: '1px solid var(--line)',
      ...extra
    }
  }, "\u0415\u0421");
  const emptyState = /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px dashed var(--line)',
      borderRadius: 16,
      padding: isM ? '32px 20px' : '48px 32px',
      textAlign: 'center',
      background: 'var(--bg-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--line)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-green)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 14
    }
  }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u043E\u0442\u043E \u0441\u044E\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "JPG \u0438\u043B\u0438 PNG, \u0434\u043E 10 \u041C\u0411. \u0424\u043E\u0442\u043E \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0435\u0441\u0442\u044C \u2014 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md"
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '20px 16px' : '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0424\u043E\u0442\u043E \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-secondary)',
      margin: '6px 0 0'
    }
  }, "\u0424\u043E\u0442\u043E \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. \u0412 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043E\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0435\u0441\u0442\u044C."), state === 'empty' ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, emptyState) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      gap: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: 22,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "\u041E\u0431\u0440\u0435\u0437\u043A\u0430"), /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "brand"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '22px 0'
    }
  }, photo()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ShapeBtn, {
    active: shape === 'circle',
    onClick: () => setShape('circle'),
    label: "\u041A\u0440\u0443\u0433"
  }), /*#__PURE__*/React.createElement(ShapeBtn, {
    active: shape === 'square',
    onClick: () => setShape('square'),
    label: "\u041A\u0432\u0430\u0434\u0440\u0430\u0442"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    style: {
      width: '100%'
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u043E\u0442\u043E"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: 22,
      boxShadow: 'var(--shadow-sm)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "AI-\u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(PriceChip, {
    tone: "paid"
  }, "99 \u20BD \xB7 \u0440\u0430\u0437\u043E\u0432\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, photo({
    width: 116,
    height: 116,
    fontSize: 34,
    filter: 'saturate(0.7) brightness(0.96)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u0414\u043E")), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-green)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      position: 'relative'
    }
  }, photo({
    width: 116,
    height: 116,
    fontSize: 34,
    filter: applied ? 'none' : 'blur(4px)',
    background: 'var(--brand-blue-tint)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: applied ? 'var(--brand-green)' : 'var(--ink-secondary)',
      marginTop: 6,
      fontWeight: applied ? 700 : 400
    }
  }, "\u041F\u043E\u0441\u043B\u0435"))), applied ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#3F6B22',
      textAlign: 'center',
      marginBottom: 12
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u043E: \u0432\u044B\u0440\u043E\u0432\u043D\u0435\u043D \u0441\u0432\u0435\u0442, \u0443\u0431\u0440\u0430\u043D \u0444\u043E\u043D, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0430 \u0440\u0435\u0437\u043A\u043E\u0441\u0442\u044C.") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 1.5
    }
  }, "\u0420\u043E\u0432\u043D\u044B\u0439 \u0441\u0432\u0435\u0442, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439 \u0444\u043E\u043D \u0438 \u0434\u0435\u043B\u043E\u0432\u043E\u0439 \u0432\u0438\u0434. \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438."), state === 'loading' ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    disabled: true,
    style: {
      width: '100%'
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u2026") : applied ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    style: {
      width: '100%'
    },
    onClick: () => setApplied(false)
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B") : /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    style: {
      width: '100%'
    },
    onClick: () => setApplied(true)
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \xB7 99 \u20BD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      marginTop: 8
    }
  }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043E\u0434\u0438\u043D \u0440\u0430\u0437, \u0431\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "md",
    onClick: () => go('constructor')
  }, "\u2190 \u041A \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    onClick: () => go('preview')
  }, "\u0414\u0430\u043B\u0435\u0435 \u2192"))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
function ShapeBtn({
  active,
  onClick,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontSize: 13,
      fontWeight: active ? 700 : 500,
      color: active ? 'var(--brand-green)' : 'var(--ink-secondary)',
      background: active ? 'var(--brand-green-tint)' : 'var(--bg-tint)',
      border: active ? '1px solid var(--brand-green)' : '1px solid var(--line)',
      borderRadius: 8,
      padding: '7px 16px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, label);
}
window.SITE.PhotoUpload = PhotoUpload;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PhotoUpload.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PreviewExport.jsx
try { (() => {
// Screen 5 — Превью + экспорт. Слева фичи-чипы + превью резюме. Справа два оффера:
// «Скачать как есть» (0 ₽) и «Усилить перед отправкой» (AI-версия · 99 ₽).
function PreviewExport({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    PriceChip,
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const [tab, setTab] = React.useState('free'); // free | paid — управляет превью

  const previewEl = tab === 'free' ? /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
    photo: "../../assets/hero-portrait.png"
  }) : /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "blue"
  });
  const chips = tab === 'free' ? [{
    icon: 'doc',
    label: 'PDF'
  }, {
    icon: 'clock',
    label: 'Хранение 24 часа'
  }] : [{
    icon: 'sparkle',
    label: 'Фото улучшено'
  }, {
    icon: 'target',
    label: 'Под вакансию'
  }, {
    icon: 'doc',
    label: 'PDF + DOCX'
  }, {
    icon: 'clock',
    label: 'Хранение бессрочно'
  }];
  const chipCol = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isM ? 'row' : 'column',
      gap: 12,
      flexShrink: 0
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      width: isM ? 'auto' : 78,
      flex: isM ? 1 : 'none',
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      padding: isM ? '10px 8px' : '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'var(--brand-green-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: c.icon,
    color: "var(--brand-green)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink)',
      lineHeight: 1.25
    }
  }, c.label))));
  const PW = 620,
    ps = isM ? 0.5 : 0.64;
  const previewPane = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 12 : 20,
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      justifyContent: 'center',
      maxHeight: isM ? 460 : 640,
      overflow: 'hidden'
    }
  }, state === 'loading' ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 440,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      color: 'var(--ink-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Spinner, null), " \u0413\u043E\u0442\u043E\u0432\u0438\u043C \u0444\u0430\u0439\u043B\u2026") : /*#__PURE__*/React.createElement("div", {
    style: {
      width: PW * ps,
      maxWidth: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: PW,
      transform: `scale(${ps})`,
      transformOrigin: 'top left'
    }
  }, previewEl)));

  // ——— Оффер 1: скачать как есть ———
  const freeCard = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 18 : 20,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--ink)',
      flex: 1
    }
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u0430\u043A \u0435\u0441\u0442\u044C"), /*#__PURE__*/React.createElement(PriceChip, {
    tone: "free"
  }, "0 \u20BD")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginTop: 4
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '14px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Фирменный шаблон', 'Формат PDF', 'Без водяных знаков', 'Ссылка активна 24 часа'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(MiniCheck, null), " ", t))), state === 'error' ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: '#FBEDE7',
      border: '1px solid #F0C8B8',
      borderRadius: 10,
      padding: 14,
      fontSize: 13.5,
      color: '#B4451E'
    }
  }, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C PDF. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#B4451E',
      fontWeight: 700
    }
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430")) : /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 16
    }
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      background: 'var(--bg-tint)',
      border: '1px solid var(--line)',
      borderRadius: 10,
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-secondary)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "rezyume-online.ru/r/8fk2a1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: '#8A5A0E',
      background: '#FDF0DA',
      padding: '3px 8px',
      borderRadius: 999
    }
  }, "24 \u0447")));

  // ——— Оффер 2: усилить перед отправкой ———
  const upsell = [{
    icon: 'user',
    t: 'Улучшить фото',
    d: 'более деловой и аккуратный вид'
  }, {
    icon: 'sparkle',
    t: 'Усилить формулировки',
    d: 'опыт звучит убедительнее'
  }, {
    icon: 'target',
    t: 'Подогнать под вакансию',
    d: 'релевантные навыки и ключевые слова'
  }, {
    icon: 'mail',
    t: 'Сопроводительное письмо',
    d: 'готовый текст для отклика'
  }, {
    icon: 'doc',
    t: 'PDF + DOCX и бессрочная ссылка',
    d: 'удобно отправлять и хранить'
  }];
  const paidCard = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1.5px solid var(--brand-green)',
      borderRadius: 16,
      padding: isM ? 18 : 20,
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement(PriceChip, {
    tone: "paid"
  }, "AI-\u0432\u0435\u0440\u0441\u0438\u044F \xB7 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '10px 0 2px'
    }
  }, "\u0423\u0441\u0438\u043B\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)'
    }
  }, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      margin: '12px 0 0'
    }
  }, upsell.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'var(--brand-green-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: u.icon,
    color: "var(--brand-green)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      alignItems: isM ? 'flex-start' : 'baseline',
      gap: isM ? 0 : 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, u.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, u.d))))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => go('payment')
  }, "\u0423\u0441\u0438\u043B\u0438\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0437\u0430 99 \u20BD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 10,
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-green)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })), "\u0411\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \xB7 \u043E\u0434\u0438\u043D \u043F\u043B\u0430\u0442\u0451\u0436 \xB7 \u043F\u0440\u0430\u0432\u043A\u0438 \u0431\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0423\u0441\u043B\u0443\u0433\u0438",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '20px 16px' : '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 24 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 6px'
    }
  }, "\u0412\u0430\u0448\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0433\u043E\u0442\u043E\u0432\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-secondary)',
      margin: '0 0 20px'
    }
  }, "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 PDF \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0438\u043B\u0438 \u0443\u0441\u0438\u043B\u044C\u0442\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044E."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: 4,
      marginBottom: 18
    }
  }, [['free', 'Бесплатно'], ['paid', 'AI-версия · 99 ₽']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: tab === k ? '#fff' : 'var(--ink-secondary)',
      background: tab === k ? 'var(--brand-green)' : 'transparent',
      border: 'none',
      borderRadius: 999,
      padding: '8px 18px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1.15fr 0.85fr',
      gap: isM ? 20 : 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      gap: isM ? 12 : 16
    }
  }, chipCol, previewPane), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, freeCard, paidCard))), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
function PIcon({
  name,
  color
}) {
  const p = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'user':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 21c0-4 3.6-6 8-6s8 2 8 6"
      }));
    case 'sparkle':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l1.8 4.9L18.5 9l-4.7 1.1L12 15l-1.8-4.9L5.5 9l4.7-1.1z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18 15l.7 1.8L20.5 17.5l-1.8.7L18 20l-.7-1.8L15.5 17.5l1.8-.7z"
      }));
    case 'target':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "target",
        color: color,
        size: 20
      });
    case 'mail':
      return /*#__PURE__*/React.createElement(window.SITE.FeatIcon, {
        name: "mail",
        color: color,
        size: 20
      });
    case 'doc':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M6 2h8l4 4v16H6z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 2v4h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 13h6M9 17h6"
      }));
    case 'clock':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 7v5l3 2"
      }));
    default:
      return null;
  }
}
function MiniCheck() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--brand-green)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
window.SITE.PreviewExport = PreviewExport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PreviewExport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PublicResume.jsx
try { (() => {
// Screen 9 — Публичная страница резюме по ссылке. Чистый просмотр.
// Для бесплатных — плашка «ссылка активна 24 часа».
function PublicResume({
  device = 'desktop',
  state = 'free',
  go
}) {
  const {
    Logo
  } = window.SITE;
  const DS = window.DS;
  const isM = device === 'mobile';
  const isFree = state !== 'paid';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--line)',
      padding: isM ? '10px 16px' : '12px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  }), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "sm",
    onClick: () => go('landing')
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0451 \u0440\u0435\u0437\u044E\u043C\u0435")), isFree && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FDF0DA',
      borderBottom: '1px solid #F0D9A8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: isM ? '9px 16px' : '10px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#8A5A0E",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#8A5A0E',
      fontWeight: 600,
      textAlign: 'center'
    }
  }, "\u042D\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430 24 \u0447\u0430\u0441\u0430. \u0411\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \u2014 \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430 99 \u20BD."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '20px 16px' : '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 12,
      overflow: 'hidden',
      transform: isM ? 'scale(0.56)' : 'scale(0.98)',
      transformOrigin: 'top center'
    }
  }, isFree ? /*#__PURE__*/React.createElement(window.TemplateStart, null) : /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "blue"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: isM ? -300 : 8
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md"
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF"), !isFree && /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md"
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C DOCX")), isFree && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      maxWidth: 420,
      lineHeight: 1.5
    }
  }, "\u0425\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u043F\u0430\u0434\u0430\u043B\u0430 \u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('preview');
    },
    style: {
      color: 'var(--brand-green)',
      fontWeight: 600
    }
  }, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 AI-\u0432\u0435\u0440\u0441\u0438\u044E \u0437\u0430 99 \u20BD"), ".")));
}
window.SITE.PublicResume = PublicResume;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PublicResume.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResumeBase.jsx
try { (() => {
// Screen — База резюме. Каталог опубликованных резюме (как «Примеры», но с подпиской):
// поле email + «Подписаться на новые резюме» → выбор интересных разделов/специальностей.
// + детальная карточка страницы резюме.
function ResumeBase({
  device = 'desktop',
  state = 'list',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer,
    PriceChip
  } = window.SITE;
  const isM = device === 'mobile';
  const POOL = [() => /*#__PURE__*/React.createElement(window.TemplateStart, null), () => /*#__PURE__*/React.createElement(window.TemplateClean, {
    accent: "blue"
  }), () => /*#__PURE__*/React.createElement(window.TemplateCompact, {
    accent: "teal"
  }), () => /*#__PURE__*/React.createElement(window.TemplateOneColumn, {
    accent: "graphite"
  }), () => /*#__PURE__*/React.createElement(window.TemplateAccent, {
    accent: "teal"
  }), () => /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
    photo: "../../assets/hero-portrait.png"
  })];
  const tplFor = id => POOL[id % POOL.length];
  const SECTIONS = ['Продажи и клиенты', 'IT и разработка', 'Маркетинг и реклама', 'Транспорт и логистика', 'Общественное питание', 'Административный персонал'];
  const CITIES = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Екатеринбург'];
  const RESUMES = [{
    prof: 'Менеджер по продажам',
    sec: 'Продажи и клиенты',
    exp: '6 лет',
    sal: 'от 120 000 ₽'
  }, {
    prof: 'Frontend-разработчик',
    sec: 'IT и разработка',
    exp: '4 года',
    sal: 'от 220 000 ₽'
  }, {
    prof: 'Интернет-маркетолог',
    sec: 'Маркетинг и реклама',
    exp: '5 лет',
    sal: 'от 150 000 ₽'
  }, {
    prof: 'Водитель категории C',
    sec: 'Транспорт и логистика',
    exp: '9 лет',
    sal: 'от 90 000 ₽'
  }, {
    prof: 'Повар',
    sec: 'Общественное питание',
    exp: '7 лет',
    sal: 'от 80 000 ₽'
  }, {
    prof: 'Офис-менеджер',
    sec: 'Административный персонал',
    exp: '3 года',
    sal: 'от 70 000 ₽'
  }, {
    prof: 'Аккаунт-менеджер',
    sec: 'Продажи и клиенты',
    exp: '5 лет',
    sal: 'от 110 000 ₽'
  }, {
    prof: 'Аналитик данных',
    sec: 'IT и разработка',
    exp: '4 года',
    sal: 'от 200 000 ₽'
  }, {
    prof: 'SMM-специалист',
    sec: 'Маркетинг и реклама',
    exp: '3 года',
    sal: 'от 90 000 ₽'
  }].map((r, i) => ({
    ...r,
    id: i,
    city: CITIES[i % CITIES.length],
    updated: ['сегодня', 'вчера', '2 дня назад', '3 дня назад'][i % 4]
  }));
  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curId, setCurId] = React.useState(1);
  const [secFilter, setSecFilter] = React.useState('Все');
  const [modal, setModal] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const [picks, setPicks] = React.useState({
    [SECTIONS[0]]: true
  });
  React.useEffect(() => {
    setView(state === 'detail' ? 'detail' : 'list');
  }, [state]);
  const cur = RESUMES.find(r => r.id === curId) || RESUMES[0];
  const open = id => {
    setCurId(id);
    setView('detail');
  };
  const filtered = secFilter === 'Все' ? RESUMES : RESUMES.filter(r => r.sec === secFilter);
  const picked = Object.keys(picks).filter(k => picks[k]);

  // ——— Subscribe bar ———
  const subscribeBar = /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-green)',
      color: '#fff',
      borderRadius: 16,
      padding: isM ? '20px' : '22px 28px',
      display: 'flex',
      flexDirection: isM ? 'column' : 'row',
      alignItems: isM ? 'stretch' : 'center',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isM ? 18 : 20,
      fontWeight: 700
    }
  }, subscribed ? 'Вы подписаны на новые резюме' : 'Новые резюме — на вашу почту'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      opacity: 0.92,
      marginTop: 4
    }
  }, subscribed ? `Разделы: ${picked.join(', ') || 'все'}. Изменить можно в письме.` : 'Присылаем свежие резюме по интересным вам разделам и специальностям, по мере пополнения базы.')), subscribed ? /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    onClick: () => setModal(true),
    style: {
      background: '#fff'
    }
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u044B") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexDirection: isM ? 'column' : 'row',
      minWidth: isM ? 'auto' : 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    placeholder: "you@mail.ru",
    value: "",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    onClick: () => setModal(true)
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u044E\u043C\u0435")));

  // ——— Subscribe modal ———
  const subModal = modal && /*#__PURE__*/React.createElement("div", {
    onClick: () => setModal(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(43,43,43,0.5)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: isM ? 22 : 30,
      width: '100%',
      maxWidth: 520,
      maxHeight: '86%',
      overflow: 'auto',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 4px'
    }
  }, "\u0427\u0442\u043E \u0432\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      margin: '0 0 18px',
      lineHeight: 1.5
    }
  }, "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0438\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u2014 \u0431\u0443\u0434\u0435\u043C \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043D\u0438\u043C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 18
    }
  }, SECTIONS.map(s => /*#__PURE__*/React.createElement(DS.Checkbox, {
    key: s,
    checked: !!picks[s],
    onChange: v => setPicks({
      ...picks,
      [s]: v
    }),
    label: s
  }))), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email \u0434\u043B\u044F \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",
    placeholder: "you@mail.ru",
    value: "",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      margin: '12px 0 16px',
      lineHeight: 1.45
    }
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0438\u0441\u0435\u043C. \u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "md",
    onClick: () => setModal(false)
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    disabled: picked.length === 0,
    onClick: () => {
      setSubscribed(true);
      setModal(false);
    }
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))));

  // ——— Resume card ———
  const Card = ({
    r
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => open(r.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      overflow: 'hidden',
      background: 'var(--bg-tint)',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: 'scale(0.27)',
      transformOrigin: 'top center'
    }
  }, tplFor(r.id)())), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, r.prof), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)'
    }
  }, r.city, " \xB7 \u043E\u043F\u044B\u0442 ", r.exp), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, r.sal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)'
    }
  }, "\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E ", r.updated))));
  const listMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: isM ? 12 : 18
    }
  }, filtered.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id,
    r: r
  }))));

  // ——— Sidebar (как в Образцах) ———
  const sidebar = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--line)',
      fontSize: 12.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--ink-secondary)'
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: isM ? 240 : 560,
      overflowY: 'auto'
    }
  }, ['Все', ...SECTIONS].map(s => {
    const on = secFilter === s;
    const count = s === 'Все' ? RESUMES.length : RESUMES.filter(r => r.sec === s).length;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => {
        setSecFilter(s);
        setView('list');
      },
      style: {
        width: '100%',
        textAlign: 'left',
        padding: '11px 16px',
        background: on ? 'var(--brand-green-tint)' : 'transparent',
        border: 'none',
        borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: on ? 700 : 500,
        color: on ? '#3F6B22' : 'var(--ink)',
        fontFamily: 'var(--font-sans)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, s), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        opacity: 0.7
      }
    }, count));
  })));

  // ——— Detail resume card ———
  const neighbours = RESUMES.filter(r => r.sec === cur.sec && r.id !== cur.id).concat(RESUMES.filter(r => r.sec !== cur.sec)).slice(0, 4);
  const detailMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('list'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 ", cur.sec), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 320px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 14 : 24,
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620 * (isM ? 0.52 : 0.72),
      height: 876 * (isM ? 0.52 : 0.72),
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: isM ? 'scale(0.52)' : 'scale(0.72)',
      transformOrigin: 'top left'
    }
  }, tplFor(cur.id)()))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: isM ? 'static' : 'sticky',
      top: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: 22,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, cur.prof), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-secondary)',
      marginTop: 4
    }
  }, cur.sec), [['Город', cur.city], ['Опыт работы', cur.exp], ['Зарплатные ожидания', cur.sal], ['Обновлено', cur.updated]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
      padding: '8px 0',
      fontSize: 13.5,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, v))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => go('auth')
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)',
      textAlign: 'center',
      marginTop: 8
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043E\u0442\u043A\u0440\u043E\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0432\u0445\u043E\u0434\u0430 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-green-tint)',
      border: '1px solid #C6DF9E',
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: '#3F6B22'
    }
  }, "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u2014 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#3F6B22',
      lineHeight: 1.5,
      margin: '6px 0 12px'
    }
  }, "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0440\u0430\u0437\u0434\u0435\u043B \xAB", cur.sec, "\xBB, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u044E\u043C\u0435."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "md",
    onClick: () => {
      setPicks({
        [cur.sec]: true
      });
      setModal(true);
    }
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0434\u0435\u043B")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 14px'
    }
  }, "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(4, 1fr)',
      gap: 14
    }
  }, neighbours.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    onClick: () => open(r.id),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 12,
      padding: 14,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, r.prof), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-secondary)',
      marginTop: 3
    }
  }, r.city, " \xB7 ", r.exp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--brand-green)',
      marginTop: 8
    }
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u2192"))))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0411\u0430\u0437\u0430 \u0440\u0435\u0437\u044E\u043C\u0435",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 24 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0411\u0430\u0437\u0430 \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432. \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u2014 \u0438 \u043D\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443.")), view === 'list' && subscribeBar, view === 'detail' ? detailMain : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '260px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, sidebar, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      marginBottom: 6
    }
  }, secFilter === 'Все' ? 'Все разделы' : secFilter), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 20 : 24,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 4px'
    }
  }, secFilter === 'Все' ? 'Все резюме' : secFilter), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginBottom: 20
    }
  }, filtered.length, " \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u044E\u043C\u0435."), listMain))), subModal, /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.ResumeBase = ResumeBase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResumeBase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Support.jsx
try { (() => {
// Screen — Поддержка. Форма обратной связи + быстрый канал в Telegram-бот поддержки.
function Support({
  device = 'desktop',
  state = 'default',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const isM = device === 'mobile';
  const [sent, setSent] = React.useState(state === 'success');
  const [topic, setTopic] = React.useState('Оплата и AI-версия');
  const [msg, setMsg] = React.useState('');
  React.useEffect(() => {
    setSent(state === 'success');
  }, [state]);
  const TOPICS = ['Оплата и AI-версия', 'Проблема со скачиванием', 'Вопрос по резюме', 'Публикация в Базе резюме', 'Удаление данных', 'Другое'];
  const TgIcon = () => /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.9 4.3l-3.3 15.5c-.24 1.1-.9 1.36-1.82.85l-5.03-3.7-2.43 2.34c-.27.27-.5.5-1 .5l.36-5.13 9.32-8.42c.4-.36-.09-.56-.63-.2L4.14 13.2l-4.96-1.56C-.09 11.34-.1 10.53 1.4 9.99l19.13-7.37c.9-.33 1.69.2 1.37 1.68z",
    transform: "translate(1 1)"
  }));
  const feedbackForm = /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 20 : 28,
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--brand-green-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-green)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-secondary)',
      lineHeight: 1.55,
      margin: '10px auto 0',
      maxWidth: 380
    }
  }, "\u041C\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F. \u041A\u043E\u043F\u0438\u044F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 email."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    style: {
      marginTop: 18
    },
    onClick: () => {
      setSent(false);
      setMsg('');
    }
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0435\u0449\u0451")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
    value: "",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430",
    placeholder: "you@mail.ru",
    value: "",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(DS.Select, {
    label: "\u0422\u0435\u043C\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F",
    value: topic,
    onChange: e => setTopic(e.target.value),
    options: TOPICS
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("textarea", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435. \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439 \u2014 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 4 \u0446\u0438\u0444\u0440\u044B \u043A\u0430\u0440\u0442\u044B.",
    style: {
      width: '100%',
      marginTop: 4,
      minHeight: 120,
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink)',
      border: '1px solid var(--line)',
      borderRadius: 8,
      padding: '11px 14px',
      boxSizing: 'border-box',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--ink-secondary)',
      border: '1px dashed var(--line)',
      borderRadius: 10,
      padding: '10px 12px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-secondary)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95L9.13 18.07"
  })), "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442 (\u0434\u043E 5 \u041C\u0411)"), /*#__PURE__*/React.createElement(DS.Checkbox, {
    checked: true,
    onChange: () => {},
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435"
  }), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    disabled: !msg.trim(),
    onClick: () => setSent(true)
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435")));
  const side = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#229ED9',
      color: '#fff',
      borderRadius: 16,
      padding: 22,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(TgIcon, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "Telegram-\u0431\u043E\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.92
    }
  }, "\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      opacity: 0.95,
      margin: '14px 0 16px'
    }
  }, "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u0442\u0443 \u2014 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E, \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443."), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/rezyume_online_bot",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'block',
      textAlign: 'center',
      background: '#fff',
      color: '#229ED9',
      fontWeight: 700,
      fontSize: 15,
      textDecoration: 'none',
      borderRadius: 10,
      padding: '12px 16px'
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C @rezyume_online_bot \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: 20,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 12
    }
  }, "\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430"), [['Telegram-бот', 'сразу — 5 минут'], ['Почта / форма', 'в течение рабочего дня'], ['Часы работы', 'пн–пт, 9:00–19:00 МСК']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
      padding: '7px 0',
      fontSize: 13.5,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-green-tint)',
      border: '1px solid #C6DF9E',
      borderRadius: 16,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#3F6B22',
      marginBottom: 6
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: '#3F6B22',
      lineHeight: 1.5,
      marginBottom: 12
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043E\u0442\u0432\u0435\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0447\u0430\u0441\u0442\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('faq'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--brand-green)',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C FAQ \u2192")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 26 : 32,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-secondary)',
      marginTop: 8
    }
  }, "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439, \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435\u043C, \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438 \u043B\u044E\u0431\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043F\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0443.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 330px',
      gap: 24,
      alignItems: 'start'
    }
  }, feedbackForm, side)), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Support = Support;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Support.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Templates.jsx
try { (() => {
// Screen — Шаблоны. Витрина визуальных шаблонов резюме (только визуал, без заполнения).
// Сетка шаблонов + цветовые варианты (акценты) + детальная страница шаблона.
function Templates({
  device = 'desktop',
  state = 'list',
  go
}) {
  const DS = window.DS;
  const {
    Header,
    Footer
  } = window.SITE;
  const ACC = window.PAID_ACCENTS;
  const isM = device === 'mobile';
  const TPL = [{
    key: 'start',
    n: '«Старт»',
    tag: 'free',
    accents: null,
    make: () => /*#__PURE__*/React.createElement(window.TemplateStart, null),
    d: 'Лёгкий шаблон без фото: голубой сайдбар и жёлтые акценты.'
  }, {
    key: 'startPhoto',
    n: '«Старт+фото»',
    tag: 'free',
    accents: null,
    make: () => /*#__PURE__*/React.createElement(window.TemplateStartPhoto, {
      photo: "../../assets/hero-portrait.png"
    }),
    d: 'То же оформление, но с местом под фотографию.'
  }, {
    key: 'clean',
    n: '«Чистый»',
    tag: 'paid',
    accents: ['blue', 'teal', 'graphite'],
    make: a => /*#__PURE__*/React.createElement(window.TemplateClean, {
      accent: a
    }),
    d: 'Широкая шапка, светлый сайдбар, сдержанный акцент.'
  }, {
    key: 'compact',
    n: '«Компакт»',
    tag: 'paid',
    accents: ['teal', 'blue', 'graphite'],
    make: a => /*#__PURE__*/React.createElement(window.TemplateCompact, {
      accent: a
    }),
    d: 'Плотная вёрстка для длинного опыта работы.'
  }, {
    key: 'onecol',
    n: '«Одна колонка»',
    tag: 'paid',
    accents: ['graphite', 'blue', 'teal'],
    make: a => /*#__PURE__*/React.createElement(window.TemplateOneColumn, {
      accent: a
    }),
    d: 'ATS-дружелюбный: одна колонка, читается роботами.'
  }, {
    key: 'academic',
    n: '«Академический»',
    tag: 'paid',
    accents: null,
    make: () => /*#__PURE__*/React.createElement(window.TemplateAcademic, null),
    d: 'PT Serif, монохром, формальный печатный вид.'
  }, {
    key: 'accent',
    n: '«Акцент»',
    tag: 'paid',
    accents: ['blue', 'teal', 'graphite'],
    make: a => /*#__PURE__*/React.createElement(window.TemplateAccent, {
      accent: a
    }),
    d: 'Плотный цветной сайдбар, белый текст на контрастном фоне.'
  }];
  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curKey, setCurKey] = React.useState('clean');
  const [accent, setAccent] = React.useState('blue');
  const [filter, setFilter] = React.useState('all');
  React.useEffect(() => {
    setView(state === 'detail' ? 'detail' : 'list');
  }, [state]);
  const cur = TPL.find(t => t.key === curKey) || TPL[0];
  const open = t => {
    setCurKey(t.key);
    setAccent(t.accents ? t.accents[0] : 'blue');
    setView('detail');
  };
  const Swatch = ({
    a,
    on,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: ACC[a].label,
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: ACC[a].solid,
      border: on ? '2px solid var(--ink)' : '2px solid #fff',
      boxShadow: '0 0 0 1px var(--line)',
      cursor: 'pointer',
      padding: 0
    }
  });

  // ——— Card ———
  const Card = ({
    t
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => open(t),
    style: {
      background: 'var(--bg-tint)',
      border: 'none',
      borderBottom: '1px solid var(--line)',
      padding: 0,
      cursor: 'pointer',
      height: 236,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: 'scale(0.38)',
      transformOrigin: 'top center'
    }
  }, t.make(t.accents ? t.accents[0] : undefined))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t.n), t.tag === 'free' ? /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "brand"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E") : /*#__PURE__*/React.createElement(window.SITE.PriceChip, {
    tone: "paid"
  }, "99 \u20BD")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-secondary)',
      lineHeight: 1.45,
      flex: 1
    }
  }, t.d), t.accents && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, t.accents.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: ACC[a].solid,
      boxShadow: '0 0 0 1px var(--line)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-secondary)'
    }
  }, t.accents.length, " \u0446\u0432\u0435\u0442\u0430")), /*#__PURE__*/React.createElement("button", {
    onClick: () => open(t),
    style: {
      alignSelf: 'flex-start',
      marginTop: 2,
      background: 'none',
      border: 'none',
      color: 'var(--brand-green)',
      fontWeight: 700,
      fontSize: 13.5,
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D \u2192")));
  const filtered = filter === 'all' ? TPL : TPL.filter(t => t.tag === filter);
  const listMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, [['all', 'Все'], ['free', 'Бесплатные'], ['paid', 'AI-версия · 99 ₽']].map(([k, l]) => {
    const on = filter === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setFilter(k),
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: on ? '#fff' : 'var(--ink-secondary)',
        background: on ? 'var(--brand-green)' : '#fff',
        border: '1px solid ' + (on ? 'var(--brand-green)' : 'var(--line)'),
        borderRadius: 999,
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: isM ? 14 : 20
    }
  }, filtered.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.key,
    t: t
  }))));
  const detailMain = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('list'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2190 \u0412\u0441\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isM ? '1fr' : '1fr 300px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: isM ? 14 : 24,
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620 * (isM ? 0.52 : 0.72),
      height: 876 * (isM ? 0.52 : 0.72),
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 620,
      transform: isM ? 'scale(0.52)' : 'scale(0.72)',
      transformOrigin: 'top left'
    }
  }, cur.make(cur.accents ? accent : undefined)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: isM ? 'static' : 'sticky',
      top: 28,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: 22,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, cur.n), cur.tag === 'free' ? /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "brand"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E") : /*#__PURE__*/React.createElement(window.SITE.PriceChip, {
    tone: "paid"
  }, "99 \u20BD")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-secondary)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, cur.d), cur.accents && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, "\u0426\u0432\u0435\u0442 \u0430\u043A\u0446\u0435\u043D\u0442\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, cur.accents.map(a => /*#__PURE__*/React.createElement(Swatch, {
    key: a,
    a: a,
    on: accent === a,
    onClick: () => setAccent(a)
  })))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 18
    },
    onClick: () => go('constructor')
  }, "\u0412\u0437\u044F\u0442\u044C \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    size: "md",
    style: {
      width: '100%',
      marginTop: 10
    },
    onClick: () => go('examples')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440\u044B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 14px'
    }
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, TPL.filter(t => t.key !== cur.key).map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => open(t),
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '9px 16px',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, t.n, " \u2192")))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-tint)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    device: device,
    active: "\u0428\u0430\u0431\u043B\u043E\u043D\u044B",
    onCta: () => go('constructor'),
    onLogin: () => go('auth')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: isM ? '18px 16px' : '28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isM ? 24 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0440\u0435\u0437\u044E\u043C\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-secondary)',
      marginTop: 6
    }
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435. \u0414\u0432\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B, \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u2014 \u0432 AI-\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437.")), view === 'detail' ? detailMain : listMain), /*#__PURE__*/React.createElement(Footer, {
    device: device
  }));
}
window.SITE.Templates = Templates;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
// Резюме Онлайн — shared site chrome: Logo, Header, Footer (foliage wave), small helpers.
// Reads window.DS (design-system bundle). Registers onto window.SITE.

const NAV = ['Шаблоны', 'Образцы', 'База резюме', 'Статьи', 'FAQ', 'Поддержка'];
const NAV_GO = {
  'Шаблоны': 'templates',
  'Образцы': 'examples',
  'База резюме': 'base',
  'Статьи': 'articles',
  'FAQ': 'faq',
  'Поддержка': 'support'
};
const navGo = n => {
  const id = NAV_GO[n];
  if (id && window.SITE && window.SITE.__navGo) window.SITE.__navGo(id);
};
function Logo({
  size = 34,
  mark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, mark && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: size * 0.62,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "\u0420\u0435\u0437\u044E\u043C\u0435\xA0\u041E\u043D\u043B\u0430\u0439\u043D")));
}
function Header({
  device = 'desktop',
  active = 'Услуги',
  onCta,
  onLogin
}) {
  const DS = window.DS;
  const [open, setOpen] = React.useState(false);
  const login = () => onLogin ? onLogin() : null;
  if (device === 'mobile') {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: '#fff',
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 26
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      "aria-label": "\u041C\u0435\u043D\u044E",
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 22,
        height: 2,
        background: 'var(--ink)',
        borderRadius: 2
      }
    })))), open && /*#__PURE__*/React.createElement("nav", {
      style: {
        borderTop: '1px solid var(--line)',
        padding: '8px 16px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        navGo(n);
      },
      style: {
        padding: '9px 0',
        fontSize: 15,
        color: n === active ? 'var(--brand-green)' : 'var(--ink)',
        textDecoration: 'none',
        fontWeight: n === active ? 700 : 500
      }
    }, n)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "ghost",
      size: "md",
      onClick: login,
      style: {
        flex: '0 0 auto'
      }
    }, "\u0412\u0445\u043E\u0434"), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "md",
      onClick: onCta,
      style: {
        flex: 1
      }
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"))));
  }
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      padding: '14px 40px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      navGo(n);
    },
    style: {
      fontSize: 14,
      color: n === active ? 'var(--brand-green)' : 'var(--ink)',
      textDecoration: 'none',
      fontWeight: n === active ? 700 : 500,
      whiteSpace: 'nowrap'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "md",
    onClick: login
  }, "\u0412\u0445\u043E\u0434"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "md",
    onClick: onCta
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435"))));
}
function Footer({
  device = 'desktop'
}) {
  const cols = [{
    h: 'Продукт',
    items: ['Конструктор', 'Примеры резюме', 'Шаблоны']
  }, {
    h: 'Компания',
    items: ['О сервисе', 'Блог', 'Контакты', 'Оферта']
  }, {
    h: 'Поддержка',
    items: ['Частые вопросы', 'Помощь', 'Реквизиты', 'Политика данных']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(FooterWave, {
    device: device
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-green)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: device === 'mobile' ? '24px 20px' : '36px 40px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: device === 'mobile' ? 24 : 48,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      fontWeight: 700
    }
  }, "\u0420\u0435\u0437\u044E\u043C\u0435 \u041E\u043D\u043B\u0430\u0439\u043D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.9,
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "\u0412\u0430\u0448 \u043E\u043F\u044B\u0442 \u2014 \u043D\u0430\u0448\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u041A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, AI-\u0432\u0435\u0440\u0441\u0438\u044F \u2014 99 \u20BD \u043E\u0434\u0438\u043D \u0440\u0430\u0437.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      opacity: 0.85,
      marginBottom: 10
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13.5,
      color: '#fff',
      opacity: 0.92,
      textDecoration: 'none'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: device === 'mobile' ? '12px 20px' : '14px 40px',
      fontSize: 12,
      opacity: 0.85,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0420\u0435\u0437\u044E\u043C\u0435 \u041E\u043D\u043B\u0430\u0439\u043D \xB7 \u0418\u041F \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432 \u0410. \u041C. \xB7 \u0418\u041D\u041D: 532116802715 \xB7 \u041E\u0413\u0420\u041D\u0418\u041F: 31753210021901"), /*#__PURE__*/React.createElement("span", null, "\u0421\u0435\u0440\u0432\u0438\u0441 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0440\u0435\u0437\u044E\u043C\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442")))));
}

// Subtle footer decoration: a slim green strip with a shallow wavy top edge and a
// faint repeating «tiny resume» watermark (motif reworked from the leaf фирменный элемент).
function FooterWave({
  device = 'desktop'
}) {
  const h = device === 'mobile' ? 24 : 32;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h,
      background: 'var(--brand-green)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 1200 ' + h,
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: h,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,9 C240,1 420,1 600,6 C820,12 980,12 1200,3 L1200,0 L0,0 Z",
    fill: "#fff"
  })));
}

// Small labelled section wrapper for landing blocks
function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
  device = 'desktop'
}) {
  const isM = device === 'mobile';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      maxWidth: 640,
      margin: center ? '0 auto' : '0'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--brand-green)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: isM ? 23 : 30,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '8px 0 0',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: isM ? 14.5 : 15.5,
      color: 'var(--ink-secondary)',
      margin: '12px 0 0',
      lineHeight: 1.5
    }
  }, sub));
}

// Price chip used to keep pricing honest & visible
function PriceChip({
  children,
  tone = 'paid'
}) {
  const map = {
    free: {
      bg: 'var(--brand-green-tint)',
      fg: '#3F6B22'
    },
    paid: {
      bg: '#FDF0DA',
      fg: '#8A5A0E'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: map[tone].bg,
      color: map[tone].fg,
      fontWeight: 700,
      fontSize: 13,
      padding: '5px 12px',
      borderRadius: 999
    }
  }, children);
}

// Единые иконки фич (по референсам): target — прицел с рисками и кольцом в центре,
// mail — конверт с клапаном. Используются на Лендинге, в Конструкторе и Превью+экспорте.
function FeatIcon({
  name,
  color = 'var(--brand-green)',
  size = 20
}) {
  const p = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (name === 'target') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.4v3.4M12 18.2v3.4M2.4 12h3.4M18.2 12h3.4"
  }));
  if (name === 'mail') return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.6 7.6l7.4 5.4 7.4-5.4"
  }));
  return null;
}
Object.assign(window.SITE, {
  Logo,
  Header,
  Footer,
  FooterWave,
  SectionHead,
  PriceChip,
  FeatIcon,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *   credit       Optional attribution text (e.g. 'Photo by Jane Doe on
 *                Unsplash') shown as a small overlay at the bottom-left of
 *                the filled slot. It belongs to the src image, so it only
 *                shows while src is what's displayed — a user-dropped
 *                image hides it.
 *   credit-href  Optional link for the credit overlay (e.g. the
 *                photographer's profile). http(s) URLs only — anything
 *                else renders the credit as plain text.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' + '.credit[href]:hover{background:rgba(0,0,0,.8);text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      '<a class="credit" part="credit" target="_blank" rel="noopener noreferrer"></a>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._credit = root.querySelector('.credit');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + http(s)-only href keep external strings inert.
      const credit = this.getAttribute('credit');
      const showCredit = !!(url && credit && !this._userUrl);
      if (showCredit) {
        this._credit.textContent = credit;
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') href = u.href;
          } catch {}
        }
        if (href) this._credit.setAttribute('href', href);else this._credit.removeAttribute('href');
      } else {
        this._credit.textContent = '';
        this._credit.removeAttribute('href');
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SkillBar = __ds_scope.SkillBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
