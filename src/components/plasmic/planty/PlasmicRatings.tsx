// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qypGRFiT5EqbMS3JE3NhBQ
// Component: LRkC9OCLRYTXtV
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: qypGRFiT5EqbMS3JE3NhBQ/projectcss
import sty from "./PlasmicRatings.module.css"; // plasmic-import: LRkC9OCLRYTXtV/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: OJE-yQ7XJEae7x/icon

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};
export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};
type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootstars_five]: hasVariant(variants, "stars", "five"),
          [sty.rootstars_four]: hasVariant(variants, "stars", "four"),
          [sty.rootstars_one]: hasVariant(variants, "stars", "one"),
          [sty.rootstars_three]: hasVariant(variants, "stars", "three"),
          [sty.rootstars_two]: hasVariant(variants, "stars", "two"),
          [sty.rootstars_zero]: hasVariant(variants, "stars", "zero")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {(hasVariant(variants, "stars", "zero") ? true : true) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__j6XTw, {
              [sty.svgstars_five__j6XTwHIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_zero__j6XTww5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__cIkiP, {
              [sty.svgstars_five__cIkiPhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__cIkiPLxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__cIkiPRxX4]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__cIkiP98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__cIkiPTsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__cIkiPw5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg___6NWfG, {
              [sty.svgstars_five___6NWfGhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four___6NWfGLxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one___6NWfGRxX4]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three___6NWfG98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two___6NWfGTsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero___6NWfGw5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__vhWU, {
              [sty.svgstars_five__vhWUHIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__vhWULxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__vhWURxX4]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__vhWU98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__vhWUTsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__vhWUw5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__zVgU, {
              [sty.svgstars_five__zVgUhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__zVgULxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__zVgURxX4]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__zVgU98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__zVgUTsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__zVgUw5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__uCBpO, {
              [sty.svgstars_five__uCBpOhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__uCBpOLxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__uCBpORxX4]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__uCBpO98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__uCBpOTsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__uCBpOw5LsB]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__ipJr2, {
              [sty.svgstars_five__ipJr2HIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__ipJr2LxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_three__ipJr298KUn]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__ipJr2TsfHa]: hasVariant(
                variants,
                "stars",
                "two"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__wxhIh, {
              [sty.svgstars_five__wxhIhhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__wxhIhLxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_three__wxhIh98KUn]: hasVariant(
                variants,
                "stars",
                "three"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg___1PwlX, {
              [sty.svgstars_five___1PwlXhIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four___1PwlXLxeN5]: hasVariant(
                variants,
                "stars",
                "four"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant(variants, "stars", "five") ? true : true) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__z46DS, {
              [sty.svgstars_five__z46DShIkBb]: hasVariant(
                variants,
                "stars",
                "five"
              )
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>

      {p.renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotTargetNumReviews)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatings__VariantsArgs;
    args?: PlasmicRatings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRatings__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRatings__ArgProps,
          internalVariantPropNames: PlasmicRatings__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */