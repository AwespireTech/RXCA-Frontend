import { API_URL } from "@/constant"
import {
  CreateDaoPayload,
  GetDaosParams,
  RevokeDaoPayload,
  ValidateDaoPayload
} from "@/interfaces/dao.interface"

export const getDaos = async (params?: GetDaosParams) => {
  const res = await fetch(`${API_URL}/dao?` + new URLSearchParams(params))
  const json = await res.json()

  return json.daos
}

export const getDaoByAddress = async (address: string) => {
  const res = await fetch(`${API_URL}/dao/${address}`)
  const json = await res.json()

  return json.daos
}

export const createDao = async (body: CreateDaoPayload) => {
  const res = await fetch(`${API_URL}/dao`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const json = await res.json()

  return json
}

export const deleteDao = async (daoAddress: string) => {
  const res = await fetch(`${API_URL}/dao/${daoAddress}`, {
    method: "DELETE"
  })
  const json = await res.json()

  return json.daos
}

export const validateDao = async (daoAddress: string, body: ValidateDaoPayload) => {
  const res = await fetch(`${API_URL}/dao/${daoAddress}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const json = await res.json()

  return json
}

export const revokeDao = async (daoAddress: string, body: RevokeDaoPayload) => {
  const res = await fetch(`${API_URL}/dao/${daoAddress}/revoke`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const json = await res.json()

  return json
}

export const authAddress = async (address: string) => {
  const res = await fetch(`${API_URL}/auth/${address}`)
  const json = await res.json()

  return json.isAdmin
}
