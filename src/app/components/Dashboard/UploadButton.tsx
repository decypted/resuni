"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {useState} from "react"
import Link from "next/link";

const UploadButton = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
          <Button onPress={onOpen}>Upload Resume</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Upload Your Resume</ModalHeader>
                  <ModalBody>
                    <p> 
                      Getting started is easy, Simply upload your resume and we'll handle the rest.
                    </p>
                    <p>
                      <span className=""></span>
                    </p>
                    <p >
                     <span className=" text-red-500">Disclaimer: </span> Please read & adhere to our <Link href="/">Terms Of Service</Link> and <Link href="/">Acceptable Use Policy</Link> or your account may be subjected to <span className="font-bold">Termination</span> in accordance with our <Link href="/">Abuse & Safety Policy
                     </Link> 
                     </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
    }

export default UploadButton