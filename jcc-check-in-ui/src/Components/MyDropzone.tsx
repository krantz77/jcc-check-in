import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ExcelRenderer } from "react-excel-renderer";
import {DropzoneOptions, useDropzone} from "react-dropzone";

const StyledDropBox = styled.div`
  cursor: pointer;
  border: black 2px dotted;
  &:hover {
    border: black 2px solid;
  }
`;
export interface IDropzoneProps {
    set: (resp: any) => void;
}

function MyDropzone({ set }: IDropzoneProps) {
    const [name, setName] = useState("");
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            acceptedFiles.forEach((file) => {
                ExcelRenderer(file, (err: Error, resp: any) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let charNum = 64;
                        let i = 0;
                        while (i < resp.cols.length) {
                            resp.cols[i].name = String.fromCharCode(i + charNum);
                            i++;
                        }
                        resp.cols.push({ name: String.fromCharCode(i + charNum), key: i });
                        set(resp);
                        setName(file.name);
                    }
                });
            });
        },
        [set]
    );
    const { getRootProps, getInputProps } = useDropzone({ onDrop } as DropzoneOptions);

    return (
        <StyledDropBox {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            {name && <h3>{name}</h3>}
        </StyledDropBox>
    );
}

export default MyDropzone;
