

let _headers = { "User-Agent": "Mozilla/5.0"
, "Content-Type": "Content-Type"
, "Authorization": ".............................." 
};

//let t = "8d0d63a0ba48ba469c45f08ce08bd4e2";  //acc 1

//let t = "1ff7588229aef67d3ba8f57eac2b943f";  //acc 2

let t = "a32d62b3461c15b2042c6458e2e5d454";  //acc 3

//let t = "8ff697426e6339874fabb9054105770d";  //acc 4

//let t = "495cc3beeff0f48728609cfc8135d4ab";  //acc 5

let _endpoints = [
    {
        name: "EthereumMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/eth/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "EthereumHolesky",
        url: "https://g.w.lavanet.xyz:443/gateway/hol1/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "EthereumSepolia",
        url: "https://g.w.lavanet.xyz:443/gateway/sep1/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "SecretNetwork",
        url: "https://g.w.lavanet.xyz:443/gateway/secret/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "StarknetMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/strk/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "starknet_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "StarknetSepolia",
        url: "https://g.w.lavanet.xyz:443/gateway/strks/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "starknet_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "NearMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/near/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "block", "params": { "finality": "final" }, "id": 1 }),
    },
    {
        name: "NearTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/neart/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "block", "params": { "finality": "final" }, "id": 1 }),
    },
    {
        name: "Avalanche",
        url: "https://g.w.lavanet.xyz:443/gateway/avax/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "APtos",
        url: "https://g.w.lavanet.xyz:443/gateway/apt1/rest/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "StargazeMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/strgz/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "SargazeTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/strgzt/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "JunoMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/jun1/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "JunoTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/junt1/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "OsmosisMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/osmosis/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "OsmosisTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/osmosist/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "CosmoshubMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/cosmoshub/rpc-http/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "CosmoshubTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/cosmoshubt/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "AxelarMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/axelar/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "AxelarTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/axelart/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "Lava-testnet",
        url: "https://g.w.lavanet.xyz:443/gateway/lav1/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "AgoricMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/agoric/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "AgoricTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/agorict/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "EvmosMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/evmos/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "EvmosTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/evmost/tendermint-rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "CantoMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/canto/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "BaseMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/base/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "BaseTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/baset/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "FantomMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/ftm250/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "BlastMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/blast/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "Filecoin",
        url: "https://g.w.lavanet.xyz:443/gateway/fvm/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "Polygon",
        url: "https://g.w.lavanet.xyz:443/gateway/polygon1/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "Celo",
        url: "https://g.w.lavanet.xyz:443/gateway/celo/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "ArbitrumOne",
        url: "https://g.w.lavanet.xyz:443/gateway/arb1/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "ArbitrumNova",
        url: "https://g.w.lavanet.xyz:443/gateway/arbn/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "ArbitrumNova",
        url: "https://g.w.lavanet.xyz:443/gateway/optm/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "Berachain",
        url: "https://g.w.lavanet.xyz:443/gateway/berat/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": "1" }),
    },
    {
        name: "SolanaMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/solana/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "getBlockHeight", "params": [], "id": "1" }),
    },
    {
        name: "SolanaMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/solanat/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "getBlockHeight", "params": [], "id": "1" }),
    },
    {
        name: "KoiiTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/koiit/rpc-http/" + t ,
        method: "post",
        body: JSON.stringify({ "jsonrpc": "2.0", "method": "getBlockHeight", "params": [], "id": "1" }),
    },
    {
        name: "Subsquid",
        url: "https://g.w.lavanet.xyz:443/gateway/sqdsubgraph/graphql/" + t ,
        method: "post",
        body: '{"query":"{pools(first: 5) {id poolid platform {id} name}}"}',
    },
    {
        name: "celestiaMainnet",
        url: "https://g.w.lavanet.xyz:443/gateway/celestia/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "get",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },
    {
        name: "celestiaTestnet",
        url: "https://g.w.lavanet.xyz:443/gateway/celestiatm/rest/" + t + "/cosmos/base/tendermint/v1beta1/blocks/latest",
        method: "GET",
        //body: JSON.stringify({ "jsonrpc": "2.0", "method": "status", "params": [], "id": "1" }),
    },

];


exports.Headers = _headers;
exports.Endpoints = _endpoints;