import React from "react";
import { Button, Box, Card, CardBody, CardHeader, Heading, Link, Flex, InputGroup, Input, InputRightElement, Spacer, Divider } from "@chakra-ui/react";

import { Block } from "./components";
import "./Home.css";

const Home = ({ block, getBlock, blockNumber, setBlockNumber, currentBlockNumber }) => {
	const handleInput = (e) => {
		if (e.target.value === "") {
			return;
		}
		setBlockNumber(parseInt(e.target.value));
	};

	return (
		<Box className="Home" >
			<Flex flexDirection="row">
				<Card w="15%">
	 				<CardHeader>
	 					<Heading size="md">Current block</Heading>
	 				</CardHeader>
	 				<CardBody><Link onClick={ () => getBlock(currentBlockNumber) }><Heading size="lg">{ currentBlockNumber }</Heading></Link></CardBody>
	 			</Card>
				<Spacer />
				<Card w="84%">
					<CardHeader>
						<Heading size="md">Search block</Heading>
					</CardHeader>
					<CardBody>
						<InputGroup size='md'>
							<Input
								type="text"
								placeholder="Enter block number" onChange={ handleInput }/>
						</InputGroup>
					</CardBody>
				</Card>
			</Flex>
			<Box h="1vh" />
			<Flex>
	            <Card w="full">
	                <CardHeader>
						<Heading size="md">Block details</Heading>
	                </CardHeader>
	                <Divider />
	                <CardBody>
		                <Block block={ block }/>
	                </CardBody>
	            </Card>
			</Flex>
		</Box>
	)
}

export default Home;