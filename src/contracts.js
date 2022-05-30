import {Contract} from 'ethers'

import ensContract from '@apbigcod/nns-contracts/build/contracts/ENSRegistry.json'
import reverseRegistrarContract from '@apbigcod/nns-contracts/build/contracts/ReverseRegistrar.json'
import resolverContract from '@apbigcod/nns-contracts/build/contracts/Resolver.json'
import dnsResolverContract from '@apbigcod/nns-contracts/build/contracts/DNSResolver.json'
import testRegistrarContract from '@apbigcod/nns-contracts/build/contracts/TestRegistrar.json'
import dnsRegistrarContract from '@apbigcod/nns-contracts/build/contracts/DNSRegistrar.json'
import permanentRegistrarContract from '@apbigcod/nns-contracts/build/contracts/BaseRegistrarImplementation.json'
import permanentRegistrarControllerContract
    from '@apbigcod/nns-contracts/build/contracts/ETHRegistrarControllerWithReservation.json'

// legacy contracts
import {abi as legacyAuctionRegistrarContract} from '@ensdomains/contracts/abis/ens/HashRegistrar'
import {abi as bulkRenewalContract} from '@ensdomains/contracts/abis/ethregistrar/BulkRenewal'
import {abi as deedContract} from '@ensdomains/contracts/abis/ens/Deed'
import {abi as oldResolverContract} from '@ensdomains/contracts/abis/ens-022/PublicResolver.json'

function getReverseRegistrarContract({address, provider}) {
    return new Contract(address, reverseRegistrarContract, provider)
}

function getResolverContract({address, provider}) {
    return new Contract(address, resolverContract, provider)
}

function getDNSResolverContract({address, provider}) {
    return new Contract(address, dnsResolverContract, provider)
}

function getOldResolverContract({address, provider}) {
    return new Contract(address, oldResolverContract, provider)
}

function getENSContract({address, provider}) {
    return new Contract(address, ensContract, provider)
}

function getTestRegistrarContract({address, provider}) {
    return new Contract(address, testRegistrarContract, provider)
}

function getDnsRegistrarContract({parentOwner, provider}) {
    return new Contract(parentOwner, dnsRegistrarContract, provider)
}

function getPermanentRegistrarContract({address, provider}) {
    return new Contract(address, permanentRegistrarContract, provider)
}

function getPermanentRegistrarControllerContract({address, provider}) {
    return new Contract(address, permanentRegistrarControllerContract, provider)
}

function getDeedContract({address, provider}) {
    return new Contract(address, deedContract, provider)
}

function getLegacyAuctionContract({address, provider}) {
    return new Contract(address, legacyAuctionRegistrarContract, provider)
}

function getBulkRenewalContract({address, provider}) {
    return new Contract(address, bulkRenewalContract, provider)
}

export {
    getTestRegistrarContract,
    getReverseRegistrarContract,
    getENSContract,
    getResolverContract,
    getDNSResolverContract,
    getOldResolverContract,
    getDnsRegistrarContract,
    getPermanentRegistrarContract,
    getPermanentRegistrarControllerContract,
    getLegacyAuctionContract,
    getDeedContract,
    getBulkRenewalContract
}
