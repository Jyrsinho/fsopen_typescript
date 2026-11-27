import type {CoursePart} from "./types.ts";

export function Part(props: { coursePart: CoursePart }) {
    return (
        <div>
            <p><strong>name: {props.coursePart.name}</strong></p>
            <p>number of exercises: {props.coursePart.exerciseCount}</p>
            {props.coursePart.kind === "basic" && <p>description: {props.coursePart.description}</p>}
            {props.coursePart.kind === "group" && <p>number of group projects: {props.coursePart.groupProjectCount}</p>}
            {props.coursePart.kind === "background" && <p>background material: {props.coursePart.backgroundMaterial}</p>}
            <br></br>
        </div>
    )
}

export default Part;