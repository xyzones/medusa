import {
  deleteTaxRatesWorkflow,
  updateTaxRatesWorkflow,
} from "@medusajs/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@medusajs/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../../types/routing"
import { refetchTaxRate } from "../helpers"
import {
  AdminGetTaxRateParamsType,
  AdminUpdateTaxRateType,
} from "../validators"
import { HttpTypes } from "@medusajs/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpdateTaxRateType>,
  res: MedusaResponse<HttpTypes.AdminTaxRateResponse>
) => {
  await updateTaxRatesWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: { ...req.validatedBody, updated_by: req.auth_context.actor_id },
    },
  })

  const taxRate = await refetchTaxRate(
    req.params.id,
    req.scope,
    req.remoteQueryConfig.fields
  )
  res.status(200).json({ tax_rate: taxRate })
}

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetTaxRateParamsType>,
  res: MedusaResponse<HttpTypes.AdminTaxRateResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const variables = { id: req.params.id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "tax_rate",
    variables,
    fields: req.remoteQueryConfig.fields,
  })

  const [taxRate] = await remoteQuery(queryObject)
  res.status(200).json({ tax_rate: taxRate })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminTaxRateDeleteResponse>
) => {
  const id = req.params.id
  await deleteTaxRatesWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "tax_rate",
    deleted: true,
  })
}
