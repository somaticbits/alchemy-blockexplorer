import {
	Flex,
	Spacer,
	Text,
	Heading,
	Accordion,
	TableContainer,
	Table,
	Thead,
	Tr,
	Tbody,
	Td,
	Th
} from "@chakra-ui/react";

import Transaction from "./Transaction";

const Block = ({ block }) => {
	return (
		<Flex flexDirection="row" maxHeight="60vh">
			<Flex flexDirection="column">
				{ block && (
					<>
						{["difficulty", "extraData", "hash", "parentHash", "miner", "nonce", "number", "timestamp"].map((key, index) => (
							<>
								<Heading key={ index } size="xs" textTransform="uppercase">{ key }: </Heading>
								<Text>{ block[key].toString().length > 20 ?
									`${ block[key].toString().substring(0, 10) }..${ block[key].toString().slice(-10) }` : block[key].toString() }
								</Text>
							</>
						))}
					</>
				)}
			</Flex>
			<Spacer />
			<Flex flexDirection="column" overflowY="scroll" w="80%">
				{ block && (
			        <>
			            <Heading size="xs" textTransform="uppercase">Transactions</Heading>
			            <Accordion allowToggle>
			                { block.transactions.map((transaction, index) => (
			                    <Transaction key={ index } transaction={ transaction } />
			                )) }
			            </Accordion>
			        </>
				)}
			</Flex>
		</Flex>
	)
}

export default Block;