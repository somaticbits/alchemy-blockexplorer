import { Box, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Spacer, Heading, Text } from "@chakra-ui/react";

const Transaction = ({ transaction }) => {
	return (
		<AccordionItem>
			<h2>
				<AccordionButton>
					<Heading size="xs">{ transaction.hash }</Heading>
					<Spacer />
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>
				{ transaction && (
					<>
						{["blockHash", "blockNumber", "from", "hash", "nonce", "to"].map((key, index) => (
							<Box key={ index }>
								<Heading size="xs" textTransform="uppercase">{ key }: </Heading>
								<Text>{ transaction[key] }</Text>
							</Box>
						))}
					</>
				)}
			</AccordionPanel>
		</AccordionItem>
	)
}

export default Transaction;