// interface Props {
//         id:string;
// }
// const Edit: React.FC<Props> = ({id}) => {
//     return (
//         <h1>
//             Edit page {id}
//         </h1>
//     );
// }
// export default Edit

type Props = {
    params: {
        edit: string;
    };
}

const Edit = ({params: {edit}}:Props) => {
    return (
        <h1>
            Edit page {edit}
        </h1>
    );
}


export default Edit